<template>
  <div class="app">
    <the-navbar/>
    <home-poster/>
    <the-calculator/>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import TheNavbar from "@/components/TheNavbar.vue";
import HomePoster from "@/components/HomePoster.vue";
import TheCalculator from "@/components/TheCalculator.vue";

export default defineComponent({
  name: 'App',
  components: {TheCalculator, TheNavbar, HomePoster}
});
</script>

<style>
.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
