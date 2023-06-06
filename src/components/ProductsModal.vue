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
        <product-card
            v-for="p in products"
            :name="p.name"
            :image-name="p.image"
            :key="p.name"
            @click="addToSelected(p)"
        />
      </div>
      <div class="selected">
        <p class="selected-header">Selected products</p>
        <div class="selected-products">
          <div class="selected-product" v-for="s in selected">
            <button class="minus-weight"
                    @click="s.weight >= 200 ? s.weight -= 100 : remove(s)">–
            </button>
            <p>{{ s.name }} - {{ s.weight }} г.</p>
            <button class="plus-weight"
                    @click="s.weight <= 900 ? s.weight += 100 : s.weight">+
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

<script setup lang="ts">
import { computed, defineEmits, defineProps, ref } from "vue";
import { IProduct } from "@/types/Products";
import ProductCard from "@/components/ProductCard.vue";
import { useDataStore } from "@/store/DataStore";

defineProps({
  show: Boolean
})

const emit = defineEmits(['closeModal', 'addProducts'])

const selected = ref<ISelectedProduct[]>([])

export interface ISelectedProduct extends IProduct {
  weight: number
}

function addToSelected(p: IProduct) {
  const selectedProduct: ISelectedProduct = {
    weight: 100,
    ...p
  }

  if (!selected.value.some(elem => elem.name === selectedProduct.name)) {
    selected.value.push(selectedProduct)
  }
}

function addProducts(arr: Array<IProduct>) {
  emit('addProducts', arr)
  emit('closeModal')
  selected.value = []
}

function remove(p: IProduct) {
  selected.value = selected.value.filter(i => i !== p)
}

const products = computed(() => {
  return useDataStore().products
})
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