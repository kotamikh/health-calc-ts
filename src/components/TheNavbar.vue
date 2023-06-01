<template>
  <div class="navbar">
    <p>Health Calculator</p>
    <ul class="nav-items">
      <li v-for="link in links"
          :key="link.id"
      >{{ link.title }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "TheNavbar"
})

</script>

<script setup lang="ts">
import {ref} from "vue";
import link from "@/types/Links";

const links = ref<link[]>([
  {title: 'Home', route: '/home', id: 0},
  {title: 'Calculate', route: '/calculate', id: 1},
  {title: 'About', route: '/about', id: 2}
])
</script>


<style scoped lang="sass">
.navbar
  width: 100%
  height: 80px
  display: flex
  align-items: center
  padding: 20px 10%
  justify-content: space-between
  position: fixed
  top: 0
  left: 0
  background-color: rgba(51, 55, 63, 0.7)

  p
    font-size: 22px
    font-weight: bold

  .nav-items
    gap: 1vw
    display: flex
    list-style: none
    font-weight: bold

</style>