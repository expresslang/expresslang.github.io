<script setup lang="ts">
import { siteData } from '@/data/site'
</script>

<template>
  <footer class="bg-gray-50 dark:bg-navy-light/50 border-t border-gray-200/60 dark:border-gray-800/60">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <!-- Organization -->
        <div class="sm:col-span-2 lg:col-span-1">
          <RouterLink to="/" class="flex items-center gap-2 mb-4 group">
            <svg viewBox="55 70 440 200" class="h-7 shrink-0 text-elf-blue dark:text-white" fill="currentColor" aria-hidden="true">
              <path d="M204.85 225.43h-60.72c-17.43 0-31.61-14.18-31.61-31.61v-11.86h64.53v-31.79h-64.53v-.3c0-17.43 14.18-31.61 31.61-31.61h82.73l31.48 36.03 23.23-21.73-26.3-30.11c-11.32-13.02-24.3-15.58-30.78-15.99h-80.36c-34.96 0-63.4 28.44-63.4 63.4v43.95c0 34.96 28.44 63.4 63.4 63.4h32.94l27.77-31.79z"/>
              <path d="M454.93 86.44h-73.72l-25.49-.01c-.77 0-1.58.13-2.34.23-6.7.85-17.54 3.98-27.35 14.61l-29.66 33.88 21.1 24.15 29.26-33.39c5.47-4.64 10.52-7.36 15.3-7.66l65.48-.02 27.42-31.79z"/>
              <path d="M413.54 257.56l27.41-31.78-77.98-.03-39.85-45.61-.04.04-68.9-78.87c-11.05-11.98-23.42-14.44-29.69-14.84h-25.49l67.64 77.42.04-.04 68.9 78.87c11.06 11.98 23.42 14.44 29.69 14.84h25.49l-.02-.02 22.8.02z"/>
              <path d="M257.12 180.18l-.04-.04-67.64 77.42h25.49c5.39 0 18.64-2.86 29.69-14.84l39.94-45-21.08-24.13-6.35 6.59z"/>
            </svg>
            <div class="flex flex-col leading-none">
              <span class="font-logo font-bold text-[0.8rem] tracking-[0.06em] text-elf-blue dark:text-white">EXPRESS</span>
              <span class="font-logo font-medium text-[0.5rem] tracking-[0.1em] text-elf-blue/70 dark:text-gray-400 mt-[2px]">Language Foundation</span>
            </div>
          </RouterLink>
          <p class="text-sm text-gray-500 dark:text-gray-400 leading-relaxed max-w-xs">
            International standards for information modelling, abstract languages and data management.
          </p>
          <div class="flex items-center gap-3 mt-5">
            <a :href="siteData.github" target="_blank" rel="noopener" class="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors rounded-md" aria-label="GitHub">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
            </a>
            <a :href="`mailto:${siteData.email}`" class="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors rounded-md" aria-label="Email">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
            </a>
          </div>
        </div>

        <!-- Languages -->
        <div>
          <h3 class="font-mono text-xs font-semibold tracking-[0.15em] uppercase text-gray-400 dark:text-gray-500 mb-4">Languages</h3>
          <ul class="space-y-2.5 text-sm">
            <li><RouterLink to="/languages#express" class="text-gray-600 dark:text-gray-400 hover:text-elf-blue dark:hover:text-elf-blue transition-colors">EXPRESS</RouterLink></li>
            <li><RouterLink to="/languages#express-g" class="text-gray-600 dark:text-gray-400 hover:text-elf-blue dark:hover:text-elf-blue transition-colors">EXPRESS-G</RouterLink></li>
            <li><RouterLink to="/languages#express-i" class="text-gray-600 dark:text-gray-400 hover:text-elf-blue dark:hover:text-elf-blue transition-colors">EXPRESS-I</RouterLink></li>
            <li><RouterLink to="/languages#express-x" class="text-gray-600 dark:text-gray-400 hover:text-elf-blue dark:hover:text-elf-blue transition-colors">EXPRESS-X</RouterLink></li>
          </ul>
        </div>

        <!-- Resources -->
        <div>
          <h3 class="font-mono text-xs font-semibold tracking-[0.15em] uppercase text-gray-400 dark:text-gray-500 mb-4">Resources</h3>
          <ul class="space-y-2.5 text-sm">
            <li><RouterLink to="/learn" class="text-gray-600 dark:text-gray-400 hover:text-elf-blue dark:hover:text-elf-blue transition-colors">Learn EXPRESS</RouterLink></li>
            <li><RouterLink to="/standards" class="text-gray-600 dark:text-gray-400 hover:text-elf-blue dark:hover:text-elf-blue transition-colors">Standards &amp; References</RouterLink></li>
            <li><RouterLink to="/blog" class="text-gray-600 dark:text-gray-400 hover:text-elf-blue dark:hover:text-elf-blue transition-colors">Blog</RouterLink></li>
          </ul>
        </div>

        <!-- Organization -->
        <div>
          <h3 class="font-mono text-xs font-semibold tracking-[0.15em] uppercase text-gray-400 dark:text-gray-500 mb-4">Organization</h3>
          <ul class="space-y-2.5 text-sm">
            <li><RouterLink to="/about" class="text-gray-600 dark:text-gray-400 hover:text-elf-blue dark:hover:text-elf-blue transition-colors">About</RouterLink></li>
            <li><RouterLink to="/leadership" class="text-gray-600 dark:text-gray-400 hover:text-elf-blue dark:hover:text-elf-blue transition-colors">Leadership</RouterLink></li>
            <li><RouterLink to="/membership" class="text-gray-600 dark:text-gray-400 hover:text-elf-blue dark:hover:text-elf-blue transition-colors">Membership</RouterLink></li>
            <li><RouterLink to="/blog" class="text-gray-600 dark:text-gray-400 hover:text-elf-blue dark:hover:text-elf-blue transition-colors">Blog</RouterLink></li>
            <li><RouterLink to="/privacy" class="text-gray-600 dark:text-gray-400 hover:text-elf-blue dark:hover:text-elf-blue transition-colors">Privacy</RouterLink></li>
            <li><RouterLink to="/tos" class="text-gray-600 dark:text-gray-400 hover:text-elf-blue dark:hover:text-elf-blue transition-colors">Terms of Service</RouterLink></li>
          </ul>
        </div>
      </div>

      <div class="mt-12 pt-8 border-t border-gray-200/60 dark:border-gray-800/60 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-400 dark:text-gray-500">
        <p>&copy; {{ new Date().getFullYear() }} {{ siteData.legal.name }}. All rights reserved.</p>
        <p class="font-mono tracking-wide">
          <a href="https://iso.org/standard/64741.html" target="_blank" rel="noopener" class="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">ISO 10303</a>
          <span class="mx-2 text-gray-300 dark:text-gray-600">|</span>
          <span>The EXPRESS language family</span>
        </p>
      </div>
    </div>
  </footer>
</template>
