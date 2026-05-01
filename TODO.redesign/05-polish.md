# Phase 5: Polish (SEO, Performance, Accessibility, Responsive)

## Goal
Production-ready polish for SEO, performance, accessibility, and responsive design.

## Tasks

### SEO
- [ ] Use `@unhead/vue` for per-page `<title>`, `<meta>`, Open Graph, Twitter Card tags
- [ ] Generate `sitemap.xml` via `vite-plugin-sitemap`
- [ ] Add JSON-LD structured data for Organization on homepage
- [ ] Add canonical URLs
- [ ] Add meta description per page (from frontmatter or excerpt)

### Performance
- [ ] Lazy-load images below the fold (native `loading="lazy"`)
- [ ] Optimize SVGs with SVGO (or `vite-plugin-svgo`)
- [ ] Preload critical fonts (Inter, JetBrains Mono) with `font-display: swap`
- [ ] Configure Vite code splitting (vendor chunk, per-route chunks)
- [ ] Minify HTML output
- [ ] Compress assets (gzip/brotli via GitHub Pages)

### Accessibility
- [ ] Skip link to `#main-content` (hidden visually, visible on focus)
- [ ] Proper heading hierarchy: `h1` per page title, `h2+` for sections
- [ ] Color contrast verification (WCAG AA minimum)
- [ ] Keyboard navigation for sidebar, mobile menu, BNF viewer
- [ ] ARIA attributes: `aria-current="page"`, `aria-expanded`, `role="navigation"`
- [ ] `prefers-reduced-motion` media query disables animations
- [ ] Focus-visible styles for keyboard navigation
- [ ] Alt text for all images

### Responsive Design
- [ ] Mobile-first approach with Tailwind breakpoints (sm, md, lg, xl, 2xl)
- [ ] Test at: 320px, 768px, 1024px, 1440px
- [ ] Mobile: hamburger menu, collapsed sidebar (drawer), stacked cards
- [ ] Tablet (768px+): expanded header nav, sidebar visible
- [ ] Desktop (1024px+): full sidebar + content layout
- [ ] Wide (1440px+): max-width container, centered content
- [ ] Touch-friendly tap targets (minimum 44px)

### Dark Mode Polish
- [ ] Verify all pages render correctly in dark mode
- [ ] AsciiDoc content dark mode: prose colors, code blocks, tables, admonitions
- [ ] Logo variant switching (white logo on dark)
- [ ] No flash-of-unstyled-content (FOUC) on load
- [ ] Critical CSS inlined in `index.html`

## Verification
- Lighthouse score >= 90 for Performance, Accessibility, SEO
- All pages work on mobile (320px) and desktop (1440px)
- No FOUC on dark mode page loads
- All external links work
