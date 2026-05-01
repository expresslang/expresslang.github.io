<script setup lang="ts">
import { useContent, type ContentData } from '@/composables/useContent'
import AsciiDocContent from '@/components/content/AsciiDocContent.vue'

const content: ContentData | null = await useContent('pages', 'privacy')
</script>

<template>
  <div>
    <div class="bg-gradient-to-b from-slate-50 to-white dark:from-navy dark:to-navy-light/30 pt-12 pb-8">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 class="text-3xl sm:text-4xl font-serif font-bold text-gray-900 dark:text-white">{{ content?.title || 'Privacy Policy' }}</h1>
      </div>
    </div>
    <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
      <AsciiDocContent v-if="content" :html="content.body" />
      <div v-else class="text-center py-20 text-gray-400">
        <p class="font-mono text-sm">Content not available yet.</p>
      </div>
    </div>
  </div>
</template>
