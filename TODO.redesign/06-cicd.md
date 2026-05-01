# Phase 6: CI/CD and Deployment

## Goal
Update GitHub Actions workflows for the new ViteSSG build and deploy to GitHub Pages.

## Tasks

### Update `.github/workflows/build_deploy.yml`
- [ ] Replace Ruby setup with Node.js 20:
  ```yaml
  - uses: actions/setup-node@v4
    with:
      node-version: '20'
      cache: 'npm'
  - run: npm ci
  - run: npm run build
  ```
- [ ] Upload artifact from `dist/` instead of `_site/`
- [ ] Keep GitHub Pages deployment job as-is
- [ ] Keep triggers: push to `main`, PRs, `workflow_dispatch`

### Update `.github/workflows/links.yml`
- [ ] Replace Ruby setup with Node.js 20
- [ ] Build with `npm run build`
- [ ] Point lychee to `dist/` instead of `_site/`
- [ ] Keep `.lycheeignore` for link exclusions

### Update `.gitignore`
- [ ] Add: `node_modules/`, `dist/`, `src/content/`, `.vite/`
- [ ] Remove: `_site/`, `.jekyll-cache/`, `Gemfile.lock` (keep until Phase 8)

## Verification
- Push to branch triggers CI build successfully
- `build_deploy.yml` produces deployable artifact
- `links.yml` runs lychee on built output
