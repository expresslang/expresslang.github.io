import peopleData from '@/data/people.yaml'
import languagesData from '@/data/languages.yaml'
import membersData from '@/data/members.yaml'
import committeesData from '@/data/committees.yaml'
import countries from 'i18n-iso-countries'
import en from 'i18n-iso-countries/langs/en.json'

countries.registerLocale(en)

export interface ContentData {
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

const modules = import.meta.glob<{ default: ContentData }>('../content/*/*.json', { eager: true })

const sections = new Map<string, Map<string, ContentData>>()
for (const [path, mod] of Object.entries(modules)) {
  const parts = path.split('/')
  const section = parts[parts.length - 2]
  const slug = parts[parts.length - 1].replace('.json', '')
  if (!sections.has(section)) sections.set(section, new Map())
  sections.get(section)!.set(slug, mod.default)
}

export function getContent(section: string, slug: string): ContentData | null {
  return sections.get(section)?.get(slug) ?? null
}

const order = (d: ContentData) => Number(d.frontmatter?.order ?? Infinity)

export function getList(section: string): ContentData[] {
  const items = [...(sections.get(section)?.values() ?? [])]
  return items.sort((a, b) => {
    if (order(a) !== order(b)) return order(a) - order(b)
    if (a.date && b.date) return b.date.localeCompare(a.date)
    return (a.title ?? '').localeCompare(b.title ?? '')
  })
}

export function toNavItems(section: string) {
  return getList(section).map((m) => ({ title: m.title, slug: m.slug }))
}

export interface Person {
  name: string
  slug: string
  role: string
  country?: string
  photo?: string
  linkedin?: string
  highlight?: string
  blurb: string
  officer?: number
  founder?: number
}

export interface Member {
  name: string
  logo?: string
  url?: string
  slug?: string
  country: string
  category: 'founding' | 'corporate' | 'small' | 'nonprofit' | 'university' | 'individual'
  joined: number
  desc?: string
}

export interface Committee {
  id: string
  name: string
  scope: string
  standardization: string
  status: string
}

export interface Language {
  name: string
  slug: string
  color: string
  icon: string
  iso: string
  isoShort: string
  invented: string
  blurb: string
  desc: string
  features: string[]
  history: string
}

export const people = peopleData as Person[]
export const languages = languagesData as Language[]
export const members = membersData as Member[]
export const committees = committeesData as Committee[]

export function peopleByRank(key: 'officer' | 'founder'): Person[] {
  return people.filter((p) => p[key] != null).sort((a, b) => a[key]! - b[key]!)
}

// ISO 3166-1 alpha-2 code derived from a country name (e.g. "United Kingdom" → "GB").
// Null when the name does not resolve — callers fall back to the bare name.
export function countryCode(name: string): string | null {
  return countries.getAlpha2Code(name, 'en') ?? null
}
