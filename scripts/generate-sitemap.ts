import { readdirSync, statSync, writeFileSync } from 'node:fs'
import { join, relative } from 'node:path'

const DIST_DIR = new URL('../dist', import.meta.url).pathname
const BASE_URL = 'https://www.expresslang.org'

function findHtmlFiles(dir: string): string[] {
  const files: string[] = []
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry)
    if (statSync(full).isDirectory()) {
      files.push(...findHtmlFiles(full))
    } else if (entry.endsWith('.html')) {
      files.push(full)
    }
  }
  return files
}

const htmlFiles = findHtmlFiles(DIST_DIR)
const today = new Date().toISOString().split('T')[0]

const urls = htmlFiles.map((f) => {
  let path = relative(DIST_DIR, f).replace(/\\/g, '/').replace(/index\.html$/, '').replace(/\.html$/, '')
  if (!path.startsWith('/')) path = '/' + path
  const priority = path === '/' ? '1.0' : path.split('/').length <= 2 ? '0.8' : '0.6'
  return `  <url><loc>${BASE_URL}${path}</loc><lastmod>${today}</lastmod><priority>${priority}</priority></url>`
})

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>`

writeFileSync(join(DIST_DIR, 'sitemap.xml'), sitemap)
console.log(`Generated sitemap.xml with ${urls.length} URLs`)
