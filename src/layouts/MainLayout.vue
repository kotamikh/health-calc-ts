<template>
  <the-navbar/>

  <wrapper>
    <router-view></router-view>
  </wrapper>
</template>

<script>
import TheNavbar from "@/components/TheNavbar.vue";
import Wrapper from "@/components/TheWrapper.vue";

export default {
  name: "MainLayout",
  components: { TheNavbar, Wrapper }
}
</script>

<style scoped>

</style>