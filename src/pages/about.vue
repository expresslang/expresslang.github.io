<script setup lang="ts">
import { useContent, type ContentData } from '@/composables/useContent'
import AsciiDocContent from '@/components/content/AsciiDocContent.vue'
import PageHero from '@/components/ui/PageHero.vue'

const content: ContentData | null = await useContent('pages', 'about')
</script>

<template>
  <div>
    <PageHero
      eyebrow="About"
      :title="content?.title || 'About'"
      :crumbs="[
        { label: 'Home', to: '/' },
        { label: content?.title || 'About' },
      ]"
      width="3xl"
      compact
    />
    <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
      <AsciiDocContent v-if="content" :html="content.body" />
      <div v-else class="text-center py-20 text-gray-400">
        <p class="font-mono text-sm">Content not available yet.</p>
      </div>
    </div>
  </div>
</template>
