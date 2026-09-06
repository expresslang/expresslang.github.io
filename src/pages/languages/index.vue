<script setup lang="ts">
import AnimatedSection from '@/components/ui/AnimatedSection.vue'
import PageHero from '@/components/ui/PageHero.vue'
import languagesData from '@/data/languages.yaml'

const languages = languagesData as Array<{
  name: string
  slug: string
  color: string
  icon: string
  desc: string
  iso: string
  features: string[]
  history: string
}>
</script>

<template>
  <div>
    <PageHero
      eyebrow="Language Family"
      title="The EXPRESS Language Family"
      lead="A family of five complementary information modelling languages for industrial data exchange, smart manufacturing, and interoperability — standardized under ISO 10303."
      :crumbs="[{ label: 'Home', to: '/' }, { label: 'Languages' }]"
    />

    <!-- Language cards -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
      <div class="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        <AnimatedSection v-for="(lang, i) in languages" :key="lang.slug" :style="{ transitionDelay: `${i * 80}ms` }">
          <RouterLink :to="`/languages/${lang.slug}`" class="block rounded-xl border p-6 bg-white dark:bg-navy-light hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5" :style="{ borderColor: `${lang.color}33` }">
            <div class="flex items-center gap-3 mb-4">
              <img :src="lang.icon" :alt="lang.name" class="h-10 w-auto" />
              <div>
                <h3 class="font-[Montserrat,sans-serif] font-bold text-lg" :style="{ color: lang.color }">{{ lang.name }}</h3>
                <p class="text-[0.65rem] font-mono text-gray-400 dark:text-gray-500 tracking-wide">{{ lang.iso }}</p>
              </div>
            </div>
            <p class="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">{{ lang.desc }}</p>
            <p class="text-xs text-gray-400 dark:text-gray-500 leading-relaxed mb-4 italic">{{ lang.history }}</p>
            <ul class="space-y-1 mb-5">
              <li v-for="feat in lang.features" :key="feat" class="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                <span class="w-1 h-1 rounded-full shrink-0" :style="{ backgroundColor: lang.color }" />
                {{ feat }}
              </li>
            </ul>
            <span class="inline-flex items-center text-sm font-medium transition-colors" :style="{ color: lang.color }">
              Learn more
              <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
            </span>
          </RouterLink>
        </AnimatedSection>
      </div>

    </div>
  </div>
</template>
