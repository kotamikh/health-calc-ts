<template>
  <div class="card">
    {{ name }}
    <img :src="imageUrl" alt="product-img"/>
    <slot/>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

interface Props {
  name: string,
  imageName: string
}

const props = withDefaults(defineProps<Props>(), {
  name: 'unknown',
  imageName: 'banana'
});

const imageUrl = computed<URL>(() => {
  return new URL(`/src/assets/images/${ props.imageName }.png`, import.meta.url)
});
</script>

<style scoped lang="sass">
.card
  width: 100px
  height: 100px
  border-radius: 5%
  border: 2px solid #818181
  background-color: #e3e3e3

  display: flex
  flex-direction: column
  align-items: center
  justify-content: center
</style>