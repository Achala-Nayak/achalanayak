# Blog Draft Management System

This project includes a comprehensive draft blog system that allows you to write and manage blog posts before publishing them. This folder contains draft blog posts that are not yet ready for publication.

## Directory Structure

```
src/data/
├── posts/           # Published blog posts (visible on website)
├── drafts/          # Draft blog posts (not visible on website)
│   ├── README.md    # Documentation for drafts
│   ├── images/      # Images for draft posts
│   └── *.md         # Draft markdown files
└── projects/        # Project data
```

### Folder Contents
- `*.md` files: Draft blog posts in markdown format
- `images/`: Images used in draft blog posts

## Creating a Draft Blog Post

1. Create a new `.md` file in `src/data/drafts/`
2. Add proper frontmatter with `published: false`

### Frontmatter Format
Each draft should have frontmatter similar to published posts:

```yaml
---
title: "Your Blog Post Title"
date: "YYYY-MM-DD"
description: "Brief description of the blog post"
tags: ["tag1", "tag2"]
published: false  
---
```

### Example Draft:

```markdown
---
title: "My New Blog Post"
date: "2025-09-10"
description: "A brief description of my blog post"
tags: ["react", "nextjs", "programming"]
published: false
---

# My New Blog Post

Content goes here...
```

## Managing Drafts

### List all drafts:
```bash
npm run drafts:list
```

### Publish a draft:
```bash
npm run drafts:publish filename.md
```

This will:
- Move the file from `drafts/` to `posts/`
- Set `published: true` in the frontmatter
- Move any related images from `drafts/images/` to `posts/images/`

### Manual publishing:
You can also manually move files:
1. Move the `.md` file from `drafts/` to `posts/`
2. Change `published: false` to `published: true` in the frontmatter
3. Move any images from `drafts/images/` to `posts/images/`

## How it Works

- The blog system only reads from `src/data/posts/`
- Draft posts in `src/data/drafts/` are completely ignored by the frontend
- The `published: false` frontmatter provides additional protection
- Only posts with `published: true` (or undefined) are displayed
- Draft posts are automatically excluded from the frontend
- The `published: false` frontmatter ensures they won't appear even if accidentally moved to posts/

## Security Features

1. **Directory Isolation**: Drafts are in a separate directory that's not read by the blog system
2. **Published Flag**: Double protection with the `published` frontmatter field
3. **Automatic Filtering**: The `getAllBlogPosts()` function filters out unpublished posts

## Best Practices

1. Always set `published: false` in draft frontmatter
2. Use descriptive filenames for your drafts
3. Include proper tags and descriptions even in drafts
4. Keep draft-related images in `drafts/images/`
5. Test your posts locally before publishing
6. Use the same frontmatter format as published posts
7. You can set `published: true` when ready to publish

## Script Details

The `scripts/publish-draft.js` script provides:
- **Listing**: Shows all available drafts with titles and dates
- **Publishing**: Automatically moves drafts and updates frontmatter
- **Image Management**: Moves related images based on filename matching
- **Error Handling**: Validates files exist and provides helpful messages
