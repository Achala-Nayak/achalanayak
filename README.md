# Achala Nayak Portfolio

This is the source code for Achala Nayak's personal portfolio website, built with Next.js, TypeScript, and Tailwind CSS.

## Features
- **Projects**: All project details are managed in a single file at `src/data/projects/projects.ts`.
- **Favicon**: To change the browser tab logo, replace `src/app/favicon.ico`.
- **Open Graph Image**: Social media previews use `/public/website_ss.png` (this is the image shown when your site link is shared on platforms like LinkedIn, Twitter, etc.).
- **Modular Data**: Resume and portfolio data are organized in `src/data/resume-data.tsx` and `src/data/projects/projects.ts`.

## Project Structure
```
cv/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── favicon.ico
│   ├── data/
│   │   ├── resume-data.tsx
│   │   └── projects/
│   │       ├── projects.ts
│   │       ├── types.ts
│   │       ├── utils.ts
│   │       └── index.ts
│   └── components/
│       └── ...
├── public/
│   ├── website_ss.png
│   └── ...
├── README.md
└── ...
```

## How to Update Projects
Edit `src/data/projects/projects.ts` to add, remove, or update project details. Each project supports:
- `title`, `techStack`, `description`, `category`, `featured`, and optional `link`.

## How to Change the Favicon
Replace `src/app/favicon.ico` with your new icon. Hard refresh your browser to see changes.

## How to Change Social Media Preview Image
Replace `/public/website_ss.png` with your desired image. This image is used for Open Graph previews (social media link previews) and is referenced in your metadata configuration in `src/app/layout.tsx`.

## Development
```bash
cd cv
npm install
npm run dev
```

## License
See `LICENSE` for details.
