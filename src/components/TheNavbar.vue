<template>
  <div class="navbar">
    <h1>Health Calculator</h1>
    <ul class="nav-items">
      <li v-for = "link in links"
          :key="link.id"
          @click="router.push(link.route)"
      >{{ link.title }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "TheNavbar"
})

</script>

<script setup lang="ts">
  import {ref} from "vue";
  import link from "@/types/Links";
  import { useRouter } from "vue-router";
  const router = useRouter();

  const links = ref<link[]>([
    { title: 'Home' , route: '/home', id: 0 },
    { title: 'Calculate', route: '/calculate', id: 1 },
    { title: 'About', route: '/about', id: 2 }
  ])
</script>


<style scoped lang="sass">
.navbar
  width: 100%
  height: 60px
  display: flex
  align-items: center
  padding: 0 10%
  justify-content: space-between
  background-color: rgba(51, 55, 63, 0.7)

.nav-items
  gap: 1vw
  display: flex
  list-style: none
  font-weight: bold
</style>