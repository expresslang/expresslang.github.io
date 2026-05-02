<script setup lang="ts">
import AnimatedSection from '@/components/ui/AnimatedSection.vue'
import BaseCard from '@/components/ui/BaseCard.vue'

const standards = [
  { iso: 'ISO 10303-11', title: 'EXPRESS Language', desc: 'The core information modelling language for defining data schemas, entities, types, and constraints. Edition 2 published 2004.' },
  { iso: 'ISO 10303-12', title: 'EXPRESS-I', desc: 'Instance definition language for populated data models and conformance test cases.' },
  { iso: 'ISO 10303-14', title: 'EXPRESS-X', desc: 'Schema mapping language for defining transformations between different EXPRESS schemas.' },
  { iso: 'ELF Spec', title: 'EXPRESS-Q', desc: 'Query language for defining mappings between ARM and MIM schemas with reference path syntax. Published by the EXPRESS Language Foundation.' },
  { iso: 'ISO 10303-21', title: 'STEP Physical File', desc: 'Clear-text encoding of product data (Part 21 file format). The most widely deployed STEP exchange format.' },
  { iso: 'ISO 10303-28', title: 'STEP XML Binding', desc: 'XML representation of EXPRESS-driven data for web-based exchange.' },
]

const bnfFiles = [
  { file: 'iso-10303-11-2004.bnf', title: 'EXPRESS Language', edition: 'ISO 10303-11:2004', desc: 'Complete EXPRESS lexical language grammar' },
  { file: 'iso-10303-11-2004-raw.bnf', title: 'EXPRESS Language (Raw)', edition: 'ISO 10303-11:2004', desc: 'Raw BNF without annotations' },
  { file: 'iso-10303-14.bnf', title: 'EXPRESS-X', edition: 'ISO 10303-14', desc: 'Schema mapping language grammar' },
  { file: 'iso-10303-14-raw.bnf', title: 'EXPRESS-X (Raw)', edition: 'ISO 10303-14', desc: 'Raw BNF without annotations' },
  { file: 'iso-10303-21-1994.bnf', title: 'STEP Physical File', edition: 'ISO 10303-21:1994', desc: 'Part 21 file format grammar, edition 1' },
  { file: 'iso-10303-21-2002.bnf', title: 'STEP Physical File', edition: 'ISO 10303-21:2002', desc: 'Part 21 file format grammar, edition 2' },
  { file: 'iso-10303-patch-schema.bnf', title: 'Patch Schema Extension', edition: 'Extension', desc: 'BNF for DELETE and RENAME schema modifications' },
]

const references = [
  { title: 'Information modeling: the EXPRESS Way', authors: 'Douglas Schenck, Peter Wilson', publisher: 'Oxford University Press, 1994', url: 'https://global.oup.com/academic/product/information-modeling-the-express-way-9780195087147' },
  { title: 'STEP: An Introduction', authors: 'Jon Owen', publisher: 'Information Geometers, 1993', url: '' },
  { title: 'Express Metamodel, version 1.1', authors: 'Object Management Group', publisher: 'OMG, 2015', url: 'https://www.omg.org/spec/EXPRESS/' },
]
</script>

<template>
  <div>
    <!-- Hero -->
    <div class="bg-gradient-to-b from-slate-50 to-white dark:from-navy dark:to-navy-light/30 pt-12 pb-12">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <p class="font-mono text-xs tracking-[0.2em] uppercase text-elf-blue dark:text-elf-blue mb-3">Specifications</p>
        <h1 class="text-3xl sm:text-4xl font-serif font-bold text-gray-900 dark:text-white">Standards &amp; References</h1>
        <p class="mt-3 text-gray-500 dark:text-gray-400 max-w-xl">
          ISO 10303 standards, BNF grammar references, and key publications for the EXPRESS language family.
        </p>
      </div>
    </div>

    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
      <!-- ISO Standards -->
      <section class="mb-16">
        <h2 class="text-xl font-serif font-bold text-gray-900 dark:text-white mb-6">ISO 10303 Standards</h2>
        <p class="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
          The EXPRESS language family is defined within ISO 10303 (STEP — Standard for the Exchange of Product model data).
        </p>
        <div class="space-y-4">
          <AnimatedSection v-for="(std, i) in standards" :key="std.iso" :style="{ transitionDelay: `${i * 50}ms` }">
            <div class="flex items-start gap-4 p-5 rounded-xl border border-gray-200/80 dark:border-gray-700/60 bg-white dark:bg-navy-light">
              <div class="shrink-0 w-20 text-center">
                <span class="font-mono text-[0.65rem] font-bold text-elf-blue dark:text-elf-blue tracking-wide">{{ std.iso }}</span>
              </div>
              <div>
                <h3 class="font-serif font-bold text-gray-900 dark:text-white">{{ std.title }}</h3>
                <p class="mt-1 text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{{ std.desc }}</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <!-- BNF Grammars -->
      <section class="mb-16">
        <h2 class="text-xl font-serif font-bold text-gray-900 dark:text-white mb-2">BNF Grammars</h2>
        <p class="text-sm text-gray-500 dark:text-gray-400 mb-8">Download formal grammar definitions for each standard.</p>
        <div class="space-y-3">
          <AnimatedSection v-for="(bnf, i) in bnfFiles" :key="bnf.file" :style="{ transitionDelay: `${i * 40}ms` }">
            <a
              :href="`/bnf/${bnf.file}`"
              class="flex items-center justify-between p-4 rounded-xl border border-gray-200/80 dark:border-gray-700/60 bg-white dark:bg-navy-light hover:border-elf-blue/30 dark:hover:border-elf-blue/30 hover:shadow-md transition-all duration-200"
            >
              <div class="min-w-0">
                <h3 class="font-semibold text-gray-900 dark:text-white text-sm">{{ bnf.title }}</h3>
                <p class="text-xs text-gray-400 dark:text-gray-500 mt-0.5">
                  <span class="font-mono">{{ bnf.edition }}</span>
                  <span class="mx-1.5 text-gray-300 dark:text-gray-600">&middot;</span>
                  {{ bnf.desc }}
                </p>
              </div>
              <svg class="w-5 h-5 text-gray-400 shrink-0 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
            </a>
          </AnimatedSection>
        </div>
      </section>

      <!-- Key References -->
      <section>
        <h2 class="text-xl font-serif font-bold text-gray-900 dark:text-white mb-2">Key References</h2>
        <p class="text-sm text-gray-500 dark:text-gray-400 mb-8">Essential publications on the EXPRESS language family.</p>
        <div class="space-y-4">
          <AnimatedSection v-for="(ref, i) in references" :key="ref.title" :style="{ transitionDelay: `${i * 50}ms` }">
            <component
              :is="ref.url ? 'a' : 'div'"
              :href="ref.url || undefined"
              :target="ref.url ? '_blank' : undefined"
              :rel="ref.url ? 'noopener' : undefined"
              class="flex items-start gap-4 p-5 rounded-xl border border-gray-200/80 dark:border-gray-700/60 bg-white dark:bg-navy-light hover:border-elf-blue/30 dark:hover:border-elf-blue/30 hover:shadow-md transition-all duration-200"
            >
              <div class="shrink-0">
                <div class="w-10 h-10 rounded-lg bg-elf-blue/8 dark:bg-elf-blue/8 flex items-center justify-center">
                  <svg class="w-5 h-5 text-elf-blue dark:text-elf-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>
                </div>
              </div>
              <div>
                <h3 class="font-serif font-bold text-gray-900 dark:text-white">{{ ref.title }}</h3>
                <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">{{ ref.authors }}</p>
                <p class="text-xs text-gray-400 dark:text-gray-500 mt-0.5">{{ ref.publisher }}</p>
              </div>
            </component>
          </AnimatedSection>
        </div>
      </section>
    </div>
  </div>
</template>
