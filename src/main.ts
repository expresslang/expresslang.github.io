import { ViteSSG } from 'vite-ssg'
import { routes } from './router'
import App from './App.vue'
import './styles/main.css'
import './styles/asciidoc.css'

export const createApp = ViteSSG(
  App,
  { routes },
  ({ router, head }) => {
    router.afterEach((to) => {
      if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'instant' })
      const siteTitle = 'EXPRESS Language Foundation'
      const pageMeta = to.meta as { title?: string; description?: string }
      const pageTitle = pageMeta.title || (to.name === 'not-found' ? 'Not Found' : '')
      const fullTitle = pageTitle ? `${pageTitle} — ${siteTitle}` : siteTitle
      const desc = pageMeta.description || 'International standards for information modelling, abstract languages and data management'

      head.push({
        title: fullTitle,
        meta: [
          { name: 'description', content: desc },
          { property: 'og:title', content: fullTitle },
          { property: 'og:description', content: desc },
          { property: 'og:type', content: 'website' },
          { property: 'og:site_name', content: siteTitle },
          { name: 'twitter:card', content: 'summary' },
          { name: 'twitter:title', content: fullTitle },
          { name: 'twitter:description', content: desc },
        ],
        link: [
          { rel: 'canonical', href: `https://www.expresslang.org${to.path}` },
        ],
      })
    })
  },
)
