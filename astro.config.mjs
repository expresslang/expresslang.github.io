import { defineConfig } from 'astro/config'
import vue from '@astrojs/vue'
import tailwindcss from '@tailwindcss/vite'
import { load as loadYaml } from 'js-yaml'
import { fileURLToPath } from 'node:url'

function yamlData() {
  return {
    name: 'yaml-data',
    enforce: 'pre',
    transform(code, id) {
      if (!id.split('?')[0].endsWith('.yaml')) return
      return { code: `export default ${JSON.stringify(loadYaml(code))}`, map: null }
    },
  }
}

export default defineConfig({
  site: 'https://www.expresslang.org',
  output: 'static',
  integrations: [vue()],
  vite: {
    plugins: [tailwindcss(), yamlData()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
  },
})
