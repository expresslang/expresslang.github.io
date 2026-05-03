# expresslang.github.io

Website for the [EXPRESS Language Foundation](https://www.expresslang.org).

## Development

```bash
npm install           # Install dependencies
npm run dev           # Start dev server
npm run build         # Production build
npm run preview       # Preview production build
```

## Content

Content is authored in AsciiDoc under `content/`:

- `content/pages/` — Static pages
- `content/posts/` — Blog posts
- `content/learn/` — EXPRESS tutorials
- `content/course/` — Jotne EDMsdk course

The build pipeline converts `.adoc` files to JSON via `scripts/build-content.ts`, then ViteSSG generates static HTML.

## Content authoring

Content files use AsciiDoc syntax (`.adoc` extension) with YAML frontmatter:

```
---
title: Page Title
---

AsciiDoc content here...
```

See the [AsciiDoc syntax quick reference](https://docs.asciidoctor.org/asciidoc/latest/syntax-quick-reference/) for markup details. After the frontmatter block, normal AsciiDoc content begins.

## Deployment

Automatically deployed to GitHub Pages on push to `main` via GitHub Actions.
