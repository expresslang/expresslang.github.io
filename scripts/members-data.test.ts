import { describe, it, expect } from 'vitest'
import { readFileSync, existsSync } from 'node:fs'
import { load as loadYaml } from 'js-yaml'
import { join, resolve } from 'node:path'

const read = (p: string) => loadYaml(readFileSync(resolve(__dirname, '..', p), 'utf-8'))

const ORG_CATEGORIES = ['founding', 'corporate', 'small', 'nonprofit', 'university']
const COUNTRIES = ['United States', 'France', 'Norway', 'Japan', 'United Kingdom', 'Austria']

describe('members data', () => {
  const members = read('src/data/members.yaml') as any[]

  it('has 8 founding organizations (McDonnell Douglas excluded — defunct)', () => {
    const orgs = members.filter((m) => m.category !== 'individual')
    expect(orgs).toHaveLength(8)
    expect(orgs.map((o) => o.name)).not.toContain('McDonnell Douglas')
  })

  it('has 12 individual members matching the people roster', () => {
    const individuals = members.filter((m) => m.category === 'individual')
    expect(individuals).toHaveLength(12)
    const people = read('src/data/people.yaml') as any[]
    expect(individuals.map((i) => i.slug).sort()).toEqual(people.map((p) => p.slug).sort())
  })

  it('every member has a text-name country', () => {
    for (const m of members) {
      expect(m.country, `${m.name} missing country`).toBeTruthy()
      expect(COUNTRIES, `${m.name}: unknown country ${m.country}`).toContain(m.country)
    }
  })

  it('organization members have valid logo assets and urls', () => {
    for (const m of members.filter((m) => m.category !== 'individual')) {
      expect(m.category, `${m.name} category`).toBe('founding')
      expect(existsSync(join(__dirname, '..', 'public', m.logo)), `${m.name} logo missing: ${m.logo}`).toBe(true)
      expect(m.url, `${m.name} url`).toMatch(/^https:\/\//)
      expect(m.desc, `${m.name} desc`).toBeTruthy()
      expect(m.joined, `${m.name} joined`).toBe(2022)
    }
  })
})

describe('committees data', () => {
  const committees = read('src/data/committees.yaml') as any[]

  it('defines exactly the five approved TCs', () => {
    expect(committees.map((c) => c.id)).toEqual([
      'tc-express',
      'tc-express-g',
      'tc-express-i',
      'tc-opencdd',
      'tc-education',
    ])
  })

  it('every TC has scope, standardization alignment, and active status; no chairs, no CDDAL', () => {
    for (const c of committees) {
      expect(c.scope?.length).toBeGreaterThan(40)
      expect(c.standardization).toBeTruthy()
      expect(c.status).toBe('active')
      expect(JSON.stringify(c).toLowerCase()).not.toContain('chair')
      expect(JSON.stringify(c).toLowerCase()).not.toContain('cddal')
    }
  })
})

describe('people countries', () => {
  it('every person has a text-name country', () => {
    const people = read('src/data/people.yaml') as any[]
    expect(people).toHaveLength(12)
    for (const p of people) {
      expect(p.country, `${p.name} missing country`).toBeTruthy()
      expect(COUNTRIES, `${p.name}: unknown country ${p.country}`).toContain(p.country)
    }
  })
})
