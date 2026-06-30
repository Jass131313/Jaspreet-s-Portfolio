# Jaspreet Kaur — Portfolio

A dark-themed, animated developer portfolio built with Next.js 15, TypeScript, and Tailwind CSS v4 — inspired by modern portfolio sites with typing hero text, scroll-reveal sections, and a glassmorphism aesthetic.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Deploy to Vercel

**Option A — GitHub (recommended)**
1. Push this folder to a new GitHub repo.
2. Go to vercel.com → New Project → Import your repo.
3. Leave all settings as default (Next.js is auto-detected) → Deploy.

**Option B — Vercel CLI**
```bash
npm i -g vercel
vercel
```
Follow the prompts; it deploys straight from this folder.

## Customize

- **Your info / sections**: edit the components in `src/components/` — `Hero.tsx`, `About.tsx`, `Skills.tsx`, `Projects.tsx`, `Experience.tsx`, `Contact.tsx`.
- **Colors / theme**: change the CSS variables at the top of `src/app/globals.css` (`--accent`, `--accent2`, `--accent3`, `--bg`, etc.)
- **Resume download**: drop a `resume.pdf` file into the `public/` folder — the "Download CV" button in the About section already links to `/resume.pdf`.
- **Metadata / SEO**: edit `src/app/layout.tsx`.

## Tech stack

Next.js 15 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · CSS-only animations (no external animation libraries needed)
