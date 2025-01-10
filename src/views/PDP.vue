<template>
  <button @click="router.push({ name: 'Catalog' })">Back to Catalog</button>
  <div class="product">
    <div class="product-image">
      <img :src="selectedProduct.thumbnail" alt="" />
    </div>

    <div class="product-details">
      <p>Brand: {{ selectedProduct.brand }}</p>
      <p>Description: {{ selectedProduct.description }}</p>
      <h2>Price: ${{ selectedProduct.price }}</h2>
    </div>
  </div>
</template>

<script>
import { defineComponent, computed } from 'vue'

export default defineComponent({
  name: 'PDP',
})
</script>

<script setup>
import { computed } from 'vue'
import { productsStore } from '@/stores/products'
import { useRoute, useRouter } from 'vue-router'

const store = productsStore()
const router = useRouter()
const route = useRoute()

const selectedProduct = computed(() => {
  return store.products.find((item) => item.id === Number(route.params.id))
})
</script>

<style scoped>
* {
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

.product {
  display: flex;
  margin-top: 50px;
}

.product-image {
  margin-right: 24px;
}

button {
  display: inline-block;
  padding: 12px 24px;
  font-size: 16px;
  /* font-weight:; */
  color: #ffffff;
  background: linear-gradient(90deg, #7795b9, #9c8ce7); /* Gradient effect */
  border: none;
  border-radius: 8px; /* Smooth edges */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Subtle shadow */
  text-transform: uppercase;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease; /* Smooth hover effect */
}

button:hover {
  background: linear-gradient(90deg, #2473af, #7154db); /* Reverse gradient on hover */
  transform: translateY(-3px); /* Subtle lift effect */
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2); /* Slightly deeper shadow */
}

button:active {
  transform: translateY(1px); /* Button presses down slightly */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Lighter shadow on click */
}
</style>
