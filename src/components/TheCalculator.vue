<template>
  <div class="calculator-block">
    <button class="add-btn"></button>
    <div class="nutrients">
      <v-expansion-panels variant="accordion">
        <v-expansion-panel title="Minerals">
          <v-expansion-panel-text>
            <v-list>
              <v-list-item v-for="mineral of minerals" :key="mineral.name">
                <v-list-item-title>
                  {{ mineral.name }}
                </v-list-item-title>
                <v-list-item-subtitle>
                  {{ mineral.value }} мг
                </v-list-item-subtitle>
              </v-list-item>
            </v-list>
          </v-expansion-panel-text>
        </v-expansion-panel>
        <v-expansion-panel title="Vitamins">
          <v-expansion-panel-text>
            <v-list>
              <v-list-item v-for="vitamin of vitamins" :key="vitamin.name">
                <v-list-item-title>
                  {{ vitamin.name }}
                </v-list-item-title>
                <v-list-item-subtitle>
                  {{ vitamin.value }} мг
                </v-list-item-subtitle>
              </v-list-item>
            </v-list>
          </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "TheCalculator"
}
</script>

<script setup lang="ts">
import { ref } from "vue";
import { Mineral, MineralName, NutrientType, Vitamin, VitaminName } from "@/types/Nutrients";

const mineralsList = ref<HTMLUListElement>()
const vitaminsList = ref<HTMLUListElement>()

const minerals = ref<Mineral[]>([
  {
    type: NutrientType.Mineral,
    name: MineralName.Calcium,
    value: 0
  },
  {
    type: NutrientType.Mineral,
    name: MineralName.Magnesium,
    value: 0
  }
])

const vitamins = ref<Vitamin[]>([
  {
    type: NutrientType.Vitamin,
    name: VitaminName.A,
    value: 0
  }
])
</script>

<style scoped lang="sass">
.calculator-block
  width: 60%
  height: 400px
  color: black
  margin: 0 auto
  padding: 30px
  display: flex
  justify-content: space-between
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
      text-shadow: 1px 1px 2px black

    &:hover
      &::after
        transform: scale(120%)

  .nutrients
    width: 40%
    overflow: hidden
    border-radius: 3px
    height: fit-content
    background-color: white

    button
      border: 0
      width: 100%
      display: flex
      align-items: center
      padding: 15px
      text-align: start
      font-size: 16px
      background-color: white

      &::after
        content: ''
        width: 20px
        height: 20px
        margin-left: auto
        transform: rotate(0deg)
        transition: transform 0.2s ease-in-out
        background-image: url('@/assets/arrow.png')
        background-repeat: no-repeat

      &.focus
        &::after
          transform: rotate(180deg)

    ul
      display: none

      &.open
        display: block

</style>