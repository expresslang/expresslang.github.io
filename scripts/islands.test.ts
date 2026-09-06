import { describe, it, expect } from 'vitest'
import { readFileSync, readdirSync, statSync } from 'node:fs'
import { join } from 'node:path'

const SOURCE_DIRS = ['src/components', 'src/composables', 'src/layouts', 'src/pages']

function walk(dir: string): string[] {
  const files: string[] = []
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry)
    if (statSync(full).isDirectory()) files.push(...walk(full))
    else files.push(full)
  }
  return files
}

const vueFiles = SOURCE_DIRS.flatMap((dir) => walk(dir)).filter((f) => f.endsWith('.vue'))

// Vue islands must hydrate cleanly: the SSR output embedded in the page and the
// client render have to match. These guards keep known hydration breakers out
// of island components. The regression they encode: the Astro migration shipped
// SiteHeader with <Teleport to="body">, whose SSR teleport anchors cannot be
// matched on hydration, breaking every page.
describe('Vue island architecture', () => {
  it('has Vue components to check', () => {
    expect(vueFiles.length).toBeGreaterThan(0)
  })

  it('uses no <Teleport> — SSR renders teleport anchors the browser cannot match on hydration', () => {
    const offenders = vueFiles.filter((f) => /<Teleport/.test(readFileSync(f, 'utf-8')))
    expect(offenders, `Teleport found in: ${offenders.join(', ')}`).toEqual([])
  })

  it('imports no vue-router — router APIs do not exist inside Astro islands', () => {
    const offenders = vueFiles.filter((f) => /vue-router/.test(readFileSync(f, 'utf-8')))
    expect(offenders, `vue-router import found in: ${offenders.join(', ')}`).toEqual([])
  })

  it('touches no browser globals outside lifecycle hooks — render must be identical on server and client', () => {
    const browserGlobals = /\b(window|document|localStorage|sessionStorage|navigator)\b/
    const offenders: string[] = []
    for (const file of vueFiles) {
      const source = readFileSync(file, 'utf-8')
      const setup = source.match(/<script setup[^>]*>([\s\S]*?)<\/script>/)?.[1] ?? ''
      // onMounted/onUnmounted bodies may use browser APIs — they run only in the browser, after hydration
      const stripped = setup.replace(/on(Mounted|Unmounted)\(\(\)\s*=>\s*\{[\s\S]*?\n\s*\}\)/g, '')
      if (browserGlobals.test(stripped)) offenders.push(file)
    }
    expect(offenders, `browser global in island render path: ${offenders.join(', ')}`).toEqual([])
  })
})

describe('layout pathname hygiene', () => {
  it('strips the .html suffix from Astro.url.pathname before using it', () => {
    const layout = readFileSync('src/layouts/BaseLayout.astro', 'utf-8')
    expect(layout).toMatch(/pathname\.replace\(\s*\/\\\.html\$\//)
  })
})
