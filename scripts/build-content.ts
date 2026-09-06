import { readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync, statSync } from 'node:fs'
import { join, basename, resolve } from 'node:path'
import { pathToFileURL } from 'node:url'
import matter from 'gray-matter'
import asciidoctor from '@asciidoctor/core'
import { contentCollections } from './collections'

const asciiDoc = asciidoctor()

const CONTENT_DIR = resolve(import.meta.dirname, '..', 'content')
const OUTPUT_DIR = resolve(import.meta.dirname, '..', 'src', 'content')

export interface ContentItem {
  title: string
  slug: string
  date: string | null
  categories: string[]
  authors: Array<{ name: string; email?: string; use_picture?: string }>
  excerpt: string
  toc: Array<{ id: string; title: string; level: number }>
  body: string
  frontmatter: Record<string, unknown>
}

export function extractToc(doc: any): Array<{ id: string; title: string; level: number }> {
  const sections: Array<{ id: string; title: string; level: number }> = []

  function walk(section: any) {
    sections.push({
      id: section.getId() || '',
      title: section.getTitle() || '',
      level: section.getLevel() || 2,
    })
    const children = section.getSections()
    if (children && children.length) {
      for (const child of children) {
        walk(child)
      }
    }
  }

  const topLevel = doc.getSections()
  if (topLevel && topLevel.length) {
    for (const s of topLevel) walk(s)
  }

  return sections
}

export function slugify(filename: string): string {
  return filename
    .replace(/^\d{4}-\d{2}-\d{2}-/, '')
    .replace(/\.adoc$/, '')
    .replace(/\.md$/, '')
}

export function convertFile(filePath: string, section: string, imagesDir: string): ContentItem | null {
  const raw = readFileSync(filePath, 'utf-8')

  let frontmatterData: Record<string, unknown> = {}
  let contentBody = raw

  const fmMatch = raw.match(/^---\n([\s\S]*?)\n---\n?/)
  if (fmMatch) {
    try {
      const parsed = matter(raw)
      frontmatterData = parsed.data || {}
      contentBody = parsed.content
    } catch {
      const end = raw.indexOf('---', 4)
      frontmatterData = {}
      contentBody = raw.slice(end + 3).trimStart()
    }
  }

  let html: string
  let title = (frontmatterData.title as string) || ''
  let toc: Array<{ id: string; title: string; level: number }> = []

  try {
    const doc = asciiDoc.load(contentBody, {
      safe: 'safe',
      attributes: {
        stem: 'latexmath',
        imagesdir: imagesDir,
        'skip-front-matter': '',
        sectanchors: '',
        idprefix: '',
        idseparator: '-',
      },
    })

    if (!title) {
      title = doc.getTitle() || ''
    }

    toc = extractToc(doc)
    html = doc.convert().replace(/<img /g, '<img loading="lazy" ')
  } catch (err: any) {
    console.error(`  Error converting ${filePath}: ${err.message}`)
    html = `<p class="error">Error converting content: ${err.message}</p>`
  }

  const slug = slugify(basename(filePath))

  const date = (frontmatterData.date as string) || null
  const rawCategories = frontmatterData.categories
  const categories = Array.isArray(rawCategories) ? rawCategories : rawCategories ? [rawCategories as string] : []
  const authors = (frontmatterData.authors as Array<{ name: string; email?: string; use_picture?: string }>) || []
  const excerpt = (frontmatterData.excerpt as string) || ''

  return {
    title,
    slug,
    date,
    categories,
    authors,
    excerpt,
    toc,
    body: html,
    frontmatter: frontmatterData,
  }
}

function processSection(section: string, imagesDir: string) {
  const sectionDir = join(CONTENT_DIR, section)
  const outputDir = join(OUTPUT_DIR, section)

  if (!existsSync(sectionDir)) {
    console.log(`  Section "${section}" not found, skipping.`)
    return 0
  }

  mkdirSync(outputDir, { recursive: true })

  const files = readdirSync(sectionDir).filter(
    (f) => f.endsWith('.adoc') || f.endsWith('.md'),
  )

  let count = 0
  for (const file of files) {
    const filePath = join(sectionDir, file)
    if (statSync(filePath).isDirectory()) continue

    const item = convertFile(filePath, section, imagesDir)
    if (!item) continue

    const outputPath = join(outputDir, `${item.slug}.json`)
    writeFileSync(outputPath, JSON.stringify(item, null, 2))
    console.log(`  ✓ ${section}/${item.slug}`)
    count++
  }

  return count
}

function main() {
  console.log('Building content...')

  let total = 0
  for (const collection of contentCollections) {
    console.log(`\nProcessing ${collection.name}/...`)
    const count = processSection(collection.name, collection.imagesDir)
    total += count
  }

  console.log(`\nDone. ${total} content files converted.`)
}

const invokedDirectly = process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href
if (invokedDirectly) main()
