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

const allModules = import.meta.glob<ContentData>('../content/*/*.json', { eager: true })

const sectionModules: Record<string, Record<string, ContentData>> = {}
for (const [path, data] of Object.entries(allModules)) {
  const parts = path.split('/')
  const section = parts[parts.length - 2]
  const slug = parts[parts.length - 1].replace('.json', '')
  ;(sectionModules[section] ??= {})[slug] = data
}

export async function useContent(section: string, slug: string): Promise<ContentData | null> {
  const key = `${section}/${slug}`
  if (contentCache.has(key)) return contentCache.get(key)!

  const content = sectionModules[section]?.[slug]
  if (!content) return null

  const item = (content as { default?: ContentData }).default || content
  contentCache.set(key, item)
  return item
}

export async function useContentList(section: string): Promise<ContentData[]> {
  const modules = sectionModules[section]
  if (!modules) return []

  const order = (d: ContentData) => Number(d.frontmatter?.order ?? Infinity)

  return Object.values(modules)
    .map((data) => (data as { default?: ContentData }).default || data)
    .sort((a, b) => {
      if (order(a) !== order(b)) return order(a) - order(b)
      if (a.date && b.date) return b.date.localeCompare(a.date)
      return (a.title ?? '').localeCompare(b.title ?? '')
    })
}
