import { defineConfig, type Plugin } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'node:path'
import { globby } from 'globby'
import { basename } from 'node:path'
import { load as loadYaml } from 'js-yaml'
import { contentCollections } from './scripts/collections'

function yamlData(): Plugin {
  return {
    name: 'yaml-data',
    transform(code, id) {
      if (!id.endsWith('.yaml')) return
      return { code: `export default ${JSON.stringify(loadYaml(code))}`, map: null }
    },
  }
}

export default defineConfig({
  plugins: [vue(), yamlData()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  ssgOptions: {
    script: 'async',
    formatting: 'minify',
    includedRoutes: async () => {
      const routes = [
        '/',
        '/about', '/membership', '/privacy', '/tos',
        '/blog', '/learn', '/standards', '/languages', '/leadership', '/supporters',
      ]

      for (const collection of contentCollections) {
        if (!collection.routePrefix) continue
        const files = await globby(`src/content/${collection.name}/*.json`)
        routes.push(...files.map((f) => `${collection.routePrefix}/${basename(f, '.json')}`))
      }

      return routes
    },
  },
})
