<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useContent, type ContentData } from '@/composables/useContent'
import AsciiDocContent from '@/components/content/AsciiDocContent.vue'

const route = useRoute()
const slug = route.params.slug as string
const content: ContentData | null = await useContent('people', slug)
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
            <RouterLink to="/leadership" class="hover:text-elf-blue dark:hover:text-elf-blue transition-colors">Leadership</RouterLink>
            <span>/</span>
            <span class="text-gray-700 dark:text-gray-300">{{ content.title }}</span>
          </nav>
          <div class="flex items-center gap-5">
            <div v-if="content.frontmatter.photo" class="w-16 h-16 rounded-full overflow-hidden shrink-0">
              <img :src="content.frontmatter.photo" :alt="content.title" class="w-full h-full object-cover" />
            </div>
            <div v-else class="w-16 h-16 rounded-full bg-elf-blue/10 dark:bg-elf-blue/10 flex items-center justify-center shrink-0">
              <span class="text-2xl font-serif font-bold text-elf-blue dark:text-elf-blue">{{ content.title.charAt(0) }}</span>
            </div>
            <div>
              <h1 class="text-3xl sm:text-4xl font-serif font-bold text-gray-900 dark:text-white leading-tight">{{ content.title }}</h1>
              <p v-if="content.frontmatter.role" class="font-mono text-sm text-elf-blue dark:text-elf-blue tracking-wide mt-1">{{ content.frontmatter.role }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <AsciiDocContent :html="content.body" />
      </div>
    </template>

    <div v-else class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
      <p class="text-2xl font-serif font-bold text-gray-900 dark:text-white">Person not found</p>
      <RouterLink to="/leadership" class="mt-4 inline-block text-elf-blue dark:text-elf-blue hover:underline">&larr; Back to Leadership</RouterLink>
    </div>
  </div>
</template>
