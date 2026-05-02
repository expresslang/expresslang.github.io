<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useContent, type ContentData } from '@/composables/useContent'
import AsciiDocContent from '@/components/content/AsciiDocContent.vue'

const route = useRoute()
const slug = route.params.slug as string
const content: ContentData | null = await useContent('languages', slug)

interface LanguageInfo {
  iso: string
  color: string
  icon: string
}

const languageMeta: Record<string, LanguageInfo> = {
  express: { iso: 'ISO 10303-11:2004', color: '#e99262', icon: '/logos/logo-lang-icon-express.svg' },
  'express-g': { iso: 'ISO 10303-11:2004', color: '#4ec0aa', icon: '/logos/logo-lang-icon-expressg.svg' },
  'express-i': { iso: 'ISO 10303-12', color: '#d85577', icon: '/logos/logo-lang-icon-expressi.svg' },
  'express-x': { iso: 'ISO 10303-14', color: '#077783', icon: '/logos/logo-lang-icon-expressx.svg' },
  'express-q': { iso: 'ELF Specification', color: '#7c5cbf', icon: '/logos/logo-lang-icon-expressq.svg' },
}

const siblings = [
  { name: 'EXPRESS', slug: 'express' },
  { name: 'EXPRESS-G', slug: 'express-g' },
  { name: 'EXPRESS-I', slug: 'express-i' },
  { name: 'EXPRESS-X', slug: 'express-x' },
  { name: 'EXPRESS-Q', slug: 'express-q' },
]

const meta = languageMeta[slug]
</script>

<template>
  <div>
    <template v-if="content">
      <!-- Hero -->
      <div class="bg-gradient-to-b from-slate-50 to-white dark:from-navy dark:to-navy-light/30 pt-12 pb-12">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav class="text-sm text-gray-400 dark:text-gray-500 mb-6 flex items-center gap-1.5">
            <RouterLink to="/" class="hover:text-elf-blue dark:hover:text-elf-blue transition-colors">Home</RouterLink>
            <span>/</span>
            <RouterLink to="/languages" class="hover:text-elf-blue dark:hover:text-elf-blue transition-colors">Languages</RouterLink>
            <span>/</span>
            <span class="text-gray-700 dark:text-gray-300">{{ content.title }}</span>
          </nav>
          <div v-if="meta" class="flex items-center gap-5 mb-2">
            <img :src="meta.icon" :alt="content.title" class="h-16 w-auto" />
            <div>
              <h1 class="font-[Montserrat,sans-serif] font-bold text-3xl sm:text-4xl leading-tight" :style="{ color: meta.color }">{{ content.title }}</h1>
              <p class="font-mono text-xs text-gray-400 dark:text-gray-500 tracking-wide mt-2">{{ meta.iso }}</p>
            </div>
          </div>
          <h1 v-else class="text-3xl sm:text-4xl font-serif font-bold text-gray-900 dark:text-white leading-tight">{{ content.title }}</h1>
        </div>
      </div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div class="lg:flex lg:gap-12">
          <!-- Sidebar -->
          <aside class="hidden lg:block w-56 shrink-0">
            <div class="sticky top-24 space-y-1">
              <p class="text-xs font-mono font-semibold tracking-[0.15em] uppercase text-gray-400 dark:text-gray-500 mb-3">Languages</p>
              <RouterLink
                v-for="sib in siblings"
                :key="sib.slug"
                :to="`/languages/${sib.slug}`"
                :class="[
                  'flex items-center gap-2 px-3 py-2 text-sm rounded-lg transition-colors',
                  sib.slug === slug
                    ? 'font-medium'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-navy-light',
                ]"
                :style="sib.slug === slug ? { color: languageMeta[sib.slug]?.color, backgroundColor: `${languageMeta[sib.slug]?.color}14` } : {}"
              >
                <img :src="languageMeta[sib.slug]?.icon" :alt="sib.name" class="h-5 w-auto" />
                {{ sib.name }}
              </RouterLink>
            </div>
          </aside>

          <!-- Content -->
          <div class="flex-1 min-w-0">
            <AsciiDocContent :html="content.body" />
          </div>
        </div>
      </div>
    </template>

    <div v-else class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
      <p class="text-2xl font-serif font-bold text-gray-900 dark:text-white">Language page not found</p>
      <RouterLink to="/languages" class="mt-4 inline-block text-elf-blue dark:text-elf-blue hover:underline">&larr; Back to Languages</RouterLink>
    </div>
  </div>
</template>
