import { readdirSync, readFileSync, statSync, existsSync } from 'node:fs'
import { join, relative } from 'node:path'

// Post-build invariants over dist/ — run by `npm run build` after `astro build`.
// Encodes the regressions of the Astro migration: build.format "file" leaked
// ".html" into canonical URLs and serialized island props, and hydration
// depends on every island's assets actually being emitted.

const DIST = new URL('../dist', import.meta.url).pathname
const errors: string[] = []

function walk(dir: string): string[] {
  const files: string[] = []
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry)
    if (statSync(full).isDirectory()) files.push(...walk(full))
    else files.push(full)
  }
  return files
}

const pages = walk(DIST).filter((f) => f.endsWith('.html'))
const canonicalExempt = new Set(['404.html', 'references.html'])
let canonicals = 0
let islands = 0

for (const page of pages) {
  const rel = relative(DIST, page)
  const html = readFileSync(page, 'utf-8')

  const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1]
  if (!canonicalExempt.has(rel)) {
    canonicals++
    if (canonical.endsWith('.html')) errors.push(`${rel}: canonical ends with .html: ${canonical}`)
    const expectedPath = '/' + rel.replace(/(?:^|\/)index\.html$/, '').replace(/\.html$/, '')
    const expected = `https://www.expresslang.org${expectedPath}`
    if (canonical !== expected) errors.push(`${rel}: canonical ${canonical} != expected ${expected}`)
  } else if (!canonicalExempt.has(rel)) {
    errors.push(`${rel}: missing canonical link`)
  }

  for (const match of html.matchAll(/props="([^"]*)"/g)) {
    const props = match[1]
    if (/\.html/.test(props)) errors.push(`${rel}: island props contain .html path: ${props.slice(0, 120)}`)
  }

  for (const island of html.matchAll(/<astro-island[^>]*component-url="([^"]+)"[^>]*>/g)) {
    islands++
    const component = island[1]
    const assetPath = join(DIST, component.replace(/^\//, ''))
    if (!existsSync(assetPath)) errors.push(`${rel}: island component-url not emitted: ${component}`)
    const ssr = html.slice(html.indexOf(island[0]))
    const inner = ssr.slice(island[0].length, ssr.indexOf('</astro-island>'))
    if (inner.trim().length === 0) errors.push(`${rel}: island rendered empty SSR content: ${component}`)
  }
}

if (islands === 0) errors.push('no islands found in build output — island detection is broken or islands were removed')
if (canonicals === 0) errors.push('no canonical links found in build output')

if (errors.length) {
  console.error(`\nverify-dist failed (${errors.length} problem${errors.length === 1 ? '' : 's'}):`)
  for (const error of errors) console.error(`  ✗ ${error}`)
  process.exit(1)
}

console.log(`verify-dist: ${pages.length} pages, ${canonicals} canonicals, ${islands} islands — all invariants hold`)
