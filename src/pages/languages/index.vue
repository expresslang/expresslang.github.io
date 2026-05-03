<script setup lang="ts">
import AnimatedSection from '@/components/ui/AnimatedSection.vue'

const languages = [
  {
    name: 'EXPRESS',
    id: 'express',
    slug: 'express',
    color: '#e99262',
    icon: '/logos/logo-lang-icon-express.svg',
    desc: 'The core information modelling language for defining data schemas, entities, types, functions, and constraints. Used across industrial data exchange and product lifecycle management.',
    iso: 'ISO 10303-11:2004',
    features: ['Entity declarations', 'Inheritance hierarchies', 'WHERE rules', 'FUNCTION / PROCEDURE', 'ENUMERATION / SELECT types'],
    history: 'Originated in 1982 from the PDDI program at McDonnell Aircraft, invented by Douglas Schenck.',
  },
  {
    name: 'EXPRESS-G',
    id: 'express-g',
    slug: 'express-g',
    color: '#4ec0aa',
    icon: '/logos/logo-lang-icon-expressg.svg',
    desc: 'Graphical notation for EXPRESS models — entity-relationship style diagrams for visual representation, communication, and documentation of data models.',
    iso: 'ISO 10303-11:2004',
    features: ['Entity type symbols', 'Relationship lines', 'Subtype/supertype', 'Attribute annotations', 'Schema diagrams'],
    history: 'Designed by Peter Wilson as a visual companion to EXPRESS.',
  },
  {
    name: 'EXPRESS-I',
    id: 'express-i',
    slug: 'express-i',
    color: '#d85577',
    icon: '/logos/logo-lang-icon-expressi.svg',
    desc: 'Instance language for defining populated data models and conformance test cases against EXPRESS schemas.',
    iso: 'ISO 10303-12',
    features: ['Instance definitions', 'Population data', 'Conformance testing', 'Validation test cases', 'Schema conformance'],
    history: 'Developed for conformance testing of STEP implementations.',
  },
  {
    name: 'EXPRESS-X',
    id: 'express-x',
    slug: 'express-x',
    color: '#077783',
    icon: '/logos/logo-lang-icon-expressx.svg',
    desc: 'Schema mapping language for defining transformations between different EXPRESS schemas — supporting 1:1, 1:n, n:1, and n:n cardinalities.',
    iso: 'ISO 10303-14',
    features: ['SCHEMA_MAP declarations', 'MAP / COMPOSE', 'FROM / WHEN clauses', 'GLOBAL declarations', 'Source-to-target mapping'],
    history: 'Designed by Peter Wilson for schema interoperability.',
  },
  {
    name: 'EXPRESS-Q',
    id: 'express-q',
    slug: 'express-q',
    color: '#ed1c24',
    icon: '/logos/logo-lang-icon-expressq.svg',
    desc: 'Query language for defining mappings between Application Reference Model (ARM) and Model Implementation Model (MIM) schemas, with reference path syntax for precise schema navigation.',
    iso: 'ELF Specification',
    features: ['ENTITY_MAPPING declarations', 'ATTRIBUTE_MAPPING definitions', 'Reference path syntax', 'EXPRESS links', 'YAML serialization'],
    history: 'Developed alongside EXPRESS-X for ARM-to-MIM schema mapping.',
  },
]
</script>

<template>
  <div>
    <!-- Hero section -->
    <div class="bg-gradient-to-b from-slate-50 to-white dark:from-navy dark:to-navy-light/30 pt-12 pb-16">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <p class="font-mono text-xs tracking-[0.2em] uppercase text-elf-blue dark:text-elf-blue mb-3">Language Family</p>
        <h1 class="text-3xl sm:text-4xl font-serif font-bold text-gray-900 dark:text-white leading-tight">The EXPRESS Language Family</h1>
        <p class="mt-4 text-lg text-gray-500 dark:text-gray-400 max-w-2xl">
          A family of five complementary information modelling languages for industrial data exchange, smart manufacturing, and interoperability — standardized under ISO 10303.
        </p>
      </div>
    </div>

    <!-- Language cards -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
      <div class="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        <AnimatedSection v-for="(lang, i) in languages" :key="lang.id" :style="{ transitionDelay: `${i * 80}ms` }">
          <div :class="['rounded-xl border p-6 bg-white dark:bg-navy-light hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5']" :style="{ borderColor: `${lang.color}33` }">
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
            <RouterLink :to="`/languages/${lang.slug}`" class="inline-flex items-center text-sm font-medium transition-colors hover:underline" :style="{ color: lang.color }">
              Learn more
              <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
            </RouterLink>
          </div>
        </AnimatedSection>
      </div>

    </div>
  </div>
</template>
