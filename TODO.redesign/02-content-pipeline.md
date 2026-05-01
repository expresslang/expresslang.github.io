# Phase 2: Content Pipeline (AsciiDoc → JSON)

## Goal
Build the Node.js pipeline that converts `.adoc` files to JSON consumed by Vue components.

## Tasks
- [ ] Create `scripts/build-content.ts`:
  - Scan `content/pages/`, `content/posts/`, `content/learn/`, `content/course/`
  - Parse YAML frontmatter using `gray-matter`
  - Convert AsciiDoc body to HTML using `@asciidoctor/core`
  - Extract document title, TOC from sections
  - Output JSON to `src/content/{pages,posts,learn,course}/`
  - JSON schema per file:
    ```json
    {
      "title": "string",
      "slug": "string",
      "date": "string|null",
      "categories": ["string"],
      "authors": [{"name":"", "email":"", "use_picture":""}],
      "excerpt": "string",
      "toc": [{"id":"", "title":"", "level": 2}],
      "body": "<html string>",
      "frontmatter": {}
    }
    ```
- [ ] Configure Asciidoctor options:
  - `safe: 'safe'`
  - `skip-front-matter: true`
  - `stem: latexmath` for STEM math
  - `imagesdir` remapped per content type (e.g., `/learn/images/` for learn content)
- [ ] Handle STEM math: output KaTeX-compatible HTML
- [ ] Test conversion against all existing content:
  - `express.adoc` (1068 lines — tables, source blocks, STEM, definition lists, admonitions)
  - `express-rules.adoc` (1526 lines — most complex)
  - All 4 blog posts (multi-author frontmatter)
  - All 9 pages
- [ ] Create npm scripts in `package.json`:
  ```json
  {
    "build:content": "tsx scripts/build-content.ts",
    "dev": "npm run build:content && vite",
    "dev:watch": "concurrently \"tsx watch scripts/build-content.ts\" \"vite\"",
    "build": "npm run build:content && vite-ssg build",
    "preview": "vite preview"
  }
  ```
- [ ] Add `src/content/` to `.gitignore`

## Verification
- `npm run build:content` converts all .adoc files to JSON
- Tables, source blocks, STEM math, admonitions, definition lists render correctly in JSON body HTML
- Image paths resolve to absolute URLs
