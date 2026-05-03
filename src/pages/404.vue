<template>
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
    <div class="mx-auto max-w-md rounded-2xl border border-gray-200/60 dark:border-gray-700/40 bg-white dark:bg-navy-light shadow-xl shadow-elf-blue/5 dark:shadow-black/20 overflow-hidden mb-8">
      <div class="flex items-center gap-2 px-4 py-2.5 border-b border-gray-100 dark:border-gray-700/40 bg-gray-50/80 dark:bg-navy">
        <span class="w-2.5 h-2.5 rounded-full bg-red-400/70" />
        <span class="w-2.5 h-2.5 rounded-full bg-amber-400/70" />
        <span class="w-2.5 h-2.5 rounded-full bg-emerald-400/70" />
        <span class="ml-2 text-[0.7rem] font-mono text-gray-400 dark:text-gray-500">404.exp</span>
      </div>
      <div class="p-5 font-mono text-[0.8rem] leading-[1.8] text-left text-gray-700 dark:text-gray-300">
        <span class="text-elf-blue dark:text-elf-blue">SCHEMA</span> NotFound;<br />
        <br />
        <span class="text-elf-blue dark:text-elf-blue">ENTITY</span> page;<br />
        &nbsp;&nbsp;url : <span class="text-amber-600 dark:text-amber-400">STRING</span>;<br />
        &nbsp;&nbsp;status : <span class="text-amber-600 dark:text-amber-400">INTEGER</span> := 404;<br />
        &nbsp;&nbsp;<span class="text-elf-blue dark:text-elf-blue">WHERE</span><br />
        &nbsp;&nbsp;&nbsp;&nbsp;WR1: <span class="text-emerald-600 dark:text-emerald-400">FALSE</span>;<br />
        <span class="text-elf-blue dark:text-elf-blue">END_ENTITY</span>;<br />
        <br />
        <span class="text-elf-blue dark:text-elf-blue">END_SCHEMA</span>;<span class="inline-block w-[2px] h-[1.1em] bg-elf-blue dark:bg-elf-blue align-middle animate-[cursor-blink_1s_step-end_infinite]" />
      </div>
    </div>
    <h1 class="text-2xl font-serif font-bold text-gray-900 dark:text-white">Page not found</h1>
    <p class="mt-2 text-gray-500 dark:text-gray-400">The page you're looking for doesn't exist.</p>
    <RouterLink to="/" class="mt-6 inline-flex items-center px-6 py-3 rounded-lg bg-elf-blue dark:bg-elf-blue text-white dark:text-navy font-medium hover:bg-elf-blue-dark dark:hover:bg-elf-blue/90 transition-colors">
      Go home
    </RouterLink>
  </div>
</template>
