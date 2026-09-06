<script setup lang="ts">
import { useHeroPairs } from '@/composables/useHeroPairs'

const { pairIndex, heroPairs } = useHeroPairs()
</script>

<template>
  <div>
    <h1 class="text-4xl sm:text-5xl lg:text-[3.5rem] font-serif font-bold text-gray-900 dark:text-white leading-[1.15] tracking-tight">
      The language family<br />
      behind
      <Transition
        mode="out-in"
        enter-active-class="transition-all duration-300 ease-out"
        enter-from-class="opacity-0 translate-y-3"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition-all duration-200 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-2"
      >
        <span :key="heroPairs[pairIndex].slogan" class="relative block mt-1 text-elf-blue dark:text-elf-blue">
          {{ heroPairs[pairIndex].slogan }}
          <span class="absolute bottom-1 left-0 right-0 h-3 bg-elf-blue/10 dark:bg-elf-blue/10 -skew-x-2 pointer-events-none" />
        </span>
      </Transition>
    </h1>
  </div>
</template>
