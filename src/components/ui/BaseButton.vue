<script setup lang="ts">
withDefaults(defineProps<{
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  to?: string
}>(), {
  variant: 'primary',
  size: 'md',
})

const sizeClasses: Record<string, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-2.5 text-sm',
  lg: 'px-8 py-3.5 text-base',
}

const baseClasses = 'inline-flex items-center justify-center gap-2 font-medium rounded-lg transition-all duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-elf-blue dark:focus-visible:outline-elf-blue min-h-[44px]'
</script>

<template>
  <RouterLink
    v-if="to"
    :to="to"
    :class="[baseClasses, sizeClasses[size],
      variant === 'primary' && 'bg-elf-blue dark:bg-elf-blue text-white hover:bg-elf-blue-dark dark:hover:brightness-110',
      variant === 'secondary' && 'border border-elf-blue/30 dark:border-elf-blue/30 text-elf-blue dark:text-elf-blue hover:bg-elf-blue/5 dark:hover:bg-elf-blue/5 hover:border-elf-blue dark:hover:border-elf-blue',
      variant === 'ghost' && 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-navy-light',
    ]"
  >
    <slot />
  </RouterLink>
  <a
    v-else-if="href"
    :href="href"
    target="_blank"
    rel="noopener"
    :class="[baseClasses, sizeClasses[size],
      variant === 'primary' && 'bg-elf-blue dark:bg-elf-blue text-white hover:bg-elf-blue-dark dark:hover:brightness-110',
      variant === 'secondary' && 'border border-elf-blue/30 dark:border-elf-blue/30 text-elf-blue dark:text-elf-blue hover:bg-elf-blue/5 dark:hover:bg-elf-blue/5 hover:border-elf-blue dark:hover:border-elf-blue',
      variant === 'ghost' && 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-navy-light',
    ]"
  >
    <slot />
  </a>
  <button
    v-else
    :class="[baseClasses, sizeClasses[size],
      variant === 'primary' && 'bg-elf-blue dark:bg-elf-blue text-white hover:bg-elf-blue-dark dark:hover:brightness-110',
      variant === 'secondary' && 'border border-elf-blue/30 dark:border-elf-blue/30 text-elf-blue dark:text-elf-blue hover:bg-elf-blue/5 dark:hover:bg-elf-blue/5 hover:border-elf-blue dark:hover:border-elf-blue',
      variant === 'ghost' && 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-navy-light',
    ]"
  >
    <slot />
  </button>
</template>
