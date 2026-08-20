# Zaynab Hwayji — Developer Portfolio

A premium, elegant personal portfolio website built with Next.js, React, TypeScript, Tailwind CSS, Lucide React icons, and Framer Motion.

## Tech Stack

- **Next.js 14** (App Router)
- **React 18**
- **TypeScript**
- **Tailwind CSS 3**
- **Lucide React** (icons)
- **Framer Motion** (subtle animations)

## Getting Started

### Prerequisites

- Node.js 18.17+ (or 20+)
- npm 9+

### Install & Run Locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm run start
```

## Project Structure

```
zaynab-portfolio/
├── app/
│   ├── layout.tsx              # Root layout, fonts, SEO metadata
│   ├── page.tsx                # Home page (assembles all sections)
│   ├── globals.css             # Tailwind + custom styles
│   ├── not-found.tsx           # 404 page
│   ├── robots.ts               # robots.txt route
│   ├── sitemap.ts              # sitemap.xml route
│   └── projects/
│       ├── layout.tsx          # Navbar + Footer wrapper for project pages
│       └── [slug]/
│           └── page.tsx        # Dynamic project detail page
│
├── components/
│   ├── Navbar.tsx              # Sticky responsive navbar with mobile menu
│   ├── Footer.tsx              # Footer with social links
│   ├── Hero.tsx                # Hero section with abstract visual
│   ├── About.tsx               # About section with info cards
│   ├── Skills.tsx              # Categorized skills grid
│   ├── Projects.tsx            # Featured + More Projects sections
│   ├── ProjectCard.tsx         # Reusable project card
│   ├── ProjectImage.tsx        # Image + placeholder components
│   ├── Education.tsx           # Education timeline
│   ├── Certifications.tsx      # Certifications grid
│   ├── Languages.tsx           # Languages cards
│   └── Contact.tsx             # Contact section with links
│
├── data/
│   ├── site.ts                 # Site config, nav links, social links
│   ├── projects.ts             # All project data (centralized)
│   ├── skills.ts               # Skill categories
│   └── education.ts            # Education, certifications, languages
│
├── public/
│   ├── favicon.svg             # Favicon
│   ├── og-image.svg            # Open Graph image
│   ├── Zaynab-Hwayji-CV.pdf    # CV placeholder (replace with real PDF)
│   └── projects/               # Project placeholder images (SVG)
│       ├── techtalks.svg
│       ├── mongodb-rest-api.svg
│       ├── academya.svg
│       ├── task-manager-app.svg
│       ├── shopreact.svg
│       ├── weather-app.svg
│       ├── react-context-api-mini-shop.svg
│       ├── shoplite.svg
│       └── todo-list-app.svg
│
├── package.json
├── tsconfig.json
├── next.config.ts
├── tailwind.config.ts
├── postcss.config.mjs
├── eslint.config.mjs
└── README.md
```

## Customization

### Update Project Data

All project information is centralized in `data/projects.ts`. Edit this file to change titles, descriptions, technologies, features, GitHub links, or live demo links.

### Add Your CV

Replace `public/Zaynab-Hwayji-CV.pdf` with your actual CV PDF. The Download CV buttons in the navbar and hero section already point to this path — no code changes needed.

### Replace Project Screenshots

Replace the SVG files in `public/projects/` with real screenshots. You can use `.png`, `.jpg`, or `.webp` images — just update the `image` field in `data/projects.ts` to match the new filename.

### Update Personal Info

Edit `data/site.ts` to change your name, email, GitHub URL, LinkedIn URL, or SEO metadata.

### Update Skills, Education, Certifications, Languages

- Skills: `data/skills.ts`
- Education, Certifications, Languages: `data/education.ts`

## Deployment

This is a standard Next.js application. You can deploy it to:

- **Vercel** — Import the project at [vercel.com](https://vercel.com) and it will auto-detect Next.js.
- **Netlify** — Connect your repository and set the build command to `npm run build`.
- **Any Node.js host** — Run `npm run build` then `npm run start`.

No environment variables are required. The portfolio is fully static and self-contained.

## License

© 2026 Zaynab Hwayji. All rights reserved.
