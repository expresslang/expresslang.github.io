import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'node:path'
import { globby } from 'globby'
import { basename } from 'node:path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  ssgOptions: {
    script: 'async',
    formatting: 'minify',
    includedRoutes: async () => {
      const pages = await globby('src/content/pages/*.json')
      const posts = await globby('src/content/posts/*.json')
      const learn = await globby('src/content/learn/*.json')
      const course = await globby('src/content/course/*.json')
      const languages = await globby('src/content/languages/*.json')
      const people = await globby('src/content/people/*.json')

      return [
        '/',
        '/about', '/membership', '/privacy', '/tos',
        '/blog', '/learn', '/standards', '/languages', '/leadership', '/supporters',
        ...posts.map((p) => `/blog/${basename(p, '.json')}`),
        ...learn.map((p) => `/learn/tutorial/${basename(p, '.json')}`),
        ...course.map((p) => `/learn/jotne-express/${basename(p, '.json')}`),
        ...languages.map((p) => `/languages/${basename(p, '.json')}`),
        ...people.map((p) => `/people/${basename(p, '.json')}`),
      ]
    },
  },
})
