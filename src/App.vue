<script setup lang="ts">
import TheHeader from '@/components/layout/TheHeader.vue'
import TheFooter from '@/components/layout/TheFooter.vue'
</script>

<template>
  <a
    href="#main-content"
    class="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:px-4 focus:py-2.5 focus:bg-elf-blue focus:text-white focus:rounded-lg focus:text-sm focus:font-medium focus:shadow-lg"
  >
    Skip to content
  </a>
  <div class="min-h-screen flex flex-col">
    <TheHeader />
    <main id="main-content" class="flex-1">
      <RouterView v-slot="{ Component, route }">
        <Suspense>
          <component :is="Component" :key="route.path" />
        </Suspense>
      </RouterView>
    </main>
    <TheFooter />
  </div>
</template>
