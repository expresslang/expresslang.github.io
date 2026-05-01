# Phase 8: Cleanup and Launch

## Goal
Remove all Jekyll artifacts, update documentation, and launch the new site.

## Tasks

### Remove Jekyll Files
- [ ] Delete: `Gemfile`, `Gemfile.lock`
- [ ] Delete: `_config.yml`
- [ ] Delete: `_layouts/` directory
- [ ] Delete: `_site/` directory
- [ ] Delete: `.jekyll-cache/` directory
- [ ] Delete: `assets/css/style.scss`
- [ ] Delete: `assets/js/` directory
- [ ] Delete: `jekyll-theme-open-project` and all Jekyll plugin references
- [ ] Delete: `404.html` (replaced by Vue 404 page)
- [ ] Delete: `index.adoc` (replaced by Vue homepage)
- [ ] Delete: `nav-links.html`, `custom-intro.html`, `title.html`
- [ ] Delete: `parent-hub/` directory
- [ ] Delete: `_projects/` directory
- [ ] Delete: Old `_pages/`, `_posts/`, `learn/` directories (content migrated to `content/`)

### Update Documentation
- [ ] Update `CLAUDE.md` with new project structure, build commands, and architecture
- [ ] Create `README.md` with setup instructions for the new site
- [ ] Update `.gitignore` for Node.js/Vite project

### Final QA
- [ ] All pages render without errors
- [ ] All existing URLs still work (no broken links)
- [ ] Dark/light mode works on all pages
- [ ] Mobile responsive at all breakpoints
- [ ] All images load correctly
- [ ] All BNF files accessible
- [ ] Blog posts display with correct authors and dates
- [ ] Learn and Course sidebars navigate correctly
- [ ] SEO meta tags present on all pages
- [ ] Sitemap.xml generated correctly
- [ ] 404 page works for invalid URLs
- [ ] Run lychee link checker on built output

### Launch
- [ ] Merge to `main`
- [ ] Verify GitHub Pages deployment succeeds
- [ ] Verify live site at expresslang.org
- [ ] Check DNS and HTTPS

## Verification
- Site live at expresslang.org with all content intact
- No Jekyll artifacts remain in the repository
- Build and deploy pipeline works end-to-end
