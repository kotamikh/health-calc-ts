<template>
  <div class="wrapper">
    <div class="calculator-block">
      <div class="added-products">
        <product-card
            v-for="p in addedProducts"
            :name="p.name"
            :image-name="p.image"
        >
          <p>{{ p.weight }} г.</p>
        </product-card>
        <button class="open-btn"
                @click="openModal"
        ></button>
      </div>
      <products-modal v-model:show="showModal"
                      @close-modal="showModal = false"
                      @add-products="addProducts"
      />
      <div class="nutrients">
        <v-expansion-panels variant="accordion">
          <v-expansion-panel title="Minerals">
            <v-expansion-panel-text>
              <v-list>
                <v-list-item v-for="mineral of minerals" :key="mineral.name">
                  <v-list-item-title>
                    {{ mineral.name }}
                  </v-list-item-title>
                  <v-list-item-subtitle style="display: flex; justify-content: space-between">
                    <div>{{ mineral.value }} мг</div>
                    <div>{{ mineral.percent }} %</div>
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
                  <v-list-item-subtitle style="display: flex; justify-content: space-between">
                    <div>{{ vitamin.value }} мг</div>
                    <div>{{ vitamin.percent }} %</div>
                  </v-list-item-subtitle>
                </v-list-item>
              </v-list>
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>
      </div>
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
import { IMineral, MineralName, NutrientType, IVitamin, VitaminName } from "@/types/Nutrients";
import ProductsModal from "@/components/ProductsModal.vue";
import { IProduct } from "@/types/Products";
import ProductCard from "@/components/ProductCard.vue";

const showModal = ref(false)

const openModal = function () {
  showModal.value = true
}

interface Data {
  [NutrientType.Mineral]: Record<MineralName, NutrientData>,
  [NutrientType.Vitamin]: Record<VitaminName, NutrientData>,
}

interface NutrientData {
  value: number
}

const getDefaultNutrientData = (): NutrientData => ({
  value: 0
})

const data = ref<Data>({
  [NutrientType.Mineral]: {
    [MineralName.Zink]: getDefaultNutrientData(),
    [MineralName.Ferrum]: getDefaultNutrientData(),
    [MineralName.Calcium]: getDefaultNutrientData(),
    [MineralName.Magnesium]: getDefaultNutrientData(),
    [MineralName.Phosphorus]: getDefaultNutrientData(),

  },
  [NutrientType.Vitamin]: {
    [VitaminName.A]: getDefaultNutrientData(),
    [VitaminName.C]: getDefaultNutrientData(),
    [VitaminName.D]: getDefaultNutrientData(),
    [VitaminName.E]: getDefaultNutrientData(),
    [VitaminName.K]: getDefaultNutrientData(),
    [VitaminName.B1]: getDefaultNutrientData(),
    [VitaminName.Choline]: getDefaultNutrientData(),
  }
})
const addProducts = function (arr: Array<IProduct>) {
  arr.forEach(p => {

  })
}
</script>

<style scoped lang="sass">
.wrapper
  height: 100vh
  display: flex
  align-items: center

.calculator-block
  width: 70%
  padding: 45px
  height: 600px
  margin: 0 auto

  display: flex
  justify-content: space-between

  color: black
  position: relative
  border-radius: 20px
  background-color: #e3e3e3

  .added-products
    width: 60%
    height: fit-content

    gap: 10px
    display: flex
    flex-wrap: wrap
    align-items: center

    .open-btn
      width: 100px
      height: 100px
      position: relative

      border: 0
      border-radius: 20px
      background-color: #e3e3e3
      box-shadow: 0 6px 10px 5px rgba(98, 98, 98, 0.6)

      &::after
        top: 4%
        left: 20%
        position: absolute

        color: #FFF
        font-size: 80px
        content: "\271A"
        line-height: 100px
        text-shadow: 1px 1px 2px black
        transition: all .15s ease-in-out

      &:hover
        &::after
          transform: scale(120%)

  .nutrients
    width: 40%
    height: fit-content

</style>