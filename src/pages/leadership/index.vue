<script setup lang="ts">
import AnimatedSection from '@/components/ui/AnimatedSection.vue'
import PageHero from '@/components/ui/PageHero.vue'
import peopleData from '@/data/people.yaml'

interface Person {
  name: string
  slug: string
  role: string
  blurb: string
  highlight?: string
  photo?: string
  officer?: number
  founder?: number
}

const people = peopleData as Person[]

const byRank = (key: 'officer' | 'founder') =>
  people.filter((p) => p[key] != null).sort((a, b) => a[key]! - b[key]!)

const officers = byRank('officer')
const founders = byRank('founder')
</script>

<template>
  <div>
    <PageHero
      eyebrow="Organization"
      title="Leadership & Founders"
      lead="The EXPRESS Language Foundation is led by a team that includes the original inventors of EXPRESS, experts who guided its standardization at ISO, and stakeholders dedicated to the language family's future."
      :crumbs="[{ label: 'Home', to: '/' }, { label: 'Leadership' }]"
    />

    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
      <!-- Officers -->
      <section class="mb-20">
        <AnimatedSection>
          <h2 class="text-xl font-serif font-bold text-gray-900 dark:text-white mb-8">Officers</h2>
        </AnimatedSection>
        <div class="grid md:grid-cols-3 gap-6">
          <AnimatedSection v-for="(person, i) in officers" :key="person.slug" :style="{ transitionDelay: `${i * 80}ms` }">
            <RouterLink :to="`/people/${person.slug}`" class="block rounded-xl border border-gray-200/80 dark:border-gray-700/60 bg-white dark:bg-navy-light p-6 transition-all duration-200 hover:border-elf-blue/30 dark:hover:border-elf-blue/30 hover:shadow-lg hover:-translate-y-0.5">
              <div v-if="person.photo" class="w-14 h-14 rounded-full overflow-hidden mb-4">
                <img :src="person.photo" :alt="person.name" width="56" height="56" decoding="async" class="w-full h-full object-cover" />
              </div>
              <div v-else class="w-14 h-14 rounded-full bg-elf-blue/8 dark:bg-elf-blue/8 flex items-center justify-center mb-4">
                <span class="text-xl font-serif font-bold text-elf-blue dark:text-elf-blue">{{ person.name.charAt(0) }}</span>
              </div>
              <h3 class="font-serif font-bold text-lg text-gray-900 dark:text-white">{{ person.name }}</h3>
              <p class="font-mono text-xs text-elf-blue dark:text-elf-blue tracking-wide mt-1">{{ person.role }}</p>
              <p v-if="person.highlight" class="text-[0.65rem] font-mono text-amber-600 dark:text-amber-400 mt-1">{{ person.highlight }}</p>
              <p class="mt-3 text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{{ person.blurb }}</p>
            </RouterLink>
          </AnimatedSection>
        </div>
      </section>

      <!-- Founders -->
      <section>
        <AnimatedSection>
          <h2 class="text-xl font-serif font-bold text-gray-900 dark:text-white mb-2">Founders</h2>
          <p class="text-sm text-gray-500 dark:text-gray-400 mb-8">The founders include the original inventors of EXPRESS, experts who enhanced it, and stakeholders deeply committed to the foundation's mission.</p>
        </AnimatedSection>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          <AnimatedSection v-for="(person, i) in founders" :key="person.slug" :style="{ transitionDelay: `${i * 60}ms` }">
            <RouterLink :to="`/people/${person.slug}`" class="block rounded-xl border border-gray-200/80 dark:border-gray-700/60 bg-white dark:bg-navy-light p-5 transition-all duration-200 hover:border-elf-blue/30 dark:hover:border-elf-blue/30 hover:shadow-md hover:-translate-y-0.5 h-full">
              <div v-if="person.photo" class="w-10 h-10 rounded-full overflow-hidden mb-3">
                <img :src="person.photo" :alt="person.name" width="40" height="40" loading="lazy" decoding="async" class="w-full h-full object-cover" />
              </div>
              <div v-else class="w-10 h-10 rounded-full bg-elf-blue/8 dark:bg-elf-blue/8 flex items-center justify-center mb-3">
                <span class="text-base font-serif font-bold text-elf-blue dark:text-elf-blue">{{ person.name.charAt(0) }}</span>
              </div>
              <h3 class="font-serif font-bold text-gray-900 dark:text-white">{{ person.name }}</h3>
              <p class="font-mono text-[0.65rem] text-elf-blue dark:text-elf-blue tracking-wide mt-0.5">{{ person.role }}</p>
              <p v-if="person.highlight" class="text-[0.65rem] font-mono text-amber-600 dark:text-amber-400 mt-1">{{ person.highlight }}</p>
              <p class="mt-2 text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{{ person.blurb }}</p>
            </RouterLink>
          </AnimatedSection>
        </div>
      </section>
    </div>
  </div>
</template>
