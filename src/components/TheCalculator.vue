<template>
  <div class="calculator-block">
    <button class="add-btn"></button>
    <div class="selects"></div>
  </div>
</template>

<script>
export default {
  name: "TheCalculator"
}
</script>

<style scoped lang="sass">
.calculator-block
  width: 60%
  height: 400px
  margin: 0 auto
  padding: 30px
  background-color: #e3e3e3
  border-radius: 20px

  .add-btn
    width: 120px
    height: 120px
    border-radius: 20px
    position: relative
    background-color: #e3e3e3
    box-shadow: 0 6px 10px 5px rgba(98, 98, 98, 0.6)
    border: 0

    &::after
      position: absolute
      top: 0
      bottom: 0
      left: 0
      right: 0
      content: "\271A"
      font-size: 80px
      color: #FFF
      line-height: 120px
      transition: all .15s ease-in-out
</style>