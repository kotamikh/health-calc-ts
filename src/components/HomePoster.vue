<template>
  <div class="main-poster">
    <div class="text">
      <h1>Health Calculator</h1>
      <p>Пора посчитать,<br/> насколько полноценен<br/> ваш рацион питания!</p>
    </div>
    <img src="@/assets/calculator.png" alt="calculator"/>
  </div>
</template>

<script>
export default {
  name: "HomePoster"
}
</script>

<style scoped lang="sass">
.main-poster
  display: flex
  height: 100vh
  width: 90%
  margin: 0 auto
  align-items: center
  justify-content: start
  font-family: 'Roboto Slab', serif

  .text
    width: 50%
    p
      margin: 0
      font-size: 30px
      font-weight: normal
  img
    width: 45%
</style>