<script setup lang="ts">
import { useContentList } from '@/composables/useContent'
import BaseCard from '@/components/ui/BaseCard.vue'
import AnimatedSection from '@/components/ui/AnimatedSection.vue'

const posts = await useContentList('posts')

function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}
</script>

<template>
  <div>
    <!-- Hero -->
    <div class="bg-gradient-to-b from-slate-50 to-white dark:from-navy dark:to-navy-light/30 pt-12 pb-12">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <p class="font-mono text-xs tracking-[0.2em] uppercase text-elf-blue dark:text-elf-blue mb-3">News</p>
        <h1 class="text-3xl sm:text-4xl font-serif font-bold text-gray-900 dark:text-white">Blog</h1>
        <p class="mt-3 text-gray-500 dark:text-gray-400">News and updates from the EXPRESS Language Foundation</p>
      </div>
    </div>

    <!-- Posts -->
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
      <div v-if="posts.length" class="grid sm:grid-cols-2 gap-6">
        <AnimatedSection v-for="(post, i) in posts" :key="post.slug" :style="{ transitionDelay: `${i * 60}ms` }">
          <BaseCard :to="`/blog/${post.slug}`" padding="lg">
            <div class="flex flex-wrap items-center gap-2 mb-3">
              <span class="font-mono text-xs text-gray-400 dark:text-gray-500">{{ formatDate(post.date!) }}</span>
              <span v-for="cat in post.categories" :key="cat" class="text-[0.65rem] px-2 py-0.5 rounded-full bg-elf-blue/8 dark:bg-elf-blue/8 text-elf-blue dark:text-elf-blue font-medium tracking-wide">
                {{ cat }}
              </span>
            </div>
            <h3 class="font-serif font-bold text-lg text-gray-900 dark:text-white leading-snug">{{ post.title }}</h3>
            <p v-if="post.excerpt" class="mt-2 text-sm text-gray-500 dark:text-gray-400 line-clamp-3">{{ post.excerpt }}</p>
            <p v-if="post.authors?.length" class="mt-3 text-xs text-gray-400 dark:text-gray-500">
              {{ post.authors.map(a => a.name).join(', ') }}
            </p>
          </BaseCard>
        </AnimatedSection>
      </div>
      <div v-else class="text-center py-20">
        <p class="font-mono text-sm text-gray-400 dark:text-gray-500">No blog posts yet.</p>
      </div>
    </div>
  </div>
</template>
