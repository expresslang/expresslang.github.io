<script setup lang="ts">
import { learnNavigation, courseNavigation } from '@/data/navigation'
import AnimatedSection from '@/components/ui/AnimatedSection.vue'
import BaseCard from '@/components/ui/BaseCard.vue'
</script>

<template>
  <div>
    <!-- Hero -->
    <div class="bg-gradient-to-b from-slate-50 to-white dark:from-navy dark:to-navy-light/30 pt-12 pb-16">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav class="text-sm text-gray-400 dark:text-gray-500 mb-6 flex items-center gap-1.5">
          <RouterLink to="/" class="hover:text-elf-blue dark:hover:text-elf-blue transition-colors">Home</RouterLink>
          <span>/</span>
          <span class="text-gray-700 dark:text-gray-300">Learn</span>
        </nav>
        <p class="font-mono text-xs tracking-[0.2em] uppercase text-elf-blue dark:text-elf-blue mb-3">Learning</p>
        <h1 class="text-3xl sm:text-4xl font-serif font-bold text-gray-900 dark:text-white">Learn EXPRESS</h1>
        <p class="mt-4 text-gray-500 dark:text-gray-400 max-w-xl leading-relaxed">
          Two complementary courses from leading authorities in the EXPRESS community — one covering the language itself, the other covering the broader ISO 10303 ecosystem and its practical applications.
        </p>
      </div>
    </div>

    <!-- Course cards -->
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
      <div class="grid md:grid-cols-2 gap-8 -mt-8">
        <AnimatedSection>
          <BaseCard to="/learn/tutorial/express-01-what-is-information" padding="lg">
            <div class="w-12 h-12 rounded-xl bg-elf-blue/8 dark:bg-elf-blue/8 flex items-center justify-center mb-5">
              <svg class="w-6 h-6 text-elf-blue dark:text-elf-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>
            </div>
            <h2 class="font-serif font-bold text-xl text-gray-900 dark:text-white mb-2">EXPRESS Language Reference Course</h2>
            <p class="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-3">
              The authoritative course on the EXPRESS language — from the co-inventor of EXPRESS-G and EXPRESS-X. Covers syntax, semantics, modelling patterns, rules, and practical exercises.
            </p>
            <p class="text-xs text-gray-400 dark:text-gray-500 italic mb-4">By Peter Wilson, co-author of <em class="italic">Information Modelling: The EXPRESS Way</em></p>
            <p class="text-xs font-mono text-gray-400 dark:text-gray-500 mb-3">{{ learnNavigation.length }} modules</p>
            <div class="flex items-center gap-2">
              <img src="/logos/logo-lang-icon-express.svg" alt="EXPRESS" title="EXPRESS" class="h-6 w-auto" />
              <img src="/logos/logo-lang-icon-expressg.svg" alt="EXPRESS-G" title="EXPRESS-G" class="h-6 w-auto" />
            </div>
          </BaseCard>
        </AnimatedSection>

        <AnimatedSection :style="{ transitionDelay: '80ms' }">
          <BaseCard to="/learn/jotne-express/01-intro-iso-10303" padding="lg">
            <div class="w-12 h-12 rounded-xl bg-elf-blue/8 dark:bg-elf-blue/8 flex items-center justify-center mb-5">
              <svg class="w-6 h-6 text-elf-blue dark:text-elf-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/></svg>
            </div>
            <h2 class="font-serif font-bold text-xl text-gray-900 dark:text-white mb-2">EXPRESS &amp; STEP in Practice</h2>
            <p class="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-3">
              The applied course on the ISO 10303 ecosystem — STEP file formats, data validation, schema querying, business rules, SDAI programming, and PLCS. Assumes basic EXPRESS knowledge.
            </p>
            <p class="text-xs text-gray-400 dark:text-gray-500 italic mb-4">Contributed by Jotne EPM Technology</p>
            <p class="text-xs font-mono text-gray-400 dark:text-gray-500 mb-3">{{ courseNavigation.length }} modules</p>
            <div class="flex items-center gap-2">
              <img src="/logos/logo-lang-icon-express.svg" alt="EXPRESS" title="EXPRESS" class="h-6 w-auto" />
              <img src="/logos/logo-lang-icon-expressg.svg" alt="EXPRESS-G" title="EXPRESS-G" class="h-6 w-auto" />
              <img src="/logos/logo-lang-icon-expressx.svg" alt="EXPRESS-X" title="EXPRESS-X" class="h-6 w-auto" />
            </div>
          </BaseCard>
        </AnimatedSection>
      </div>
    </div>

    <!-- EXPRESS Language Reference Course listing -->
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
      <AnimatedSection>
        <h2 class="font-serif font-bold text-2xl text-gray-900 dark:text-white mb-2">EXPRESS Language Reference Course</h2>
        <p class="text-sm text-gray-500 dark:text-gray-400 mb-6">By <span class="font-semibold">Peter Wilson</span> — co-inventor of EXPRESS-G and EXPRESS-X, co-author of <em class="italic">Information Modelling: The EXPRESS Way</em></p>
      </AnimatedSection>

      <div class="space-y-3">
        <AnimatedSection v-for="(item, idx) in learnNavigation" :key="item.slug" :style="{ transitionDelay: `${idx * 50}ms` }">
          <BaseCard :to="`/learn/tutorial/${item.slug}`" padding="md">
            <div class="flex items-center gap-4">
              <span class="w-9 h-9 rounded-lg bg-elf-blue/8 dark:bg-elf-blue/8 flex items-center justify-center font-mono text-xs font-bold text-elf-blue dark:text-elf-blue shrink-0">
                {{ String(idx + 1).padStart(2, '0') }}
              </span>
              <h3 class="font-serif font-semibold text-gray-900 dark:text-white group-hover:text-elf-blue dark:group-hover:text-elf-blue transition-colors">
                {{ item.title }}
              </h3>
            </div>
          </BaseCard>
        </AnimatedSection>
      </div>
    </div>

    <!-- EXPRESS & STEP in Practice listing -->
    <div class="bg-gray-50 dark:bg-navy-light/30 py-16">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <h2 class="font-serif font-bold text-2xl text-gray-900 dark:text-white mb-2">EXPRESS &amp; STEP in Practice</h2>
          <p class="text-sm text-gray-500 dark:text-gray-400 mb-6">Contributed by <span class="font-semibold">Jotne EPM Technology</span> — 15 modules covering the ISO 10303 ecosystem beyond the core language</p>
        </AnimatedSection>

        <div class="space-y-3">
          <AnimatedSection v-for="(item, i) in courseNavigation" :key="item.slug" :style="{ transitionDelay: `${i * 30}ms` }">
            <BaseCard :to="`/learn/jotne-express/${item.slug}`" padding="md">
              <div class="flex items-center gap-4">
                <span class="w-9 h-9 rounded-lg bg-elf-blue/8 dark:bg-elf-blue/8 flex items-center justify-center font-mono text-xs font-bold text-elf-blue dark:text-elf-blue shrink-0">
                  {{ String(i + 1).padStart(2, '0') }}
                </span>
                <h3 class="font-serif font-semibold text-gray-900 dark:text-white group-hover:text-elf-blue dark:group-hover:text-elf-blue transition-colors">
                  {{ item.title }}
                </h3>
              </div>
            </BaseCard>
          </AnimatedSection>
        </div>
      </div>
    </div>
  </div>
</template>
