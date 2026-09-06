import { describe, it, expect } from 'vitest'
import { readFileSync, readdirSync } from 'node:fs'
import { join } from 'node:path'

// An <img>-embedded SVG needs BOTH a viewBox (content scales) and explicit
// width/height (intrinsic size for layout). The regression this encodes:
// supporter-boeing/ribose shipped viewBox-only SVGs that collapsed to nothing
// under `w-auto` + height caps, and supporter-nist shipped width/height
// without a viewBox so its content rendered oversized.
describe('supporter logo assets', () => {
  const dir = 'public/images/supporters'
  const svgs = readdirSync(dir).filter((f) => f.endsWith('.svg'))

  it('has supporter SVGs to check', () => {
    expect(svgs.length).toBeGreaterThan(0)
  })

  it('every SVG has a viewBox and explicit width/height', () => {
    const offenders: string[] = []
    for (const file of svgs) {
      const source = readFileSync(join(dir, file), 'utf-8')
      const tag = source.match(/<svg\b[^>]*>/)?.[0] ?? ''
      const hasViewBox = /viewBox="/.test(tag)
      const hasWidth = /(?<![:\w-])width="/.test(tag)
      const hasHeight = /(?<![:\w-])height="/.test(tag)
      if (!hasViewBox || !hasWidth || !hasHeight) {
        offenders.push(`${file} (viewBox=${hasViewBox}, width=${hasWidth}, height=${hasHeight})`)
      }
    }
    expect(offenders, `malformed SVGs: ${offenders.join(', ')}`).toEqual([])
  })
})
