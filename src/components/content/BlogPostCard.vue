<script setup lang="ts">
import type { ContentData } from '@/composables/useContent'

defineProps<{
  post: ContentData
}>()

function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}
</script>

<template>
  <RouterLink
    :to="`/blog/${post.slug}`"
    class="block group p-6 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-navy-light hover:border-elf-blue/30 dark:hover:border-elf-blue/30 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
  >
    <div class="flex flex-wrap items-center gap-2 mb-3">
      <span v-if="post.date" class="text-xs font-mono text-gray-400 dark:text-gray-500">
        {{ formatDate(post.date) }}
      </span>
      <span
        v-for="cat in post.categories"
        :key="cat"
        class="text-xs px-2 py-0.5 rounded-full bg-blue-50 dark:bg-navy text-elf-blue dark:text-elf-blue"
      >
        {{ cat }}
      </span>
    </div>
    <h3 class="font-serif font-bold text-lg text-gray-900 dark:text-white group-hover:text-elf-blue dark:group-hover:text-elf-blue transition-colors">
      {{ post.title }}
    </h3>
    <p v-if="post.excerpt" class="mt-2 text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
      {{ post.excerpt }}
    </p>
    <div v-if="post.authors?.length" class="mt-3 flex items-center gap-2">
      <span class="text-xs text-gray-500 dark:text-gray-400">
        {{ post.authors.map((a) => a.name).join(', ') }}
      </span>
    </div>
  </RouterLink>
</template>
