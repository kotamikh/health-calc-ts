<template>
  <div class="modal-block"
       v-if="show"
  >
    <h3>Choose the products</h3>
    <button class="close-btn"
            @click="$emit('closeModal')"
    >Close
    </button>
    <div class="choose-panel">
      <div class="product-buttons">
        <button
            v-for="p in products"
            :key="p.name"
            @click="addToSelected(p)"
        >{{ p.name }}
          <img :src="getUrl(p.image)" alt="product-img"/>
        </button>
      </div>
      <div class="selected">
        <p class="selected-header">Selected products</p>
        <div class="selected-products">
          <div class="selected-product" v-for="p in selected">
            <button class="minus-weight"
                    @click="p.weight >= 200 ? p.weight -= 100 : remove(p)">–
            </button>
            <p>{{ p.name }} - {{ p.weight }} г.</p>
            <button class="plus-weight"
                    @click="p.weight <= 900 ? p.weight += 100 : p.weight">+
            </button>
          </div>
        </div>
      </div>
      <button class="add-btn"
              @click="addProducts(selected)"
      >Add
      </button>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "ProductsModal"
}
</script>

<script setup lang="ts">
import { ref, defineProps, defineEmits } from "vue";
import { Product, ProductName } from "@/types/Products";

const props = defineProps({
  show: Boolean
})

const emit = defineEmits(['closeModal', 'addProducts'])

function getUrl(name: string) {
  return new URL(`/src/assets/images/${ name }.png`, import.meta.url)
}

function addToSelected(p: HTMLDivElement) {
  if(!selected.value.includes(p)) {
    selected.value.push(p)
  }
}

function addProducts(arr: Array<HTMLDivElement>) {
  emit('addProducts', arr)
  emit('closeModal')
  selected.value = []
}

function remove(p: HTMLDivElement) {
  selected.value = selected.value.filter(i => i !== p)
}

const products = ref<Product[]>([
  {
    name: ProductName.Banana,
    image: "banana",
    weight: 100,
    Calcium: 8,
    Magnesium: 42,
    Ferrum: 0.6,
    Phosphorus: 28,
    Zink: 0.15,
    A: 0.02,
    B1: 0.04,
    Choline: 9.8,
    C: 10,
    D: 0,
    E: 0.4,
    K: 0.0005
  },
  {
    name: ProductName.Tangerine,
    image: "tangerine",
    weight: 100,
    Calcium: 35,
    Magnesium: 11,
    Ferrum: 0.1,
    Phosphorus: 17,
    Zink: 0.07,
    A: 0.01,
    B1: 0.06,
    Choline: 10.2,
    C: 38,
    D: 0,
    E: 0.2,
    K: 0,
  },
  {
    name: ProductName.Kiwi,
    image: "kiwi",
    weight: 100,
    Calcium: 40,
    Magnesium: 25,
    Ferrum: 0.8,
    Phosphorus: 34,
    Zink: 0.14,
    A: 0.015,
    B1: 0.02,
    Choline: 7.8,
    C: 180,
    D: 0,
    E: 0.3,
    K: 0.04,
  },
  {
    name: ProductName.Pear,
    image: "pear",
    weight: 100,
    Calcium: 19,
    Magnesium: 12,
    Ferrum: 2.3,
    Phosphorus: 16,
    Zink: 0.19,
    A: 0.002,
    B1: 0.02,
    Choline: 5.1,
    C: 5,
    D: 0,
    E: 0.4,
    K: 0.004
  },
  {
    name: ProductName.Strawberry,
    image: "strawberry",
    weight: 100,
    Calcium: 40,
    Magnesium: 18,
    Ferrum: 1.2,
    Phosphorus: 23,
    Zink: 0.09,
    A: 0.005,
    B1: 0.03,
    Choline: 5.7,
    C: 60,
    D: 0,
    E: 0.5,
    K: 0.0002
  },
  {
    name: ProductName.Broccoli,
    image: "broccoli",
    weight: 100,
    Calcium: 47,
    Magnesium: 21,
    Ferrum: 0.73,
    Phosphorus: 66,
    Zink: 0.41,
    A: 0.03,
    B1: 0.07,
    Choline: 18.7,
    C: 89.2,
    D: 0,
    E: 0.78,
    K: 0.101
  },
  {
    name: ProductName.Carrot,
    image: "carrot",
    weight: 100,
    Calcium: 27,
    Magnesium: 38,
    Ferrum: 0.7,
    Phosphorus: 55,
    Zink: 0.4,
    A: 2,
    B1: 0.06,
    Choline: 8.8,
    C: 5,
    D: 0,
    E: 0.4,
    K: 0.013
  },
  {
    name: ProductName.Cob,
    image: "cob",
    weight: 100,
    Calcium: 34,
    Magnesium: 4104,
    Ferrum: 3.7,
    Phosphorus: 301,
    Zink: 1.73,
    A: 0.053,
    B1: 0.38,
    Choline: 71,
    C: 0,
    D: 0,
    E: 1.3,
    K: 0.0003
  }
])

const selected = ref<HTMLDivElement[]>([])
</script>

<style scoped lang="sass">
.modal-block
  top: 50%
  left: 50%
  z-index: 2
  position: absolute
  transform: translateX(-50%) translateY(-50%)

  width: 95%
  height: 90%
  margin: auto
  padding: 10px
  border-radius: 10px
  box-sizing: border-box
  background-color: white

  h3
    margin: 10px 0
    text-align: center

  .close-btn
    top: 10px
    right: 20px
    position: absolute

    padding: 5px 10px
    border-radius: 15px
    border: 2px solid black
    background-color: #e3e3e3

  .choose-panel
    height: 85%
    display: flex
    position: relative

    .product-buttons
      width: 60%
      padding: 40px 0
      height: fit-content

      gap: 10px
      display: flex
      flex-wrap: wrap

      button
        width: 100px
        height: 100px
        border-radius: 5%
        border: 2px solid #818181
        background-color: #e3e3e3

    .selected
      width: 40%
      font-weight: bold

      .selected-header
        text-align: center
        padding-bottom: 20px

      .selected-products
        gap: 10px
        display: flex
        flex-direction: column

        .selected-product
          gap: 20px
          display: flex
          align-items: center

          p
            padding: 10px
            border-radius: 10px
            background-color: #e3e3e3

            display: flex
            align-items: center
            justify-content: center


          button
            width: 25px
            height: 25px
            border-radius: 50%
            align-content: center
            border: 1px solid #818181

    .add-btn
      bottom: 10px
      right: 120px
      position: absolute

      padding: 5px 10px
      border-radius: 15px
      border: 2px solid black
      background-color: #e3e3e3
</style>