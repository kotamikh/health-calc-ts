<template>
  <div class="navbar" ref="navbar">
    <p>Health Calculator</p>
    <ul class="nav-items">
      <li v-for="link in links"
          :key="link.id"
          @click="moveToPage()"
      >{{ link.title }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
export default {
  name: "TheNavbar"
}
</script>

<script setup lang="ts">
import { ref } from "vue";
import { Link } from "@/types/Links";

const navbar = ref<HTMLDivElement | null>(null);

const links = ref<Link[]>([
  { title: 'Home', id: 0 },
  { title: 'Calculate', id: 1 },
  { title: 'About', id: 2 }
])

window.onscroll = function () {
  if (navbar.value) {
    if (window.scrollY > 200) {
      navbar.value.classList.add('background')
    } else {
      navbar.value.classList.remove('background')
    }
  }
}

// const moveToPage = function() {
//   let page =
// }
</script>


<style scoped lang="sass">
.navbar
  width: 100%
  height: 70px
  padding: 12px 8%

  display: flex
  align-items: center
  justify-content: space-between

  top: 0
  left: 0
  position: fixed
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