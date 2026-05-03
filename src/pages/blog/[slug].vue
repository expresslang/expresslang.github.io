<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useContent, type ContentData } from '@/composables/useContent'
import AsciiDocContent from '@/components/content/AsciiDocContent.vue'

const route = useRoute()
const slug = route.params.slug as string
const content: ContentData | null = await useContent('posts', slug)

function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}
</script>

<template>
  <div>
    <template v-if="content">
      <!-- Hero -->
      <div class="bg-gradient-to-b from-slate-50 to-white dark:from-navy dark:to-navy-light/30 pt-12 pb-8">
        <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav class="text-sm text-gray-400 dark:text-gray-500 mb-8">
            <RouterLink to="/" class="hover:text-elf-blue dark:hover:text-elf-blue transition-colors">Home</RouterLink>
            <span class="mx-2 text-gray-300 dark:text-gray-600">/</span>
            <RouterLink to="/blog" class="hover:text-elf-blue dark:hover:text-elf-blue transition-colors">Blog</RouterLink>
            <span class="mx-2 text-gray-300 dark:text-gray-600">/</span>
            <span class="text-gray-600 dark:text-gray-300">{{ content.title }}</span>
          </nav>

          <div class="flex flex-wrap items-center gap-2 mb-4">
            <span v-if="content.date" class="font-mono text-xs text-gray-400 dark:text-gray-500">{{ formatDate(content.date) }}</span>
            <span v-for="cat in content.categories" :key="cat" class="text-[0.65rem] px-2 py-0.5 rounded-full bg-elf-blue/8 dark:bg-elf-blue/8 text-elf-blue dark:text-elf-blue font-medium tracking-wide">
              {{ cat }}
            </span>
          </div>
          <h1 class="text-3xl sm:text-4xl font-serif font-bold text-gray-900 dark:text-white leading-tight">{{ content.title }}</h1>
          <div v-if="content.authors?.length" class="mt-4 flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            By {{ content.authors.map((a) => a.name).join(', ') }}
          </div>
        </div>
      </div>

      <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <AsciiDocContent :html="content.body" />
      </div>
    </template>
    <div v-else class="text-center py-20">
      <p class="text-2xl font-serif font-bold text-gray-900 dark:text-white">Post not found</p>
      <RouterLink to="/blog" class="mt-4 inline-block text-elf-blue dark:text-elf-blue hover:underline">&larr; Back to blog</RouterLink>
    </div>
  </div>
</template>
