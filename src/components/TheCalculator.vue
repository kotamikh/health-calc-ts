<template>
  <div class="calculator-block">
    <div class="added-products">
      <div class="product"
           v-for="p in addedProducts">{{ p.name }}
        <img :src="getUrl(p.image)" alt="product-img">
        <p>{{ p.weight }} г.</p>
      </div>
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
</template>

<script lang="ts">
export default {
  name: "TheCalculator"
}
</script>

<script setup lang="ts">
import { ref } from "vue";
import { Mineral, MineralName, NutrientType, Vitamin, VitaminName } from "@/types/Nutrients";
import ProductsModal from "@/components/ProductsModal.vue";

const showModal = ref(false)

function getUrl(name: string) {
  return new URL(`/src/assets/images/${ name }.png`, import.meta.url)
}

const openModal = function () {
  showModal.value = true
}

const addProducts = function (arr: Array<HTMLDivElement>) {
  arr.forEach((i) => {
    if (addedProducts.value.includes(i)) {
      // plusWeight(i)
    } else {
      addedProducts.value.push(i)
      calculateNutrients(i)
    }
  })
}

// const plusWeight = function (product: HTMLDivElement) {
//   console.log(addedProducts.value.includes(product))
//   product = JSON.parse(JSON.stringify(product))
// }

const calculateNutrients = function(i: HTMLDivElement) {
  let product = JSON.parse(JSON.stringify(i))
  let min = JSON.parse(JSON.stringify(minerals))
  let vit = JSON.parse(JSON.stringify(vitamins))
  console.log(min._rawValue, vit._rawValue)
  for (let i in min._rawValue) {
    console.log(i.name)
  }
}

const minerals = ref<Mineral[]>([
  {
    type: NutrientType.Mineral,
    name: MineralName.Calcium,
    value: 0,
    percent: 0
  },
  {
    type: NutrientType.Mineral,
    name: MineralName.Magnesium,
    value: 0,
    percent: 0
  },
  {
    type: NutrientType.Mineral,
    name: MineralName.Ferrum,
    value: 0,
    percent: 0
  },
  {
    type: NutrientType.Mineral,
    name: MineralName.Phosphorus,
    value: 0,
    percent: 0
  },
  {
    type: NutrientType.Mineral,
    name: MineralName.Zink,
    value: 0,
    percent: 0
  }
])

const vitamins = ref<Vitamin[]>([
  {
    type: NutrientType.Vitamin,
    name: VitaminName.A,
    value: 0,
    percent: 0
  },
  {
    type: NutrientType.Vitamin,
    name: VitaminName.B1,
    value: 0,
    percent: 0
  },
  {
    type: NutrientType.Vitamin,
    name: VitaminName.Choline,
    value: 0,
    percent: 0
  },
  {
    type: NutrientType.Vitamin,
    name: VitaminName.C,
    value: 0,
    percent: 0
  },
  {
    type: NutrientType.Vitamin,
    name: VitaminName.D,
    value: 0,
    percent: 0
  },
  {
    type: NutrientType.Vitamin,
    name: VitaminName.E,
    value: 0,
    percent: 0
  },
  {
    type: NutrientType.Vitamin,
    name: VitaminName.K,
    value: 0,
    percent: 0
  }
])

const addedProducts = ref<HTMLDivElement[]>([])
</script>

<style scoped lang="sass">
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

    .product
      width: 120px
      height: 120px
      font-weight: bold

      display: flex
      align-items: center
      flex-direction: column
      border: 2px solid black

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