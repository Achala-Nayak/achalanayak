import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { BlogPost } from '@/components/blog-card';

const postsDirectory = path.join(process.cwd(), 'src/data/posts');

// Get all blog posts from markdown files
export function getAllBlogPosts(): BlogPost[] {
  try {
    // Check if posts directory exists
    if (!fs.existsSync(postsDirectory)) {
      console.warn('Posts directory does not exist:', postsDirectory);
      return [];
    }

    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames
      .filter(fileName => fileName.endsWith('.md'))
      .map(fileName => {
        const slug = fileName.replace(/\.md$/, '');
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        
        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents);
        
        return {
          slug,
          content: matterResult.content,
          ...matterResult.data,
        } as BlogPost & { content: string };
      });

    // Filter for published posts and sort by date
    return allPostsData
      .filter(post => post.published === true || post.published === undefined)
      .sort((a, b) => {
        // Sort by date in descending order
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      });
  } catch (error) {
    console.error("Error retrieving blog posts:", error);
    return [];
  }
}

// Get a blog post by slug
export function getBlogPostBySlug(slug: string): (BlogPost & { content: string }) | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    
    if (!fs.existsSync(fullPath)) {
      console.error(`Blog post not found: ${slug}.md`);
      return null;
    }
    
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);
    
    return {
      slug,
      content: matterResult.content,
      ...matterResult.data,
    } as BlogPost & { content: string };
  } catch (error) {
    console.error(`Error getting blog post ${slug}:`, error);
    return null;
  }
}

// Helper function to calculate reading time
export function calculateReadingTime(content: string): string {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
}