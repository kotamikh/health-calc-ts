<template>
  <div class="wrapper">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TheWrapper"
}
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;

  gap: 1rem;
  width: 80%;
  min-height: 70vh;
  margin: 50px auto;
}
</style>