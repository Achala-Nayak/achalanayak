#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const DRAFTS_DIR = path.join(__dirname, '..', 'src', 'data', 'drafts');
const POSTS_DIR = path.join(__dirname, '..', 'src', 'data', 'posts');
const DRAFTS_IMAGES_DIR = path.join(DRAFTS_DIR, 'images');
const POSTS_IMAGES_DIR = path.join(POSTS_DIR, 'images');

/**
 * Publishes a draft blog post by moving it from drafts to posts
 * and setting published to true
 */
function publishDraft(fileName) {
  if (!fileName) {
    console.error('Usage: node scripts/publish-draft.js <filename>');
    console.error('Example: node scripts/publish-draft.js my-blog-post.md');
    process.exit(1);
  }

  // Remove .md extension if provided
  const slug = fileName.replace(/\.md$/, '');
  const draftPath = path.join(DRAFTS_DIR, `${slug}.md`);
  const postPath = path.join(POSTS_DIR, `${slug}.md`);

  // Check if draft exists
  if (!fs.existsSync(draftPath)) {
    console.error(`Draft not found: ${slug}.md`);
    console.error('Available drafts:');
    const drafts = fs.readdirSync(DRAFTS_DIR)
      .filter(file => file.endsWith('.md') && file !== 'README.md');
    drafts.forEach(draft => console.error(`  - ${draft}`));
    process.exit(1);
  }

  // Read and parse the draft
  const fileContents = fs.readFileSync(draftPath, 'utf8');
  const { data: frontmatter, content } = matter(fileContents);

  // Update frontmatter to set published to true
  frontmatter.published = true;
  
  // Generate the updated file content
  const updatedContent = matter.stringify(content, frontmatter);

  // Write to posts directory
  fs.writeFileSync(postPath, updatedContent);

  // Remove from drafts directory
  fs.unlinkSync(draftPath);

  console.log(`✅ Published: ${slug}.md`);
  console.log(`   Moved from: ${draftPath}`);
  console.log(`   Moved to: ${postPath}`);
  console.log(`   Published: true`);

  // Check for associated images and offer to move them
  const draftImages = [];
  if (fs.existsSync(DRAFTS_IMAGES_DIR)) {
    const imageFiles = fs.readdirSync(DRAFTS_IMAGES_DIR);
    // Look for images that might be related to this post (same slug)
    const relatedImages = imageFiles.filter(img => 
      img.toLowerCase().includes(slug.toLowerCase()) || 
      img.startsWith(slug)
    );
    
    if (relatedImages.length > 0) {
      console.log(`\\n📁 Found related images in drafts/images/:`);
      relatedImages.forEach(img => {
        console.log(`   - ${img}`);
        const sourcePath = path.join(DRAFTS_IMAGES_DIR, img);
        const destPath = path.join(POSTS_IMAGES_DIR, img);
        
        // Ensure posts/images directory exists
        if (!fs.existsSync(POSTS_IMAGES_DIR)) {
          fs.mkdirSync(POSTS_IMAGES_DIR, { recursive: true });
        }
        
        // Move the image
        fs.renameSync(sourcePath, destPath);
        console.log(`     → Moved to posts/images/${img}`);
      });
    }
  }

  console.log(`\\n🎉 Draft "${slug}" has been published successfully!`);
}

/**
 * Lists all available drafts
 */
function listDrafts() {
  if (!fs.existsSync(DRAFTS_DIR)) {
    console.log('No drafts directory found.');
    return;
  }

  const drafts = fs.readdirSync(DRAFTS_DIR)
    .filter(file => file.endsWith('.md') && file !== 'README.md');

  if (drafts.length === 0) {
    console.log('No draft blog posts found.');
    return;
  }

  console.log('📝 Available drafts:');
  drafts.forEach(draft => {
    const draftPath = path.join(DRAFTS_DIR, draft);
    const fileContents = fs.readFileSync(draftPath, 'utf8');
    const { data: frontmatter } = matter(fileContents);
    
    console.log(`  - ${draft}`);
    if (frontmatter.title) {
      console.log(`    Title: ${frontmatter.title}`);
    }
    if (frontmatter.date) {
      console.log(`    Date: ${frontmatter.date}`);
    }
    console.log('');
  });
}

// Handle command line arguments
const command = process.argv[2];

if (command === 'list' || command === '--list' || command === '-l') {
  listDrafts();
} else if (command) {
  publishDraft(command);
} else {
  console.log('Blog Draft Manager');
  console.log('');
  console.log('Usage:');
  console.log('  node scripts/publish-draft.js <filename>   # Publish a draft');
  console.log('  node scripts/publish-draft.js list         # List all drafts');
  console.log('');
  console.log('Examples:');
  console.log('  node scripts/publish-draft.js my-post.md');
  console.log('  node scripts/publish-draft.js list');
}
