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
          <button class="product-delete" @click="removeFromAdded(p)">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#818181" class="bi bi-x"
                 viewBox="0 0 16 16">
              <path
                  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
            </svg>
          </button>
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
                <v-list-item v-for="(value, name) in data.mineral" :key="name">
                  <v-list-item-title>
                    {{ name }}
                  </v-list-item-title>
                  <v-list-item-subtitle style="display: flex; justify-content: space-between">
                    <div>{{ value }} мг</div>
                    <div>{{ percentCountMineral(value, name) }} %</div>
                  </v-list-item-subtitle>
                </v-list-item>
              </v-list>
            </v-expansion-panel-text>
          </v-expansion-panel>
          <v-expansion-panel title="Vitamins">
            <v-expansion-panel-text>
              <v-list>
                <v-list-item v-for="(value, name) in data.vitamin" :key="name">
                  <v-list-item-title>
                    {{ name }}
                  </v-list-item-title>
                  <v-list-item-subtitle style="display: flex; justify-content: space-between">
                    <div>{{ value }} мг</div>
                    <div>{{ percentCountVitamin(value, name) }} %</div>
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
  MineralName,
  NutrientType,
  VitaminName
} from "@/types/Nutrients";
import ProductsModal from "@/components/ProductsModal.vue";
import { ISelectedProduct } from "@/components/ProductsModal.vue";
import ProductCard from "@/components/ProductCard.vue";
import { computed } from "vue";
import { useDataStore, INutrientsData } from "@/store/DataStore";
import { IProductMineralData, IProductVitaminData } from "@/types/Products";

const showModal = ref(false)

const openModal = function () {
  showModal.value = true
}

const nutrients = computed<INutrientsData>(() => {
  return useDataStore().dailyRateData
})

const percentCountMineral = (value: number, name: string) => {
  return (((100 * value) / nutrients.value.mineral[name])).toFixed(2)
}

const percentCountVitamin = (value: number, name: string) => {
  return (((100 * value) / nutrients.value.vitamin[name])).toFixed(2)
}

interface IData {
  [NutrientType.Mineral]: Record<MineralName, number>,
  [NutrientType.Vitamin]: Record<VitaminName, number>
}

const data = ref<IData>({
  [NutrientType.Mineral]: {
    [MineralName.Calcium]: 0,
    [MineralName.Magnesium]: 0,
    [MineralName.Ferrum]: 0,
    [MineralName.Phosphorus]: 0,
    [MineralName.Zink]: 0
  },
  [NutrientType.Vitamin]: {
    [VitaminName.A]: 0,
    [VitaminName.B1]: 0,
    [VitaminName.Choline]: 0,
    [VitaminName.C]: 0,
    [VitaminName.D]: 0,
    [VitaminName.E]: 0,
    [VitaminName.K]: 0
  }
})

const addedProducts = ref<ISelectedProduct[]>([])

const addProducts = function (arr: Array<ISelectedProduct>) {
  arr.forEach(p => {
    const obj = addedProducts.value.find(elem => elem.name === p.name);

    if (obj) {
      obj.weight += p.weight
    } else {
      addedProducts.value.push({ ...p })
    }
  })
  console.log(addedProducts.value)
  updateNutrientsData(addedProducts.value)
}

const updateNutrientsData = function (arr: Array<ISelectedProduct>) {
  Object.keys(data.value[NutrientType.Mineral]).forEach((key: MineralName) => {
    data.value[NutrientType.Mineral][key] = 0
  })
  Object.keys(data.value[NutrientType.Vitamin]).forEach((key) => {
    (data.value[NutrientType.Vitamin] as any)[key] = 0
  })

  const mineralsData = data.value[NutrientType.Mineral]
  const vitaminsData = data.value[NutrientType.Vitamin]

  arr.forEach(p => {
    p.minerals.forEach((mineral: IProductMineralData) => {
      mineralsData[mineral.name] += mineral.value * p.weight / 100;
      mineralsData[mineral.name] = +(mineralsData[mineral.name]).toFixed(3)
    })

    p.vitamins.forEach((vitamin: IProductVitaminData) => {
      vitaminsData[vitamin.name] += vitamin.value * p.weight / 100;
      vitaminsData[vitamin.name] = +(vitaminsData[vitamin.name]).toFixed(3)
    })
  })
}

const removeFromAdded = (p: ISelectedProduct) => {
  addedProducts.value = addedProducts.value.filter(product => product.name !== p.name)
  console.log(addedProducts.value)
  updateNutrientsData(addedProducts.value)
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

  button.product-delete
    position: absolute
    top: 0
    right: 0
</style>