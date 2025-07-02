<template>
  <div class="container">
    <div class="grid">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>

<script>
import ProductCard from '../components/ProductCard.vue'
import { products } from '../data/products'

export default {
  components: { ProductCard },
  data() {
    return { products }
  }
}
</script>

<style scoped>
.container {
  padding: 24px;
}
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
}
</style>