<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { siteData } from '@/data/site'
import { useContentList, type ContentData } from '@/composables/useContent'
import AnimatedSection from '@/components/ui/AnimatedSection.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import BaseCard from '@/components/ui/BaseCard.vue'

const posts = await useContentList('posts')

function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
}

const heroPairs = [
  {
    slogan: 'smart manufacturing',
    filename: 'part_schema.exp',
    code: 'SCHEMA Part_Management;\nENTITY part;\n    id : STRING;\n    material : REAL;\n    mass : MEASURE_VALUE;\nEND_ENTITY;\nEND_SCHEMA;',
  },
  {
    slogan: 'digital twins',
    filename: 'product_twins.exp',
    code: 'SCHEMA Digital_Twin;\nENTITY product;\n    serial_no : STRING;\n    geometry : shape_representation;\n    status : operational_state;\nEND_ENTITY;\nEND_SCHEMA;',
  },
  {
    slogan: '3D design',
    filename: 'geometry.exp',
    code: 'SCHEMA Geometry;\nENTITY point;\n    x, y, z : REAL;\nEND_ENTITY;\nENTITY line;\n    start, end : point;\nEND_ENTITY;\nEND_SCHEMA;',
  },
  {
    slogan: 'data exchange',
    filename: 'step_exchange.exp',
    code: 'SCHEMA Data_Exchange;\nENTITY transfer_record;\n    schema_id : STRING;\n    timestamp : date_time;\n    payload : LIST OF entity_instance;\nEND_ENTITY;\nEND_SCHEMA;',
  },
  {
    slogan: 'interoperability',
    filename: 'assembly.exp',
    code: 'SCHEMA Assembly;\nENTITY assembly;\n    components : LIST [1:?] OF part;\nEND_ENTITY;\nENTITY part;\n    id, name : STRING;\nEND_ENTITY;\nEND_SCHEMA;',
  },
]

const pairIndex = ref(0)
const typedText = ref(heroPairs[0].code)
let typeTimer: ReturnType<typeof setInterval> | null = null
let pairTimer: ReturnType<typeof setInterval> | null = null

function startTyping() {
  if (typeTimer) clearInterval(typeTimer)
  const fullText = heroPairs[pairIndex.value].code
  let i = 0
  typedText.value = ''
  typeTimer = setInterval(() => {
    if (i < fullText.length) {
      typedText.value += fullText[i]
      i++
    } else {
      if (typeTimer) clearInterval(typeTimer)
    }
  }, 22)
}

onMounted(() => {
  pairTimer = setInterval(() => {
    pairIndex.value = (pairIndex.value + 1) % heroPairs.length
    startTyping()
  }, 7000)
})

onUnmounted(() => {
  if (pairTimer) clearInterval(pairTimer)
  if (typeTimer) clearInterval(typeTimer)
})

const languages = [
  {
    name: 'EXPRESS',
    slug: 'express',
    color: '#e99262',
    icon: '/logos/logo-lang-icon-express.svg',
    desc: 'The core data modelling language — entities, types, constraints, and rules for defining information schemas.',
    iso: 'ISO 10303-11',
    invented: '1982',
  },
  {
    name: 'EXPRESS-G',
    slug: 'express-g',
    color: '#4ec0aa',
    icon: '/logos/logo-lang-icon-expressg.svg',
    desc: 'Graphical notation for EXPRESS — entity-relationship diagrams for visual data modelling.',
    iso: 'ISO 10303-11',
    invented: '1980s',
  },
  {
    name: 'EXPRESS-I',
    slug: 'express-i',
    color: '#d85577',
    icon: '/logos/logo-lang-icon-expressi.svg',
    desc: 'Instance definition language for populated data models and conformance testing.',
    iso: 'ISO 10303-12',
    invented: '1994',
  },
  {
    name: 'EXPRESS-X',
    slug: 'express-x',
    color: '#077783',
    icon: '/logos/logo-lang-icon-expressx.svg',
    desc: 'Schema mapping language for defining transformations between different EXPRESS data models.',
    iso: 'ISO 10303-14',
    invented: '2001',
  },
  {
    name: 'EXPRESS-Q',
    slug: 'express-q',
    color: '#7c5cbf',
    icon: '/logos/logo-lang-icon-expressq.svg',
    desc: 'Query language for defining mappings between ARM and MIM schemas with reference path syntax.',
    iso: 'ELF Specification',
    invented: '2001',
  },
]

const milestones = [
  { year: '1982', event: 'EXPRESS conceived during the PDDI program at McDonnell Aircraft' },
  { year: '1986', event: 'Proposed as an International Standard at ISO by NBS (now NIST)' },
  { year: '1994', event: 'ISO 10303-11 published by Schenck & Wenzel; reference manual by Schenck & Wilson' },
  { year: '2004', event: 'EXPRESS Edition 2 (ISO 10303-11:2004) with Loffredo & Wilson' },
  { year: '2022', event: 'EXPRESS Language Foundation established as a 501(c)(3) public charity' },
]
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white dark:from-navy dark:to-navy-light/30">
      <div class="absolute inset-0 pointer-events-none">
        <div class="absolute top-20 right-[10%] w-[500px] h-[500px] rounded-full bg-elf-blue/[0.03] dark:bg-elf-blue/[0.03] blur-3xl" />
        <div class="absolute bottom-0 left-[5%] w-[300px] h-[300px] rounded-full bg-elf-salmon/[0.04] dark:bg-elf-blue/[0.02] blur-3xl" />
      </div>

      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-20 lg:pt-28 lg:pb-28">
        <div class="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">
          <div class="max-w-xl flex-1 min-w-0">
            <div class="flex items-center gap-3 mb-5">
              <p class="font-mono text-xs tracking-[0.2em] uppercase text-elf-blue dark:text-elf-blue">
                International Standards for Information Modelling
              </p>
              <span class="text-[0.6rem] font-mono font-semibold tracking-wider uppercase px-2 py-0.5 rounded-full border border-elf-blue/30 dark:border-elf-blue/40 text-elf-blue dark:text-elf-blue bg-elf-blue/5 dark:bg-elf-blue/10">501(c)(3)</span>
            </div>
            <h1 class="text-4xl sm:text-5xl lg:text-[3.5rem] font-serif font-bold text-gray-900 dark:text-white leading-[1.15] tracking-tight">
              The language family<br />
              behind
              <Transition
                mode="out-in"
                enter-active-class="transition-all duration-300 ease-out"
                enter-from-class="opacity-0 translate-y-3"
                enter-to-class="opacity-100 translate-y-0"
                leave-active-class="transition-all duration-200 ease-in"
                leave-from-class="opacity-100 translate-y-0"
                leave-to-class="opacity-0 -translate-y-2"
              >
                <span :key="heroPairs[pairIndex].slogan" class="relative block mt-1 text-elf-blue dark:text-elf-blue">
                  {{ heroPairs[pairIndex].slogan }}
                  <span class="absolute bottom-1 left-0 right-0 h-3 bg-elf-blue/10 dark:bg-elf-blue/10 -skew-x-2 pointer-events-none" />
                </span>
              </Transition>
            </h1>
            <p class="mt-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-lg">
              The EXPRESS Language Foundation maintains and promotes the ISO 10303 language family —
              powering industrial data exchange, interoperability, and digital twins since 1982.
            </p>
            <div class="mt-8 flex flex-wrap gap-3">
              <BaseButton to="/languages" size="lg">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                Language introduction
              </BaseButton>
              <BaseButton to="/standards" variant="secondary" size="lg">
                Standards &amp; references
              </BaseButton>
            </div>

            <!-- Quick stats -->
            <div class="mt-10 flex gap-8 text-sm">
              <div>
                <p class="font-mono text-2xl font-bold text-elf-blue dark:text-elf-blue">5</p>
                <p class="text-gray-500 dark:text-gray-400 mt-0.5">Languages</p>
              </div>
              <div>
                <p class="font-mono text-2xl font-bold text-elf-blue dark:text-elf-blue">40+</p>
                <p class="text-gray-500 dark:text-gray-400 mt-0.5">Years of history</p>
              </div>
              <div>
                <p class="font-mono text-2xl font-bold text-elf-blue dark:text-elf-blue">ISO</p>
                <p class="text-gray-500 dark:text-gray-400 mt-0.5">10303 Standard</p>
              </div>
            </div>
          </div>

          <!-- EXPRESS code card with typewriter -->
          <div class="hidden lg:flex items-start justify-center w-[420px] shrink-0 mt-10">
            <div class="w-full rounded-2xl border border-gray-200/60 dark:border-gray-700/40 bg-white dark:bg-navy-light shadow-2xl shadow-elf-blue/5 dark:shadow-black/20 overflow-hidden">
              <div class="flex items-center gap-2 px-4 py-2.5 border-b border-gray-100 dark:border-gray-700/40 bg-gray-50/80 dark:bg-navy">
                <span class="w-2.5 h-2.5 rounded-full bg-red-400/70" />
                <span class="w-2.5 h-2.5 rounded-full bg-amber-400/70" />
                <span class="w-2.5 h-2.5 rounded-full bg-emerald-400/70" />
                <Transition mode="out-in" enter-active-class="transition-opacity duration-200" enter-from-class="opacity-0" enter-to-class="opacity-100" leave-active-class="transition-opacity duration-150" leave-from-class="opacity-100" leave-to-class="opacity-0">
                  <span :key="heroPairs[pairIndex].filename" class="ml-2 text-[0.7rem] font-mono text-gray-400 dark:text-gray-500">{{ heroPairs[pairIndex].filename }}</span>
                </Transition>
              </div>
              <div class="p-5 font-mono text-[0.8rem] leading-[1.8] whitespace-pre text-gray-700 dark:text-gray-300 h-[13rem]">
                {{ typedText }}<span class="inline-block w-[2px] h-[1.1em] bg-elf-blue dark:bg-elf-blue align-middle animate-[cursor-blink_1s_step-end_infinite]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Language Family -->
    <section class="py-24 bg-white dark:bg-navy">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div class="text-center mb-16">
            <p class="font-mono text-xs tracking-[0.2em] uppercase text-elf-blue dark:text-elf-blue mb-3">Language Family</p>
            <h2 class="text-3xl font-serif font-bold text-gray-900 dark:text-white">Five languages, one standard</h2>
            <p class="mt-3 text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
              Each language serves a distinct purpose in the information modelling lifecycle.
            </p>
          </div>
        </AnimatedSection>

        <div class="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
          <AnimatedSection v-for="(lang, i) in languages" :key="lang.name" :style="{ transitionDelay: `${i * 60}ms` }">
            <RouterLink :to="`/languages/${lang.slug}`" class="block rounded-xl border bg-white dark:bg-navy-light p-6 transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5" :style="{ borderColor: `${lang.color}33` }">
              <img :src="lang.icon" :alt="lang.name" class="h-8 w-auto mb-3" />
              <h3 class="font-[Montserrat,sans-serif] font-bold text-sm mb-1.5" :style="{ color: lang.color }">{{ lang.name }}</h3>
              <p class="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{{ lang.desc }}</p>
              <div class="mt-3 flex items-center justify-between">
                <p class="text-[0.65rem] font-mono text-gray-400 dark:text-gray-500 tracking-wide">{{ lang.iso }}</p>
              </div>
              <span class="mt-3 inline-flex items-center text-xs font-medium" :style="{ color: lang.color }">
                Explore
                <svg class="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
              </span>
            </RouterLink>
          </AnimatedSection>
        </div>
      </div>
    </section>

    <!-- Timeline -->
    <section class="py-20 bg-gray-50 dark:bg-navy-light/30">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div class="text-center mb-14">
            <p class="font-mono text-xs tracking-[0.2em] uppercase text-elf-blue dark:text-elf-blue mb-3">History</p>
            <h2 class="text-3xl font-serif font-bold text-gray-900 dark:text-white">Four decades of innovation</h2>
          </div>
        </AnimatedSection>

        <div class="relative">
          <div class="absolute left-4 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-elf-blue/30 via-elf-blue/10 to-transparent dark:from-elf-blue/30 dark:via-elf-blue/10" />
          <div class="space-y-8">
            <AnimatedSection v-for="(ms, i) in milestones" :key="ms.year" :style="{ transitionDelay: `${i * 80}ms` }">
              <div class="relative flex items-start gap-6 sm:gap-8">
                <div class="relative z-10 shrink-0">
                  <div class="w-8 sm:w-16 h-8 sm:h-16 rounded-full bg-white dark:bg-navy-light border-2 border-elf-blue/30 dark:border-elf-blue/30 flex items-center justify-center">
                    <span class="font-mono text-xs sm:text-sm font-bold text-elf-blue dark:text-elf-blue">{{ ms.year }}</span>
                  </div>
                </div>
                <div class="pt-1 sm:pt-4">
                  <p class="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{{ ms.event }}</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>

    <!-- Supporting Organizations -->
    <section class="py-16 bg-white dark:bg-navy">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div class="text-center mb-12">
            <p class="font-mono text-xs tracking-[0.2em] uppercase text-elf-blue dark:text-elf-blue mb-3">Heritage</p>
            <h2 class="text-2xl font-serif font-bold text-gray-900 dark:text-white">Born from industry leaders</h2>
            <p class="mt-2 text-sm text-gray-500 dark:text-gray-400 max-w-lg mx-auto">
              The EXPRESS language originated from collaboration between major aerospace, manufacturing, and standards organizations.
            </p>
          </div>
        </AnimatedSection>
        <AnimatedSection>
          <div class="flex flex-wrap gap-8 items-center justify-center">
            <img src="/images/supporters/supporter-boeing.svg" alt="Boeing" class="h-12 w-auto opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300 dark:invert dark:opacity-50 dark:hover:opacity-90" />
            <img src="/images/supporters/supporter-md.svg" alt="McDonnell Douglas" class="h-12 w-auto opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300 dark:invert dark:opacity-50 dark:hover:opacity-90" />
            <img src="/images/supporters/supporter-ge.svg" alt="General Electric" class="h-12 w-auto opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300 dark:invert dark:opacity-50 dark:hover:opacity-90" />
            <img src="/images/supporters/supporter-nist.svg" alt="NIST" class="h-12 w-auto opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300 dark:invert dark:opacity-50 dark:hover:opacity-90" />
            <img src="/images/supporters/supporter-pdes.png" alt="PDES Inc." class="h-12 w-auto opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300 dark:invert dark:opacity-50 dark:hover:opacity-90" />
            <img src="/images/supporters/supporter-steptools.svg" alt="STEP Tools" class="h-12 w-auto opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300 dark:invert dark:opacity-50 dark:hover:opacity-90" />
            <img src="/images/supporters/supporter-jotneconnect.jpeg" alt="Jotne EPM Technology" class="h-12 w-auto opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300 dark:invert dark:opacity-50 dark:hover:opacity-90" />
            <img src="/images/supporters/supporter-afnet.png" alt="AFNeT Services" class="h-12 w-auto opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300 dark:invert dark:opacity-50 dark:hover:opacity-90" />
            <img src="/images/supporters/supporter-ribose.svg" alt="Ribose" class="h-12 w-auto opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300 dark:invert dark:opacity-50 dark:hover:opacity-90" />
          </div>
          <p class="text-center mt-8">
            <RouterLink to="/supporters" class="text-sm font-medium text-elf-blue dark:text-elf-blue hover:underline">
              View all supporters
              <svg class="w-4 h-4 inline ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
            </RouterLink>
          </p>
        </AnimatedSection>
      </div>
    </section>

    <!-- Latest News -->
    <section class="py-24 bg-white dark:bg-navy">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div class="flex items-center justify-between mb-12">
            <div>
              <p class="font-mono text-xs tracking-[0.2em] uppercase text-elf-blue dark:text-elf-blue mb-2">Latest News</p>
              <h2 class="text-2xl font-serif font-bold text-gray-900 dark:text-white">From the foundation</h2>
            </div>
            <BaseButton to="/blog" variant="ghost" size="sm">
              View all
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
            </BaseButton>
          </div>
        </AnimatedSection>

        <div v-if="posts.length" class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatedSection v-for="(post, i) in posts.slice(0, 3)" :key="post.slug" :style="{ transitionDelay: `${i * 80}ms` }">
            <BaseCard :to="`/blog/${post.slug}`" padding="lg">
              <div class="flex flex-wrap items-center gap-2 mb-3">
                <span class="font-mono text-xs text-gray-400 dark:text-gray-500">{{ formatDate(post.date!) }}</span>
                <span v-for="cat in post.categories" :key="cat" class="text-[0.65rem] px-2 py-0.5 rounded-full bg-elf-blue/8 dark:bg-elf-blue/8 text-elf-blue dark:text-elf-blue font-medium tracking-wide">
                  {{ cat }}
                </span>
              </div>
              <h3 class="font-serif font-bold text-lg text-gray-900 dark:text-white leading-snug">
                {{ post.title }}
              </h3>
              <p v-if="post.excerpt" class="mt-2 text-sm text-gray-500 dark:text-gray-400 line-clamp-2">{{ post.excerpt }}</p>
              <p v-if="post.authors?.length" class="mt-3 text-xs text-gray-400 dark:text-gray-500">
                {{ post.authors.map(a => a.name).join(', ') }}
              </p>
            </BaseCard>
          </AnimatedSection>
        </div>
      </div>
    </section>

    <!-- Learning Resources -->
    <section class="py-24 bg-gray-50 dark:bg-navy-light/30">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div class="text-center mb-16">
            <p class="font-mono text-xs tracking-[0.2em] uppercase text-elf-blue dark:text-elf-blue mb-3">Learning Resources</p>
            <h2 class="text-3xl font-serif font-bold text-gray-900 dark:text-white">Get started with EXPRESS</h2>
          </div>
        </AnimatedSection>

        <div class="grid md:grid-cols-2 gap-8">
          <AnimatedSection>
            <BaseCard to="/learn" padding="lg">
              <div class="w-12 h-12 rounded-xl bg-elf-blue/8 dark:bg-elf-blue/8 flex items-center justify-center mb-5">
                <svg class="w-6 h-6 text-elf-blue dark:text-elf-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>
              </div>
              <h3 class="font-serif font-bold text-xl text-gray-900 dark:text-white mb-2">EXPRESS Language Reference Course</h3>
              <p class="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-3">
                The authoritative course on the EXPRESS language from its co-inventor — syntax, semantics, modelling patterns, and practical exercises.
              </p>
              <p class="text-xs text-gray-400 dark:text-gray-500 italic">By Peter Wilson, co-author of <em>Information Modelling: The EXPRESS Way</em></p>
              <span class="mt-4 inline-flex items-center text-sm font-medium text-elf-blue dark:text-elf-blue">
                Start learning
                <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
              </span>
            </BaseCard>
          </AnimatedSection>

          <AnimatedSection :style="{ transitionDelay: '80ms' }">
            <BaseCard to="/learn/jotne-express/01-intro-iso-10303" padding="lg">
              <div class="w-12 h-12 rounded-xl bg-elf-blue/8 dark:bg-elf-blue/8 flex items-center justify-center mb-5">
                <svg class="w-6 h-6 text-elf-blue dark:text-elf-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/></svg>
              </div>
              <h3 class="font-serif font-bold text-xl text-gray-900 dark:text-white mb-2">EXPRESS &amp; STEP in Practice</h3>
              <p class="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-3">
                The applied course on the ISO 10303 ecosystem — STEP file formats, data validation, schema querying, SDAI programming, and PLCS.
              </p>
              <p class="text-xs text-gray-400 dark:text-gray-500 italic">Contributed by Jotne EPM Technology</p>
              <span class="mt-4 inline-flex items-center text-sm font-medium text-elf-blue dark:text-elf-blue">
                Explore course
                <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
              </span>
            </BaseCard>
          </AnimatedSection>
        </div>
      </div>
    </section>

    <!-- About / CTA -->
    <section class="relative overflow-hidden py-24 bg-elf-blue dark:bg-navy-light">
      <div class="absolute inset-0 pointer-events-none opacity-10">
        <svg viewBox="0 0 200 200" fill="none" class="absolute -right-20 top-0 w-96 h-96 text-white dark:text-elf-blue">
          <path d="M40 40L100 100L40 160" stroke="currentColor" stroke-width="8" fill="none" stroke-linecap="round"/>
          <path d="M160 40L100 100L160 160" stroke="currentColor" stroke-width="8" fill="none" stroke-linecap="round"/>
        </svg>
      </div>
      <div class="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedSection>
          <h2 class="text-3xl font-serif font-bold text-white mb-4">Join the EXPRESS Language Foundation</h2>
          <p class="text-blue-100 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto mb-4">
            We facilitate education, standardization, research, and promotion of the EXPRESS language family.
            Membership is open to organizations and individuals worldwide.
          </p>
          <p class="text-sm text-blue-200/70 dark:text-gray-400 mb-2">
            Founded by the original inventors of EXPRESS, including Douglas Schenck, Peter Wilson, and Allison Barnard Feeney.
          </p>
          <p class="text-sm text-blue-200/70 dark:text-gray-400 mb-8">
            ELF is a US-registered 501(c)(3) public charity — your contributions are tax-deductible.
          </p>
          <div class="flex flex-wrap justify-center gap-3">
            <BaseButton to="/membership" size="lg">
              Become a member
            </BaseButton>
            <BaseButton to="/about" variant="secondary" size="lg" class="!border-white/30 !text-white dark:!border-gray-500 dark:!text-gray-300 hover:!bg-white/10">
              About ELF
            </BaseButton>
            <BaseButton to="/leadership" variant="secondary" size="lg" class="!border-white/30 !text-white dark:!border-gray-500 dark:!text-gray-300 hover:!bg-white/10">
              Leadership
            </BaseButton>
          </div>
        </AnimatedSection>
      </div>
    </section>
  </div>
</template>
