<template>
  <the-navbar/>
  <home-poster/>
  <the-calculator/>
  <about-service/>
</template>

<script>
import TheNavbar from "@/components/TheNavbar.vue";
import HomePoster from "@/components/HomePoster.vue";
import TheCalculator from "@/components/TheCalculator.vue";
import AboutService from "@/components/AboutService.vue";

export default {
  name: "MainLayout",
  components: { AboutService, TheCalculator, HomePoster, TheNavbar }
}
</script>

<style scoped>

</style>