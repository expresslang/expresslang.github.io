export interface ContentCollection {
  name: string
  imagesDir: string
  routePrefix: string | null
}

export const contentCollections: ContentCollection[] = [
  { name: 'pages', imagesDir: '/images', routePrefix: null },
  { name: 'posts', imagesDir: '/images/blog', routePrefix: '/blog' },
  { name: 'learn', imagesDir: '/images/learn', routePrefix: '/learn/tutorial' },
  { name: 'course', imagesDir: '/course/images', routePrefix: '/learn/jotne-express' },
  { name: 'languages', imagesDir: '/images/languages', routePrefix: '/languages' },
  { name: 'people', imagesDir: '/images/people', routePrefix: '/people' },
]
