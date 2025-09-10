# Blog Post Images

This folder contains images used in blog posts. 

## Organization

You can organize images in the following ways:

### Option 1: Flat structure
- Place all images directly in this folder
- Use descriptive filenames like `ai-trends-diagram.png`, `react-hooks-example.jpg`

### Option 2: Post-specific folders
- Create subfolders for each blog post: `getting-started-with-ai/`, `react-best-practices/`
- Place related images in their respective folders

### Option 3: By category
- Create folders by topic: `ai/`, `web-development/`, `tutorials/`
- Group related images together

## Usage in Markdown

To reference images in your blog posts, use relative paths:

```markdown
![Alt text](./images/your-image.png)
```

Or if using post-specific folders:
```markdown
![Alt text](./images/your-post-slug/diagram.png)
```

## Supported formats
- PNG
- JPG/JPEG
- WebP
- SVG
- GIF

## Best practices
- Use descriptive filenames
- Optimize images for web (consider using WebP format)
- Keep file sizes reasonable for fast loading
- Include alt text for accessibility
