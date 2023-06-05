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
                <v-list-item v-for="mineral of nutrients.mineral" :key="mineral.name">
                  <v-list-item-title>
                    {{ mineral.name }}
                  </v-list-item-title>
                  <v-list-item-subtitle style="display: flex; justify-content: space-between">
                    <div>{{ mineral.value }} мг</div>
                    <div>{{ mineral.dailyRate}} %</div>
                  </v-list-item-subtitle>
                </v-list-item>
              </v-list>
            </v-expansion-panel-text>
          </v-expansion-panel>
          <v-expansion-panel title="Vitamins">
            <v-expansion-panel-text>
              <v-list>
                <v-list-item v-for="vitamin of nutrients.vitamin" :key="vitamin.name">
                  <v-list-item-title>
                    {{ vitamin.name }}
                  </v-list-item-title>
                  <v-list-item-subtitle style="display: flex; justify-content: space-between">
                    <div>{{ vitamin.value }} мг</div>
                    <div>{{ vitamin.dailyRate }} %</div>
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
import {
  IMineral,
  MineralName,
  NutrientType,
  IVitamin,
  VitaminName,
  INutrientsData,
  IVitaminValue
} from "@/types/Nutrients";
import ProductsModal from "@/components/ProductsModal.vue";
import { ISelectedProduct } from "@/components/ProductsModal.vue";
import ProductCard from "@/components/ProductCard.vue";
import { computed, isProxy, toRaw } from "vue";
import { useDataStore } from "@/store/DataStore";

const showModal = ref(false)

const openModal = function () {
  showModal.value = true
}

const nutrients = computed(() => {
  if (isProxy(useDataStore().dailyRateData)) {
    const rawDailyRate = toRaw(useDataStore().dailyRateData)
    return rawDailyRate
  }
})

// interface NutrientData {
//   weight: number
// }

const getDefaultNutrientData = (name: MineralName | VitaminName): INutrientsData => ({
  weight: 0
})

const VitaminValues: IVitaminValue = {
  weight: 0,
  percent: 0,
}

const data = ref<INutrientsData>({
  [NutrientType.Mineral]: {
    [MineralName.Calcium]: getDefaultNutrientData(MineralName.Calcium),
    [MineralName.Magnesium]: getDefaultNutrientData(MineralName.Magnesium),
    [MineralName.Ferrum]: getDefaultNutrientData(MineralName.Ferrum),
    [MineralName.Phosphorus]: getDefaultNutrientData(MineralName.Phosphorus),
    [MineralName.Zink]: getDefaultNutrientData(MineralName.Zink)
  },
  [NutrientType.Vitamin]: {
    [VitaminName.A]: getDefaultNutrientData(VitaminName.A),
    [VitaminName.B1]: getDefaultNutrientData(VitaminName.B1),
    [VitaminName.Choline]: getDefaultNutrientData(VitaminName.Choline),
    [VitaminName.C]: getDefaultNutrientData(VitaminName.C),
    [VitaminName.D]: getDefaultNutrientData(VitaminName.D),
    [VitaminName.E]: getDefaultNutrientData(VitaminName.E),
    [VitaminName.K]: getDefaultNutrientData(VitaminName.K)
  }
})

const addedProducts = ref<ISelectedProduct[]>([])

const addProducts = function (arr: Array<ISelectedProduct>) {
  arr.forEach(p => {
    let productCard = {
      name: p.name,
      image: p.image,
      weight: p.weight
    }
    console.log(p)

    if (!addedProducts.value.some(elem => elem.name === productCard.name)) {
      addedProducts.value.push(productCard)
    } else {
      addedProducts.value.forEach((elem) => {
        if (elem.name === productCard.name) {
          elem.weight += 100
        }
      })
    }
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