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

const contentCache = new Map<string, ContentData>()

const pageModules = import.meta.glob<ContentData>('../content/pages/*.json', { eager: true })
const postModules = import.meta.glob<ContentData>('../content/posts/*.json', { eager: true })
const learnModules = import.meta.glob<ContentData>('../content/learn/*.json', { eager: true })
const courseModules = import.meta.glob<ContentData>('../content/course/*.json', { eager: true })
const languageModules = import.meta.glob<ContentData>('../content/languages/*.json', { eager: true })
const peopleModules = import.meta.glob<ContentData>('../content/people/*.json', { eager: true })

const sectionModules: Record<string, Record<string, ContentData>> = {
  pages: pageModules,
  posts: postModules,
  learn: learnModules,
  course: courseModules,
  languages: languageModules,
  people: peopleModules,
}

function resolveKey(path: string): string {
  const parts = path.split('/')
  return parts[parts.length - 1].replace('.json', '')
}

export async function useContent(section: string, slug: string): Promise<ContentData | null> {
  const key = `${section}/${slug}`
  if (contentCache.has(key)) return contentCache.get(key)!

  const modules = sectionModules[section]
  if (!modules) return null

  for (const [path, data] of Object.entries(modules)) {
    if (resolveKey(path) === slug) {
      const content = (data as any).default || data
      contentCache.set(key, content)
      return content
    }
  }
  return null
}

export async function useContentList(section: string): Promise<ContentData[]> {
  const modules = sectionModules[section]
  if (!modules) return []

  const items = Object.values(modules).map((data) => (data as any).default || data)
  return items.sort((a, b) => {
    if (a.date && b.date) return b.date.localeCompare(a.date)
    return (a.title ?? '').localeCompare(b.title ?? '')
  })
}
