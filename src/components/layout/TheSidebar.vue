<script setup lang="ts">
import { ref } from 'vue'
import type { NavItem } from '@/data/navigation'

const props = defineProps<{
  items: NavItem[]
  currentSlug: string
  baseUrl: string
}>()

const mobileOpen = ref(false)

function flatten(items: NavItem[]): NavItem[] {
  return items.flatMap((item) => {
    if (item.children) return flatten(item.children)
    return item.slug ? [item] : []
  })
}

function getPrev(items: NavItem[], slug: string): NavItem | null {
  const flat = flatten(items)
  const idx = flat.findIndex((i) => i.slug === slug)
  return idx > 0 ? flat[idx - 1] : null
}

function getNext(items: NavItem[], slug: string): NavItem | null {
  const flat = flatten(items)
  const idx = flat.findIndex((i) => i.slug === slug)
  return idx < flat.length - 1 ? flat[idx + 1] : null
}

const prev = getPrev(props.items, props.currentSlug)
const next = getNext(props.items, props.currentSlug)

defineExpose({ prev, next, baseUrl: props.baseUrl })

function closeMobile() {
  mobileOpen.value = false
}
</script>

<template>
  <!-- Desktop sidebar -->
  <aside class="hidden lg:block w-52 shrink-0" aria-label="Section navigation">
    <div class="sticky top-24 pr-6">
      <nav class="space-y-0.5">
        <template v-for="item in items" :key="item.slug ?? item.title">
          <RouterLink
            v-if="item.slug"
            :to="`${baseUrl}/${item.slug}`"
            class="block px-3 py-1.5 text-[0.8rem] rounded-md transition-colors duration-150 border-l-2"
            :class="[
              item.slug === currentSlug
                ? 'text-elf-blue dark:text-elf-blue font-semibold bg-elf-blue/5 dark:bg-elf-blue/5 border-elf-blue dark:border-elf-blue'
                : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-navy-light border-transparent',
            ]"
          >
            {{ item.title }}
          </RouterLink>
          <div v-else class="mt-5 mb-1">
            <p class="px-3 text-[0.65rem] font-mono font-semibold uppercase tracking-[0.15em] text-gray-400 dark:text-gray-500 mb-2">
              {{ item.title }}
            </p>
            <div class="space-y-0.5">
              <RouterLink
                v-for="child in item.children"
                :key="child.slug"
                :to="`${baseUrl}/${child.slug}`"
                class="block px-3 py-1.5 pl-5 text-[0.8rem] rounded-md transition-colors duration-150 border-l-2"
                :class="[
                  child.slug === currentSlug
                    ? 'text-elf-blue dark:text-elf-blue font-semibold bg-elf-blue/5 dark:bg-elf-blue/5 border-elf-blue dark:border-elf-blue'
                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-navy-light border-transparent',
                ]"
              >
                {{ child.title }}
              </RouterLink>
            </div>
          </div>
        </template>
      </nav>
    </div>
  </aside>

  <!-- Mobile sidebar toggle -->
  <div class="lg:hidden mb-4">
    <button
      class="flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-navy-light rounded-lg hover:bg-gray-100 dark:hover:bg-navy min-h-[44px] transition-colors"
      :aria-expanded="mobileOpen"
      aria-controls="mobile-sidebar"
      @click="mobileOpen = !mobileOpen"
    >
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
      Table of Contents
    </button>
  </div>

  <Teleport to="body">
    <Transition
      enter-active-class="transition duration-300"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-200"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div v-if="mobileOpen" class="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true" aria-label="Table of contents">
        <div class="fixed inset-0 bg-black/20 dark:bg-black/40 backdrop-blur-sm" @click="closeMobile" />
        <div id="mobile-sidebar" class="fixed top-0 left-0 bottom-0 w-72 max-w-[80vw] bg-white dark:bg-navy shadow-2xl overflow-y-auto">
          <div class="flex items-center justify-between p-5 border-b border-gray-100 dark:border-gray-800">
            <span class="font-serif font-semibold text-sm text-gray-900 dark:text-white">Contents</span>
            <button @click="closeMobile" class="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 rounded-md min-h-[44px] min-w-[44px] flex items-center justify-center" aria-label="Close table of contents">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
            </button>
          </div>
          <nav class="p-4 space-y-0.5" aria-label="Section navigation">
            <template v-for="item in items" :key="item.slug ?? item.title">
              <RouterLink
                v-if="item.slug"
                :to="`${baseUrl}/${item.slug}`"
                class="block px-3 py-2.5 text-sm rounded-md transition-colors min-h-[44px] flex items-center border-l-2"
                :class="[
                  item.slug === currentSlug
                    ? 'text-elf-blue dark:text-elf-blue font-semibold bg-elf-blue/5 dark:bg-elf-blue/5 border-elf-blue dark:border-elf-blue'
                    : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-navy-light border-transparent',
                ]"
                @click="closeMobile"
              >
                {{ item.title }}
              </RouterLink>
              <div v-else class="mt-5 mb-1">
                <p class="px-3 text-[0.65rem] font-mono font-semibold uppercase tracking-[0.15em] text-gray-400 dark:text-gray-500 mb-2">{{ item.title }}</p>
                <div class="space-y-0.5">
                  <RouterLink
                    v-for="child in item.children"
                    :key="child.slug"
                    :to="`${baseUrl}/${child.slug}`"
                    class="block px-3 py-2.5 pl-5 text-sm rounded-md transition-colors min-h-[44px] flex items-center border-l-2"
                    :class="[
                      child.slug === currentSlug
                        ? 'text-elf-blue dark:text-elf-blue font-semibold bg-elf-blue/5 dark:bg-elf-blue/5 border-elf-blue dark:border-elf-blue'
                        : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-navy-light border-transparent',
                    ]"
                    @click="closeMobile"
                  >
                    {{ child.title }}
                  </RouterLink>
                </div>
              </div>
            </template>
          </nav>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
