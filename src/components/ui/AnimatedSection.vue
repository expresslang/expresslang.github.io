<script setup lang="ts">
import { ref, onMounted } from 'vue'

const el = ref<HTMLElement | null>(null)
const visible = ref(false)

onMounted(() => {
  if (!el.value) return
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        visible.value = true
        observer.disconnect()
      }
    },
    { threshold: 0.1 },
  )
  observer.observe(el.value)
})
</script>

<template>
  <div
    ref="el"
    :class="[
      'transition-all duration-200 ease-out',
      visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2',
    ]"
  >
    <slot />
  </div>
</template>
