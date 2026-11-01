# Project Guide

## Overview

This repository contains a personal portfolio website for Hani Boulos. It is a Next.js App Router application built with React, TypeScript/JavaScript, Tailwind CSS, Framer Motion, Lucide icons, and React Icons. The home page presents an introduction, selected projects, skills, an about section with a contact form and certificates, and a footer.

## Run the project

- `npm install` installs the dependencies declared in `package.json`.
- `npm run dev` starts the local development server.
- `npm run build` creates an optimized production build.
- `npm run start` serves the production build.
- `npm run lint` is configured as `next lint`; check the installed Next.js version if this script is unavailable, since newer Next.js versions may use the ESLint CLI directly.

## Source structure

### App Router

- `app/page.tsx` is the home route (`/`). It composes the navbar, hero, projects, skills, about/contact, and portfolio footer.
- `app/layout.tsx` is the shared root layout. It imports global styles, defines the page metadata, configures the document shell, and includes a separate copyright footer.
- `app/globals.css` defines the theme color variables, Tailwind theme mappings, global document styles, hero responsive spacing, scrollbars, and reusable animation classes.
- `app/favicon.ico` is the browser tab icon.

### Components

- `components/Navbar.jsx` provides the sticky header, section links, active-section tracking, and animated mobile navigation. The mobile menu button is retained in the header.
- `components/Hero.tsx` renders the introduction, animated name, technology orbit, social links, CV link, and project/contact calls to action.
- `components/Projects.jsx` defines the project cards and animated project-section background.
- `components/ProjectCard.jsx` renders one project card, including its image, technology labels, and download link.
- `components/Skills.jsx` renders the front-end and back-end technology lists.
- `components/About.jsx` renders the biography, animated proficiency bars, CV link, EmailJS contact form, and certificate images.
- `components/Footer.jsx` renders the portfolio footer with contact and social links.
- `components/ThemeToggle.jsx` is a standalone light/dark theme switch component. It is not currently rendered by the navbar.
- `components/ThemeProvider.jsx` wraps `next-themes` and applies a React 19 compatibility setting to its theme bootstrap script.
- `components/Achievements.jsx` contains an achievements section component; it is not currently imported by the home page.
- `components/AnimatedBackground.jsx` contains a decorative animated background component; it is not currently imported by the home page.

### Public files

Files in `public/` are served from the site root. For example, `public/sele.png` is referenced as `/sele.png` in the hero. The folder contains portfolio images (`HANI.png`, `haaaan.png`, `nor.png`, `num.png`, `num1.png`, `poto2.png`, `poto3.png`, `poto4.png`, `level1.png`, `level2.png`, and screenshot images), CV/document PDFs (`cv-hani.pdf`, `hany.pdf`, `hani_web.pdf`, `hanhtml.pdf`), and the standard Next.js SVG assets. `public/images/` contains another set of image/document copies.

### Configuration and generated folders

- `package.json` and `package-lock.json` describe dependencies and npm scripts.
- `next.config.ts` configures Next.js.
- `tsconfig.json` configures TypeScript, including checks for TypeScript source files.
- `tailwind.config.ts` and `postcss.config.mjs` configure the styling toolchain.
- `eslint.config.mjs` configures ESLint.
- `.gitignore` lists files Git should ignore.
- `.vercel/`, `.next/`, `out/`, and `node_modules/` are deployment/build/export/dependency folders, not the main application source.
- `README.md` is the default Next.js starter guide.
- `.claude/` contains project-local Claude configuration or guidance.

## Page composition

The home page is assembled in `app/page.tsx` in this order: `Navbar`, `Hero`, `Projects`, `Skills`, `About`, and `Footer`. Navigation links use the section IDs `home`, `projects`, and `about`. Styling is mostly expressed through Tailwind utility classes, with shared theme variables and animation definitions in `app/globals.css`.

## Contact form

`components/About.jsx` submits form data through `@emailjs/browser` using service, template, and public-key values in the component. Successful or failed sends update the form status shown to the visitor. Keep these settings aligned with the EmailJS account if the contact form is changed.

## Notes for future edits

- Keep the current page appearance and section order when changing a single control or component.
- Use the existing IDs when updating navbar anchor links.
- Check asset paths against exact filenames in `public/`; filenames are case-sensitive on many deployment hosts.
- The root layout and home page each currently render a footer. Review both locations before changing footer behavior.
- `ThemeToggle.jsx`, `Achievements.jsx`, and `AnimatedBackground.jsx` exist as standalone components, but are not part of the current home page composition unless explicitly imported.
