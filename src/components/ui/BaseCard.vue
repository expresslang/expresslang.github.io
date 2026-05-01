<script setup lang="ts">
withDefaults(defineProps<{
  hover?: boolean
  to?: string
  href?: string
  padding?: 'sm' | 'md' | 'lg'
}>(), {
  hover: true,
  padding: 'md',
})

const paddingClasses: Record<string, string> = {
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
}
</script>

<template>
  <RouterLink
    v-if="to"
    :to="to"
    :class="[
      'block rounded-xl border border-gray-200/80 dark:border-gray-700/60 bg-white dark:bg-navy-light transition-all duration-200',
      paddingClasses[padding],
      hover && 'hover:border-elf-blue/30 dark:hover:border-elf-blue/30 hover:shadow-lg hover:shadow-elf-blue/5 dark:hover:shadow-elf-blue/5 hover:-translate-y-0.5',
    ]"
  >
    <slot />
  </RouterLink>
  <a
    v-else-if="href"
    :href="href"
    target="_blank"
    rel="noopener"
    :class="[
      'block rounded-xl border border-gray-200/80 dark:border-gray-700/60 bg-white dark:bg-navy-light transition-all duration-200',
      paddingClasses[padding],
      hover && 'hover:border-elf-blue/30 dark:hover:border-elf-blue/30 hover:shadow-lg hover:shadow-elf-blue/5 dark:hover:shadow-elf-blue/5 hover:-translate-y-0.5',
    ]"
  >
    <slot />
  </a>
  <div
    v-else
    :class="[
      'rounded-xl border border-gray-200/80 dark:border-gray-700/60 bg-white dark:bg-navy-light transition-all duration-200',
      paddingClasses[padding],
    ]"
  >
    <slot />
  </div>
</template>
