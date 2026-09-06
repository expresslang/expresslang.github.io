<script setup lang="ts">
withDefaults(
  defineProps<{
    eyebrow?: string
    title: string
    lead?: string
    crumbs?: Array<{ label: string; to?: string }>
    width?: '3xl' | '4xl'
    compact?: boolean
  }>(),
  { width: '4xl', compact: false },
)
</script>

<template>
  <div class="bg-gradient-to-b from-slate-50 to-white dark:from-navy dark:to-navy-light/30 pt-12" :class="compact ? 'pb-8' : 'pb-12'">
    <div class="mx-auto px-4 sm:px-6 lg:px-8" :class="width === '3xl' ? 'max-w-3xl' : 'max-w-4xl'">
      <nav v-if="crumbs?.length" class="text-sm text-gray-400 dark:text-gray-500 mb-6 flex items-center gap-1.5">
        <template v-for="(crumb, i) in crumbs" :key="i">
          <span v-if="i > 0" class="text-gray-300 dark:text-gray-600">/</span>
          <RouterLink v-if="crumb.to" :to="crumb.to" class="hover:text-elf-blue dark:hover:text-elf-blue transition-colors">{{ crumb.label }}</RouterLink>
          <span v-else class="text-gray-700 dark:text-gray-300">{{ crumb.label }}</span>
        </template>
      </nav>
      <p v-if="eyebrow" class="font-mono text-xs tracking-[0.2em] uppercase text-elf-blue dark:text-elf-blue mb-3">{{ eyebrow }}</p>
      <h1 class="text-3xl sm:text-4xl font-serif font-bold text-gray-900 dark:text-white leading-tight">{{ title }}</h1>
      <p v-if="lead" class="mt-4 text-lg text-gray-500 dark:text-gray-400 max-w-2xl leading-relaxed">{{ lead }}</p>
    </div>
  </div>
</template>
