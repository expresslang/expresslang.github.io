<script setup lang="ts">
import { ref, watch, onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import { mainNavigation, type NavItem } from '@/data/navigation'
import DarkModeToggle from '@/components/ui/DarkModeToggle.vue'
const route = useRoute()
const mobileOpen = ref(false)
const scrolled = ref(false)
const openDropdown = ref<string | null>(null)
let dropdownTimeout: ReturnType<typeof setTimeout> | null = null

function isParent(item: NavItem): boolean {
  return !!(item.children && item.children.length)
}

function isActive(item: NavItem): boolean {
  if (item.path && (route.path === item.path || route.path.startsWith(item.path + '/'))) return true
  if (item.children) return item.children.some(c => c.path && (route.path === c.path || route.path.startsWith(c.path + '/')))
  return false
}

function showDropdown(title: string) {
  if (dropdownTimeout) clearTimeout(dropdownTimeout)
  openDropdown.value = title
}

function hideDropdown() {
  dropdownTimeout = setTimeout(() => { openDropdown.value = null }, 150)
}

function closeMobile() {
  mobileOpen.value = false
}

watch(mobileOpen, (open) => {
  document.body.style.overflow = open ? 'hidden' : ''
})

onMounted(() => {
  const onScroll = () => { scrolled.value = window.scrollY > 10 }
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
})
</script>

<template>
  <header
    :class="[
      'sticky top-0 z-40 transition-all duration-300',
      scrolled
        ? 'bg-white/90 dark:bg-navy/90 backdrop-blur-xl shadow-sm shadow-gray-900/5 dark:shadow-black/20'
        : 'bg-white dark:bg-navy',
    ]"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <RouterLink to="/" class="flex items-center gap-2.5 shrink-0 group" @click="closeMobile">
          <img src="/logos/logo-icon-white.svg" alt="" class="h-8 shrink-0 dark:hidden" />
          <img src="/logos/logo-icon-blue.svg" alt="" class="h-8 shrink-0 hidden dark:block" />
          <div class="flex flex-col leading-none">
            <span class="font-[Montserrat,sans-serif] font-bold text-[0.9rem] tracking-[0.06em] text-elf-blue dark:text-white">EXPRESS</span>
            <span class="font-[Montserrat,sans-serif] font-medium text-[0.58rem] tracking-[0.1em] text-elf-blue/70 dark:text-gray-400 mt-[3px]">Language Foundation</span>
          </div>
        </RouterLink>

        <!-- Desktop nav -->
        <nav class="hidden lg:flex items-center gap-0.5" aria-label="Main navigation">
          <template v-for="item in mainNavigation" :key="item.path || item.title">
            <!-- Regular link -->
            <RouterLink
              v-if="!isParent(item)"
              :to="item.path!"
              class="relative px-3 py-2 text-[0.8rem] font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white rounded-md transition-colors duration-150"
              :class="[isActive(item) ? '!text-elf-blue dark:!text-elf-blue' : '']"
            >
              {{ item.title }}
              <span
                v-if="isActive(item)"
                class="absolute bottom-0 left-3 right-3 h-0.5 bg-elf-blue dark:bg-elf-blue rounded-full"
              />
            </RouterLink>
            <!-- Dropdown -->
            <div
              v-else
              class="relative"
              @mouseenter="showDropdown(item.title)"
              @mouseleave="hideDropdown"
            >
              <RouterLink
                :to="item.path!"
                class="relative px-3 py-2 text-[0.8rem] font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white rounded-md transition-colors duration-150 inline-flex items-center gap-1"
                :class="[isActive(item) ? '!text-elf-blue dark:!text-elf-blue' : '']"
              >
                {{ item.title }}
                <svg class="w-3 h-3 mt-px" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
                <span
                  v-if="isActive(item)"
                  class="absolute bottom-0 left-3 right-3 h-0.5 bg-elf-blue dark:bg-elf-blue rounded-full"
                />
              </RouterLink>
              <Transition
                enter-active-class="transition duration-150 ease-out"
                enter-from-class="opacity-0 scale-95"
                enter-to-class="opacity-100 scale-100"
                leave-active-class="transition duration-100 ease-in"
                leave-from-class="opacity-100 scale-100"
                leave-to-class="opacity-0 scale-95"
              >
                <div
                  v-if="openDropdown === item.title"
                  class="absolute right-0 mt-1 w-44 rounded-lg bg-white dark:bg-navy-light border border-gray-200/80 dark:border-gray-700/60 shadow-lg shadow-gray-900/5 dark:shadow-black/20 py-1.5 z-50"
                >
                  <RouterLink
                    v-for="child in item.children"
                    :key="child.path"
                    :to="child.path!"
                    class="block px-4 py-2 text-[0.8rem] text-gray-600 dark:text-gray-300 hover:text-elf-blue dark:hover:text-elf-blue hover:bg-gray-50 dark:hover:bg-navy transition-colors"
                    :class="[route.path === child.path ? 'text-elf-blue dark:text-elf-blue' : '']"
                  >
                    {{ child.title }}
                  </RouterLink>
                </div>
              </Transition>
            </div>
          </template>
        </nav>

        <!-- Right side -->
        <div class="flex items-center gap-2">
          <DarkModeToggle />
          <a
            :href="'https://github.com/expresslang'"
            target="_blank"
            rel="noopener"
            class="hidden sm:flex p-2 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors rounded-md"
            aria-label="GitHub"
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
          </a>
          <button
            class="lg:hidden p-2 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white rounded-md transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
            :aria-expanded="mobileOpen"
            aria-controls="mobile-nav"
            aria-label="Toggle menu"
            @click="mobileOpen = !mobileOpen"
          >
            <svg v-if="!mobileOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
            <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile nav -->
    <Teleport to="body">
      <Transition
        enter-active-class="transition duration-300"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition duration-200"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div v-if="mobileOpen" class="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true" aria-label="Navigation menu">
          <div class="fixed inset-0 bg-black/20 dark:bg-black/40 backdrop-blur-sm" @click="closeMobile" />
          <Transition
            enter-active-class="transition duration-300"
            enter-from-class="-translate-x-full"
            enter-to-class="translate-x-0"
            leave-active-class="transition duration-200"
            leave-from-class="translate-x-0"
            leave-to-class="-translate-x-full"
          >
            <div id="mobile-nav" class="fixed top-0 left-0 bottom-0 w-80 max-w-[85vw] bg-white dark:bg-navy shadow-2xl">
              <div class="flex items-center justify-between p-6 border-b border-gray-100 dark:border-gray-800">
                <span class="font-serif font-bold text-gray-900 dark:text-white">Navigation</span>
                <button @click="closeMobile" class="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 rounded-md min-h-[44px] min-w-[44px] flex items-center justify-center" aria-label="Close menu">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
                </button>
              </div>
              <nav class="p-4 space-y-1" aria-label="Mobile navigation">
                <template v-for="item in mainNavigation" :key="item.path || item.title">
                  <RouterLink
                    v-if="!isParent(item)"
                    :to="item.path!"
                    class="flex items-center px-4 py-3 text-base font-medium rounded-lg transition-colors min-h-[44px]"
                    :class="[
                      isActive(item)
                        ? 'text-elf-blue dark:text-elf-blue bg-blue-50 dark:bg-navy-light'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-navy-light',
                    ]"
                    @click="closeMobile"
                  >
                    {{ item.title }}
                  </RouterLink>
                  <template v-else>
                    <p class="px-4 pt-3 pb-1 text-[0.65rem] font-mono font-semibold uppercase tracking-[0.15em] text-gray-400 dark:text-gray-500">{{ item.title }}</p>
                    <RouterLink
                      v-for="child in item.children"
                      :key="child.path"
                      :to="child.path!"
                      class="flex items-center pl-8 pr-4 py-2.5 text-[0.9rem] font-medium rounded-lg transition-colors min-h-[40px]"
                      :class="[
                        route.path === child.path
                          ? 'text-elf-blue dark:text-elf-blue bg-blue-50 dark:bg-navy-light'
                          : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-navy-light',
                      ]"
                      @click="closeMobile"
                    >
                      {{ child.title }}
                    </RouterLink>
                  </template>
                </template>
              </nav>
            </div>
          </Transition>
        </div>
      </Transition>
    </Teleport>
  </header>
</template>
