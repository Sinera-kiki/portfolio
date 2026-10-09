<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const scrolled = ref(false)

function onScroll() {
  scrolled.value = window.scrollY > 20
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
})
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <nav class="navbar" :class="{ scrolled }">
    <div class="nav-inner">
      <a href="#top" class="brand">Wanting <em>·</em> 邓婉婷</a>
      <div class="nav-links">
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#skills" class="hide-sm">Skills</a>
        <a href="#beyond" class="hide-sm">Beyond</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  </nav>
</template>
