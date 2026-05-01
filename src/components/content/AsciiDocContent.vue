<script setup lang="ts">
defineProps<{
  html: string
}>()
</script>

<template>
  <article class="asciidoc-content prose prose-gray dark:prose-invert max-w-none">
    <div v-html="html" />
  </article>
</template>
