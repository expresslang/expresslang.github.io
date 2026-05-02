<script setup lang="ts">
import AnimatedSection from '@/components/ui/AnimatedSection.vue'

interface Person {
  name: string
  slug: string
  role: string
  desc: string
  highlight?: string
  photo?: string
}

const officers: Person[] = [
  {
    name: 'Thomas Thurman',
    slug: 'thomas-thurman',
    role: 'President',
    desc: 'Owner of TRThurman Consulting. Technical lead for all four editions of ISO 10303-210 (AP 210). ISO Excellence Award and PDES Bryan K. Martin Award recipient.',
    photo: '/images/people/thomas-thurman.jpg',
  },
  {
    name: 'Hiroshi Murayama',
    slug: 'hiroshi-murayama',
    role: 'Vice-President',
    desc: 'Former Toshiba Research Fellow. Convenor of ISO TC 184/SC 4/JWG 24 and CEO of SATS Inc. Specializes in product data dictionaries, ontology, and data modelling.',
    photo: '/images/people/hiroshi-murayama.jpg',
  },
  {
    name: 'Ronald Tse',
    slug: 'ronald-tse',
    role: 'Secretary',
    desc: 'Manages organizational operations and administrative functions of the foundation.',
    photo: '/images/people/ronald-tse.jpg',
  },
]

const founders: Person[] = [
  {
    name: 'Douglas Schenck',
    slug: 'douglas-schenck',
    role: 'Inventor of EXPRESS',
    highlight: 'Project Leader, ISO 10303-11:1994 (with Bernd Wenzel)',
    desc: 'Original inventor of the EXPRESS language at McDonnell Aircraft (1982). Co-author of the authoritative reference "Information Modelling: The EXPRESS Way".',
    photo: '/images/people/douglas-schenck.jpg',
  },
  {
    name: 'Prof. Bernd Wenzel',
    slug: 'bernd-wenzel',
    role: 'Project Leader',
    highlight: 'Project Leader, ISO 10303-11:1994 (with Douglas Schenck)',
    desc: 'Co-project leader of the first edition of the EXPRESS language standard, guiding it through international standardization at ISO.',
  },
  {
    name: 'Peter Wilson',
    slug: 'peter-wilson',
    role: 'Designer of EXPRESS-G & EXPRESS-X',
    highlight: 'Project Leader, ISO 10303-11:2004 (with David Loffredo)',
    desc: 'Designer of EXPRESS-G (graphical notation) and EXPRESS-X (schema mapping). Co-author of "Information Modelling: The EXPRESS Way". Author of the EXPRESS Tutorial.',
    photo: '/images/people/peter-wilson.jpg',
  },
  {
    name: 'Thomas Thurman',
    slug: 'thomas-thurman',
    role: 'President',
    desc: 'Owner of TRThurman Consulting. Technical lead for all four editions of ISO 10303-210 (AP 210). ISO Excellence Award and PDES Bryan K. Martin Award recipient.',
    photo: '/images/people/thomas-thurman.jpg',
  },
  {
    name: 'Allison Barnard Feeney',
    slug: 'allison-barnard-feeney',
    role: 'General Manager, PDES Inc.',
    highlight: '2018 ANSI Finegan Standards Medal',
    desc: 'General Manager of PDES, Inc. Key participant in STEP development since its inception. Dept. of Commerce Gold Medal recipient.',
    photo: '/images/people/allison-barnard-feeney.jpg',
  },
  {
    name: 'David Loffredo',
    slug: 'david-loffredo',
    role: 'VP Product Development, STEP Tools Inc.',
    highlight: 'Convener, ISO TC 184/SC 4/WG 11',
    desc: 'Co-founder of STEP Tools Inc. Editor of ISO 10303-238 (STEP-NC) and Part 21. Led 20+ major software releases used in over a million CAD seats.',
    photo: '/images/people/david-loffredo.jpg',
  },
  {
    name: 'Jean Brangé',
    slug: 'jean-brange',
    role: 'Président, AFNeT Services',
    desc: 'Leads the EasySTEP and STEP Next initiatives for open-source STEP tooling. Pioneer in STEP AP242 deployment and LOTAR long-term archiving in aerospace.',
    photo: '/images/people/jean-brange.jpg',
  },
  {
    name: 'Phil Spiby',
    slug: 'phil-spiby',
    role: 'Senior Consultant, Eurostep Limited',
    desc: 'Over 30 years in STEP and PLCS standardization. Key contributor to OASIS PLCS and European aerospace collaboration projects.',
    photo: '/images/people/phil-spiby.jpg',
  },
  {
    name: 'Stuart Galt',
    slug: 'stuart-galt',
    role: 'Associate Technical Fellow, Boeing',
    highlight: 'Convenor, ISO/TC 184/SC 4/WG 12',
    desc: 'Associate Technical Fellow at Boeing with 25+ years in visualization and data exchange standards. Convenor of WG 12 at ISO/TC 184/SC 4, project lead of ISO/CD 14739-1 (PRC), and former Chair of OASIS WebCGM 2.1.',
    photo: '/images/people/stuart-galt.jpg',
  },
]
</script>

<template>
  <div>
    <!-- Hero -->
    <div class="bg-gradient-to-b from-slate-50 to-white dark:from-navy dark:to-navy-light/30 pt-12 pb-16">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <p class="font-mono text-xs tracking-[0.2em] uppercase text-elf-blue dark:text-elf-blue mb-3">Organization</p>
        <h1 class="text-3xl sm:text-4xl font-serif font-bold text-gray-900 dark:text-white">Leadership &amp; Founders</h1>
        <p class="mt-4 text-gray-500 dark:text-gray-400 max-w-2xl leading-relaxed">
          The EXPRESS Language Foundation is led by a team that includes the original inventors of EXPRESS,
          experts who guided its standardization at ISO, and stakeholders dedicated to the language family's future.
        </p>
      </div>
    </div>

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
                <img :src="person.photo" :alt="person.name" class="w-full h-full object-cover" />
              </div>
              <div v-else class="w-14 h-14 rounded-full bg-elf-blue/8 dark:bg-elf-blue/8 flex items-center justify-center mb-4">
                <span class="text-xl font-serif font-bold text-elf-blue dark:text-elf-blue">{{ person.name.charAt(0) }}</span>
              </div>
              <h3 class="font-serif font-bold text-lg text-gray-900 dark:text-white">{{ person.name }}</h3>
              <p class="font-mono text-xs text-elf-blue dark:text-elf-blue tracking-wide mt-1">{{ person.role }}</p>
              <p class="mt-3 text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{{ person.desc }}</p>
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
                <img :src="person.photo" :alt="person.name" class="w-full h-full object-cover" />
              </div>
              <div v-else class="w-10 h-10 rounded-full bg-elf-blue/8 dark:bg-elf-blue/8 flex items-center justify-center mb-3">
                <span class="text-base font-serif font-bold text-elf-blue dark:text-elf-blue">{{ person.name.charAt(0) }}</span>
              </div>
              <h3 class="font-serif font-bold text-gray-900 dark:text-white">{{ person.name }}</h3>
              <p class="font-mono text-[0.65rem] text-elf-blue dark:text-elf-blue tracking-wide mt-0.5">{{ person.role }}</p>
              <p v-if="person.highlight" class="text-[0.65rem] font-mono text-amber-600 dark:text-amber-400 mt-1">{{ person.highlight }}</p>
              <p class="mt-2 text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{{ person.desc }}</p>
            </RouterLink>
          </AnimatedSection>
        </div>
      </section>
    </div>
  </div>
</template>
