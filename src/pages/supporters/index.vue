<script setup lang="ts">
import AnimatedSection from '@/components/ui/AnimatedSection.vue'

interface Supporter {
  name: string
  logo: string
  url: string
  desc: string
}

const supporters: Supporter[] = [
  {
    name: 'Boeing',
    logo: '/images/supporters/supporter-boeing.png',
    url: 'https://www.boeing.com',
    desc: 'Associate Technical Fellows contributing to ISO TC 184/SC 4 working groups on visualization and data exchange standards.',
  },
  {
    name: 'McDonnell Douglas',
    logo: '/images/supporters/supporter-md.png',
    url: 'https://www.boeing.com',
    desc: 'Birthplace of EXPRESS — conceived during the PDDI program in 1982 by Douglas Schenck at McDonnell Aircraft (later McDonnell Douglas).',
  },
  {
    name: 'General Electric',
    logo: '/images/supporters/supporter-ge.png',
    url: 'https://www.ge.com',
    desc: 'Early contributor to STEP standardization and industrial data exchange standards development.',
  },
  {
    name: 'NIST',
    logo: '/images/supporters/supporter-nist.png',
    url: 'https://www.nist.gov',
    desc: 'National Institute of Standards and Technology — proposed EXPRESS as an International Standard at ISO and led STEP development since inception.',
  },
  {
    name: 'STEP Tools',
    logo: '/images/supporters/supporter-steptools.svg',
    url: 'https://www.steptools.com',
    desc: 'Co-founded by David Loffredo. Developed software deployed in over a million CAD seats. Editor of ISO 10303-238 (STEP-NC) and Part 21.',
  },
  {
    name: 'Jotne EPM Technology',
    logo: '/images/supporters/supporter-jotneconnect.jpeg',
    url: 'https://www.jotne.com/epm',
    desc: 'Developer of the EDMvisualExpress tool and EXPRESS Data Manager. Contributed the EDMsdk course materials to ELF.',
  },
  {
    name: 'Ribose',
    logo: '/images/supporters/supporter-ribose.svg',
    url: 'https://www.ribose.com',
    desc: 'Provided operational and administrative support for the establishment and ongoing operations of the EXPRESS Language Foundation.',
  },
]
</script>

<template>
  <div>
    <!-- Hero -->
    <div class="bg-gradient-to-b from-slate-50 to-white dark:from-navy dark:to-navy-light/30 pt-12 pb-16">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <p class="font-mono text-xs tracking-[0.2em] uppercase text-elf-blue dark:text-elf-blue mb-3">Community</p>
        <h1 class="text-3xl sm:text-4xl font-serif font-bold text-gray-900 dark:text-white">Supporters</h1>
        <p class="mt-4 text-gray-500 dark:text-gray-400 max-w-2xl leading-relaxed">
          The organizations whose employees have contributed to the development, standardization,
          and promotion of the EXPRESS language family — and to the establishment of the EXPRESS Language Foundation.
        </p>
      </div>
    </div>

    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatedSection v-for="(supporter, i) in supporters" :key="supporter.name" :style="{ transitionDelay: `${i * 60}ms` }">
          <div class="rounded-xl border border-gray-200/80 dark:border-gray-700/60 bg-white dark:bg-navy-light p-6 h-full flex flex-col">
            <div class="mb-4 h-14 flex items-center">
              <img :src="supporter.logo" :alt="supporter.name" class="max-h-12 w-auto opacity-70 dark:opacity-80" />
            </div>
            <h3 class="font-serif font-bold text-lg text-gray-900 dark:text-white">{{ supporter.name }}</h3>
            <p class="mt-2 text-sm text-gray-500 dark:text-gray-400 leading-relaxed flex-1">{{ supporter.desc }}</p>
            <a
              :href="supporter.url"
              target="_blank"
              rel="noopener"
              class="mt-4 inline-flex items-center text-xs font-medium text-elf-blue dark:text-elf-blue hover:underline"
            >
              Visit website
              <svg class="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
            </a>
          </div>
        </AnimatedSection>
      </div>
    </div>
  </div>
</template>
