<script setup lang="ts">
import NavBar from './components/NavBar.vue'
</script>

<template>
  <NavBar />
  <router-view />
  <footer class="site-footer">
    <div class="wrap">
      <div class="footer-line">
        <span class="mark">·</span>
        <span>© 2026 · Wanting Deng</span>
        <span class="mark">·</span>
        <span>Made with quiet care</span>
        <span class="mark">·</span>
      </div>
    </div>
  </footer>
</template>
