# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

This is the website for the EXPRESS Language Foundation (expresslang.org), built with Vue 3 + Vite + ViteSSG (Static Site Generation). Content is authored in AsciiDoc (`.adoc` files) under `content/`, pre-processed to JSON, and rendered via Vue components. The site deploys to GitHub Pages on push to `main`.

## Build and serve

```bash
npm install                     # Install dependencies
npm run build:content           # Convert .adoc files to JSON in src/content/
npm run dev                     # Build content + start Vite dev server
npm run build                   # Build content + ViteSSG static site + sitemap
npm run preview                 # Preview built site from dist/
```

## Tech stack

- **Vue 3** + **TypeScript** — component framework
- **Vite** + **vite-ssg** — build tooling and static site generation
- **asciidoctor.js** — AsciiDoc to HTML conversion at build time
- **Tailwind CSS 4** — styling
- **Vue Router** — client-side routing

## Content pipeline

```
content/*.adoc → scripts/build-content.ts → src/content/*.json → Vue components → ViteSSG → dist/
```

- `content/pages/` — Static pages (about, membership, references, privacy, tos)
- `content/posts/` — Blog posts, named `YYYY-MM-DD-title.adoc`
- `content/learn/` — EXPRESS language tutorial pages
- `content/course/` — Jotne EDMsdk course (14 modules)
- `content/languages/` — EXPRESS language family pages (reserved)

Content files have YAML frontmatter (`title`) between `---` delimiters.

## Project structure

- `src/pages/` — Vue page components (routed by vite-ssg)
- `src/components/` — Vue components (layout, content, ui)
- `src/composables/` — Vue composables (useContent, useTheme)
- `src/data/` — Navigation and site configuration data
- `src/styles/` — CSS (main, asciidoc, theme)
- `scripts/build-content.ts` — AsciiDoc to JSON converter
- `scripts/generate-sitemap.ts` — Post-build sitemap generator
- `public/` — Static assets (images, BNF files, logos)

## CI

Two GitHub Actions workflows:
- **`build_deploy.yml`** — Builds with Node.js 20 and deploys to GitHub Pages on push to `main`
- **`links.yml`** — Builds site then runs lychee link checker on `dist/`
