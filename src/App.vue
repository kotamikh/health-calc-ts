<template>
  <div class="app">
    <MainLayout/>
  </div>
</template>

<script>
import MainLayout from "@/layouts/MainLayout.vue";

export default {
  name: 'App',
  components: { MainLayout }
}
</script>

<style>
.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
