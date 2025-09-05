# Achala Nayak Portfolio

![Portfolio Website](cv/public/website.png)

This is the source code for my personal portfolio website, built with Next.js, TypeScript, and Tailwind CSS.  

This is my personal portfolio for you to get to know me a bit better. I love to write blogs and help people out—do check it out if you are interested. I write about tech, code, travel, cuisine, and more.

## Features
- **Projects**: All project details are managed in a single file at `src/data/projects/projects.ts`.
- **Favicon**: To change the browser tab logo, replace `src/app/favicon.ico`.
- **Open Graph Image**: Social media previews use the website image at `cv/public/website_ss.png` (this is the image shown when your site link is shared on platforms like LinkedIn, Twitter, etc.).
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



## Development
```bash
cd cv
npm install
npm run dev
```
