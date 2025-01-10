<template>
  <div class="products-list">
    <div
      class="product"
      v-for="product in store.products"
      :key="product.id"
      @click="goPDP(product.id)"
    >
      <img :src="product.thumbnail" alt="" />
      <h2>Brand: {{ product.brand }}</h2>
      <p>Description: {{ product.description }}</p>
      <p>Price: ${{ product.price }}</p>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'CatalogView',
})
</script>

<script setup>
import { onMounted } from 'vue'
import { productsStore } from '@/stores/products'
import { useRouter } from 'vue-router'

const store = productsStore()
const router = useRouter()

const goPDP = (id) => {
  router.push({ name: 'PDP', params: { id } })
}

onMounted(async () => {
  await store.fetchProductsFromDB()
  console.log('Mounted', store.products)
})
</script>

<style scoped>
.products-list {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.product {
  border-radius: 15px;
  flex-basis: 28%;
  margin: 8px;
  padding: 16px;
  box-shadow: 0px 0px 14px 1px #c5c4dc;
  min-width: 270px;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  cursor: pointer;
}

.product img {
  width: 70%;
}
</style>
