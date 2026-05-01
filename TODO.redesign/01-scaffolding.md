# Phase 1: Project Scaffolding

## Goal
Initialize Vue 3 + Vite + ViteSSG + Tailwind CSS 4 project structure, replacing the Jekyll build.

## Tasks
- [ ] Initialize Vite + Vue 3 + TypeScript project (`npm create vite@latest` with vue-ts)
- [ ] Install core dependencies:
  - `vue-router` ^4.3
  - `vite-ssg` ^0.23
  - `@vitejs/plugin-vue` ^5.1
- [ ] Install content pipeline dependencies:
  - `@asciidoctor/core` ^3.0
  - `gray-matter` ^4.0
  - `globby` ^14.0
  - `tsx` ^4.16
  - `concurrently` ^8.2
- [ ] Install styling dependencies:
  - `tailwindcss` ^4.0
  - `@tailwindcss/typography` ^0.5
  - `@tailwindcss/container-queries`
  - `postcss` ^8.4
- [ ] Install other dependencies:
  - `@unhead/vue` ^1.11 (SEO/meta tags)
  - `katex` ^0.16 (STEM math)
  - `vite-plugin-sitemap` ^0.7
- [ ] Create `vite.config.ts` with ViteSSG configuration
- [ ] Create `tailwind.config.ts` with brand theme:
  - Colors: `#FFB1A2` (salmon), `#4d7bc3` (blue), `#3f65a2` (dark blue), `#1a2332` (navy)
  - Fonts: Inter (sans), Source Serif 4 (serif), JetBrains Mono (mono)
- [ ] Create `postcss.config.js`
- [ ] Create `tsconfig.json` with strict mode
- [ ] Create directory structure:
  ```
  src/
    main.ts, App.vue, router.ts
    components/{layout,content,ui}/
    pages/{learn,course,blog,standards,languages}/
    composables/
    data/
    styles/
    content/  (gitignored, generated)
  content/
    pages/, posts/, learn/, course/, bnf/
  public/
    logos/, images/, bnf/, learn/images/
  scripts/
  ```
- [ ] Copy brand assets from `/Users/mulgogi/src/expresslang/brand/logos/*.svg` to `public/logos/`
- [ ] Copy favicons and existing images to `public/`
- [ ] Create minimal `App.vue` with header/footer shell and `<router-view>`
- [ ] Create minimal `router.ts` with home route
- [ ] Verify `npm run dev` works

## Verification
- `npm run dev` serves a blank page without errors
- `npm run build` produces `dist/index.html`
