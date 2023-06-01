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

window.onscroll = function () {
  const navbar = document.querySelector('.navbar') as HTMLElement
    if (window.scrollY > 100) {
      console.log('color')
      navbar.classList.add('background')
    } else {
      navbar.classList.remove('background')
    }
}
</script>


<style scoped lang="sass">
.navbar
  width: 100%
  height: 70px
  display: flex
  align-items: center
  padding: 12px 8%
  justify-content: space-between
  position: fixed
  top: 0
  left: 0
  background-color: transparent
  transition: background-color 0.5s ease

  &.background
    background-color: rgba(39, 39, 42, 0.6)
  p
    margin: 0
    font-size: 20px
    font-weight: bold

  .nav-items
    gap: 1vw
    display: flex
    list-style: none
    font-weight: bold

</style>