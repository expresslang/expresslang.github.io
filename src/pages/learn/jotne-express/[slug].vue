<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useContent, type ContentData } from '@/composables/useContent'
import { courseNavigation, type NavItem } from '@/data/navigation'
import AsciiDocContent from '@/components/content/AsciiDocContent.vue'
import TheSidebar from '@/components/layout/TheSidebar.vue'

const route = useRoute()
const slug = route.params.slug as string
const content: ContentData | null = await useContent('course', slug)

function flatten(items: NavItem[]): NavItem[] {
  return items.flatMap((item) => {
    if (item.children) return flatten(item.children)
    return item.slug ? [item] : []
  })
}

const flatItems = flatten(courseNavigation)
const idx = flatItems.findIndex((i) => i.slug === slug)
const prev = idx > 0 ? flatItems[idx - 1] : null
const next = idx < flatItems.length - 1 ? flatItems[idx + 1] : null
const baseUrl = '/learn/jotne-express'
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div class="flex gap-8">
      <TheSidebar :items="courseNavigation" :current-slug="slug" base-url="/learn/jotne-express" />
      <div class="flex-1 min-w-0">
        <template v-if="content">
          <nav class="text-sm text-gray-400 dark:text-gray-500 mb-8">
            <RouterLink to="/" class="hover:text-elf-blue dark:hover:text-elf-blue transition-colors">Home</RouterLink>
            <span class="mx-2 text-gray-300 dark:text-gray-600">/</span>
            <RouterLink to="/learn" class="hover:text-elf-blue dark:hover:text-elf-blue transition-colors">EXPRESS \& STEP in Practice</RouterLink>
            <span class="mx-2 text-gray-300 dark:text-gray-600">/</span>
            <span class="text-gray-600 dark:text-gray-300">{{ content.title }}</span>
          </nav>
          <h1 class="text-3xl sm:text-4xl font-serif font-bold text-gray-900 dark:text-white leading-tight mb-10">{{ content.title }}</h1>
          <AsciiDocContent :html="content.body" />
          <div v-if="prev || next" class="flex justify-between items-center mt-16 pt-8 border-t border-gray-200/60 dark:border-gray-700/40">
            <RouterLink v-if="prev" :to="`${baseUrl}/${prev.slug}`" class="group flex flex-col items-start text-left min-h-[44px] justify-center max-w-[45%]">
              <span class="text-[0.65rem] font-mono uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-1">Previous</span>
              <span class="text-sm font-medium text-gray-700 dark:text-gray-200 group-hover:text-elf-blue dark:group-hover:text-elf-blue transition-colors">&larr; {{ prev.title }}</span>
            </RouterLink>
            <span v-else />
            <RouterLink v-if="next" :to="`${baseUrl}/${next.slug}`" class="group flex flex-col items-end text-right min-h-[44px] justify-center max-w-[45%]">
              <span class="text-[0.65rem] font-mono uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-1">Next</span>
              <span class="text-sm font-medium text-gray-700 dark:text-gray-200 group-hover:text-elf-blue dark:group-hover:text-elf-blue transition-colors">{{ next.title }} &rarr;</span>
            </RouterLink>
          </div>
        </template>
        <div v-else class="text-center py-20">
          <p class="text-2xl font-serif font-bold text-gray-900 dark:text-white">Module not found</p>
          <RouterLink to="/learn" class="mt-4 inline-block text-elf-blue dark:text-elf-blue hover:underline">&larr; Back to course</RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>
