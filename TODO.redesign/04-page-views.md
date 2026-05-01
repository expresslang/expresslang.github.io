# Phase 4: Page Views

## Goal
Build all page views that consume content from the pipeline and render with the design system.

## Tasks

### router.ts
- [ ] Static routes: `/`, `/about`, `/membership`, `/references`, `/privacy`, `/tos`, `/blog`, `/learn`, `/course`, `/standards`, `/languages`
- [ ] Dynamic routes: `/blog/:slug`, `/learn/:slug`, `/course/:slug`, `/languages/:slug`
- [ ] ViteSSG `includedRoutes` function scans `src/content/*.json` to enumerate dynamic routes
- [ ] 404 catch-all route

### Homepage (`pages/index.vue`)
- [ ] Hero section: geometric ELF symbol animation, tagline "Don't panic, EXPRESS"
- [ ] CTA buttons: "Language introduction" → `/languages`, "Standards and specifications" → `/standards`
- [ ] Language family showcase: 5 cards (EXPRESS, EXPRESS-G, EXPRESS-I, EXPRESS-X, EXPRESS-Q) with brief descriptions
- [ ] Latest blog posts: 3 `BlogPostCard` components
- [ ] About summary section with link to `/about`

### ContentPage (`pages/[...slug].vue`)
- [ ] Generic wrapper for AsciiDoc-rendered content
- [ ] Uses `AsciiDocContent.vue` component
- [ ] Typography via Tailwind Typography + `asciidoc.css`
- [ ] Breadcrumb navigation (Home > Page Title)

### AsciiDocContent.vue
- [ ] Renders HTML body from JSON content via `v-html`
- [ ] Scoped `asciidoc.css` styles for Asciidoctor output classes:
  - `.paragraph`, `.ulist`, `.olist`, `.listingblock`, `.tableblock`
  - `.admonitionblock`, `.dlist`, `.exampleblock`, `.stemblock`
  - `.imageblock`, `.quoteblock`, `.colist`
- [ ] KaTeX CSS for STEM math rendering

### Learn section (`pages/learn/`)
- [ ] `index.vue` — Overview page with course description, module listing with links
- [ ] `[slug].vue` — Individual learn page with `TheSidebar` + `AsciiDocContent`
  - Sidebar shows learn navigation from `data/learn-navigation.ts`
  - Previous/Next navigation at bottom of each page
  - Responsive: sidebar collapses on mobile

### Course section (`pages/course/`)
- [ ] `index.vue` — Jotne EDMsdk Course overview with module listing
- [ ] `[slug].vue` — Individual course page with `TheSidebar` + `AsciiDocContent`
  - Sidebar shows course navigation from `data/course-navigation.ts`
  - Previous/Next navigation

### Blog (`pages/blog/`)
- [ ] `index.vue` — Date-sorted listing with `BlogPostCard` components
- [ ] `[slug].vue` — Individual post with:
  - Author display (multi-author support with avatars)
  - Date and category display
  - `AsciiDocContent` for body

### BlogPostCard.vue
- [ ] Post title, excerpt, date, author avatars
- [ ] Hover lift effect
- [ ] Link to `/blog/:slug`

### Standards page (`pages/standards/index.vue`)
- [ ] ISO 10303 standards overview
- [ ] BNF grammar viewer: list all 7 BNF files with descriptions
- [ ] Each BNF file expandable with syntax-highlighted content

### BnfViewer.vue
- [ ] Loads BNF file content
- [ ] Syntax highlighting for BNF notation (custom tokenizer or Prism.js/Shiki)
- [ ] Line numbers
- [ ] Copy-to-clipboard button

### Languages section (`pages/languages/`)
- [ ] `index.vue` — Language family overview (currently `language.adoc` content)
- [ ] `[slug].vue` — Individual language page for each: EXPRESS, EXPRESS-G, EXPRESS-I, EXPRESS-X, EXPRESS-Q

### Membership page (`pages/membership.vue`)
- [ ] Membership tiers: Corporate, Individual, Founding
- [ ] Contact CTA

### References page (`pages/references.vue`)
- [ ] BNF grammar links
- [ ] External references (Schenck & Wilson book, EUG proceedings, OMG Express Metamodel)
- [ ] AsciiDoc-rendered bibliography

### Privacy + TOS pages
- [ ] Placeholder content (same as current)

### 404 page (`pages/404.vue`)
- [ ] Clean error page with ELF branding
- [ ] "Page not found" message
- [ ] Link back to homepage

## Verification
- All routes render without errors
- Content pages display AsciiDoc content correctly (tables, code, STEM, images)
- Learn/Course sections show sidebar with correct navigation
- Blog listing shows all 4 posts sorted by date
- Dark/light mode works on all pages
- Mobile layout works on all pages
