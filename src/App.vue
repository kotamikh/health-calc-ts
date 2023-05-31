<template>
  <div class="app">
    <the-navbar/>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import TheNavbar from "@/components/TheNavbar.vue";

export default defineComponent({
  name: 'App',
  components: {TheNavbar}
});
</script>

<style>
.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
