# Phase 7: Content Migration + Jotne Course Transcription

## Goal
Migrate all existing content from Jekyll to the new structure and transcribe Jotne EDMsdk course PDFs into new AsciiDoc pages.

## Tasks

### Migrate Existing Content
- [ ] Copy `_pages/*.adoc` → `content/pages/` (about, language, membership, privacy, references, tos)
- [ ] Copy `_posts/*.adoc` → `content/posts/` (4 blog posts)
- [ ] Copy `learn/*.adoc` → `content/learn/` (10 learn pages)
- [ ] Copy `learn/images/*.svg` → `public/learn/images/` (SVG diagrams)
- [ ] Copy `bnf/*.bnf` → `content/bnf/` and `public/bnf/`
- [ ] Copy blog images from `assets/blog/` → `public/images/blog/`
- [ ] Copy author avatars from `assets/blog/authors/` → `public/images/authors/`
- [ ] Copy supporter logos from `assets/supporter-*.png` → `public/images/supporters/`
- [ ] Strip Jekyll-specific frontmatter from all .adoc files:
  - Remove: `layout`, `html-class`, `hero_include`, `article_header_title`
  - Keep: `title`, `date`, `categories`, `authors`, `excerpt`

### Transcribe Jotne EDMsdk Course
Source: `/Users/mulgogi/src/expresslang/jotne_course/EDMsdk course/` (15 PDFs)

Create new `.adoc` files in `content/course/`:

- [ ] `01-intro-iso-10303.adoc` — Introduction to ISO 10303 (4.5 MB PDF → ~30 pages)
  - What is ISO 10303, STEP architecture, parts structure
- [ ] `02-express-language.adoc` — EXPRESS Language (943 KB PDF)
  - EXPRESS syntax, types, entities, schemas
- [ ] `02a-express-edition2.adoc` — EXPRESS Edition 2 (415 KB PDF)
  - Edition 2 enhancements
- [ ] `03-express-data-manager.adoc` — EXPRESS Data Manager (1.9 MB PDF)
  - EDM tool overview and usage
- [ ] `04-edm-visual-express.adoc` — EDMvisualExpress (836 KB PDF)
  - Visual EXPRESS-G diagram editor
- [ ] `05-pdm12-exg.adoc` — PDM12 EXPRESS-G Diagram (154 KB PDF)
  - Example EXPRESS-G diagram
- [ ] `06-edm-express-x.adoc` — EdmExpressX Language (2.7 MB PDF)
  - EXPRESS-X schema mapping language
- [ ] `07-edm-virtual-machine.adoc` — EDMvirtualMachine and EDMinside (426 KB PDF)
  - Runtime environment and integration
- [ ] `08-step-p21.adoc` — STEP Part 21 (517 KB PDF)
  - STEP physical file format (ISO 10303-21)
- [ ] `09-step-p28-xml.adoc` — STEP Part 28 XML (440 KB PDF)
  - STEP XML binding (ISO 10303-28)
- [ ] `10-query-schema.adoc` — Query Schema (409 KB PDF)
  - EXPRESS-Q query language
- [ ] `11-rule-schema.adoc` — Rule Schema (717 KB PDF)
  - Rule validation schema
- [ ] `12-edm-interface.adoc` — EDMinterface (1.7 MB PDF)
  - EDM API and integration
- [ ] `13-edm-interface-edom3.adoc` — EDMinterface EDOM3 (412 KB PDF)
  - EDOM3 interface specifics
- [ ] `14-intro-plcs.adoc` — Introduction to PLCS (3.3 MB PDF)
  - Product Life Cycle Support (ISO 10303-239)

For each transcription:
- Extract all text content into proper AsciiDoc structure
- Convert headings, lists, tables, source code examples
- Extract diagrams/screenshots as images into `public/course/images/`
- Add YAML frontmatter with title and module number

### Update Navigation Data
- [ ] Add course navigation to `src/data/course-navigation.ts` with all 15 modules
- [ ] Update `src/data/navigation.ts` to include Course link in main nav

### Future: Upgrade Learn Content
- [ ] Optionally replace `content/learn/` with upstream from `/Users/mulgogi/src/expresslang/course/asciidoc/` (has both presentation and notes versions)

## Verification
- All migrated .adoc files convert to JSON without errors
- All pages render correctly with the new pipeline
- Jotne course pages appear under `/course/` with sidebar navigation
- All images display correctly
- All BNF files accessible at `/bnf/*`
