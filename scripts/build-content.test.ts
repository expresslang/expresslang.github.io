import { describe, it, expect } from 'vitest'
import { join } from 'node:path'
import { mkdtempSync, writeFileSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { convertFile, slugify } from './build-content'

const FIXTURES = join(import.meta.dirname, 'fixtures')

describe('slugify', () => {
  it('strips a leading date prefix and extension', () => {
    expect(slugify('2026-01-01-my-post.adoc')).toBe('my-post')
    expect(slugify('hello.md')).toBe('hello')
    expect(slugify('plain.adoc')).toBe('plain')
  })
})

describe('convertFile', () => {
  it('carries frontmatter through and injects lazy loading into images', () => {
    const item = convertFile(join(FIXTURES, 'full-frontmatter.adoc'), 'posts', '/images/blog')!

    expect(item.title).toBe('Fixture Post')
    expect(new Date(item.date as string).toISOString().slice(0, 10)).toBe('2026-01-02')
    expect(item.categories).toEqual(['news', 'elf'])
    expect(item.authors).toEqual([{ name: 'Jane Doe' }])
    expect(item.excerpt).toBe('A short excerpt.')
    expect(item.body).toContain('<img loading="lazy"')
    expect(item.body).toContain('src="/images/blog/fixture.png"')
  })

  it('extracts a table of contents with levels', () => {
    const item = convertFile(join(FIXTURES, 'full-frontmatter.adoc'), 'posts', '/images')!

    expect(item.toc.map((s) => s.title)).toEqual(['First Section', 'Sub Section'])
    expect(item.toc[0].level).toBe(1)
    expect(item.toc[1].level).toBe(2)
  })

  it('falls back to the document title when frontmatter YAML is broken', () => {
    const item = convertFile(join(FIXTURES, 'broken-frontmatter.adoc'), 'pages', '/images')!

    expect(item.title).toBe('Doc Title')
    expect(item.frontmatter).toEqual({})
    expect(item.body).toContain('Body text.')
  })

  it('derives title from the document and strips the date prefix from the slug', () => {
    const item = convertFile(join(FIXTURES, '2026-03-04-doc-title-only.adoc'), 'learn', '/images/learn')!

    expect(item.slug).toBe('doc-title-only')
    expect(item.title).toBe('Only Doc Title')
  })

  it('throws on a missing file', () => {
    expect(() => convertFile(join(FIXTURES, 'does-not-exist.adoc'), 'posts', '/images')).toThrow()
  })
})

describe('collection round-trip', () => {
  it('keeps unknown frontmatter keys such as order', () => {
    const dir = mkdtempSync(join(tmpdir(), 'content-test-'))
    const file = join(dir, '2020-05-06-ordered.adoc')
    writeFileSync(file, '---\ntitle: Ordered\norder: 7\n---\n\n= Ordered\n\n== S\n\nbody\n')
    try {
      const item = convertFile(file, 'learn', '/images/learn')!
      expect(item.frontmatter.order).toBe(7)
    } finally {
      rmSync(dir, { recursive: true, force: true })
    }
  })
})
