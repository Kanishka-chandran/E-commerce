<template>
  <NavBar />
  <router-view />
</template>

<script>
import NavBar from './components/NavBar.vue'

export default {
  components: { NavBar }
}
</script>

<style>
/* Global styles */
body {
  margin: 0;
  font-family: 'Segoe UI', sans-serif;
}
</style>