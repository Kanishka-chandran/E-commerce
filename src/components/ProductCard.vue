<template>
  <div class="card">
    <img :src="product.image" :alt="product.name" class="card-image" />
    <h3 class="card-title">{{ product.name }}</h3>
    <p class="card-description">{{ product.description }}</p>
    <p class="card-price">₹{{ product.price }}</p>
    <router-link :to="`/payment/${product.id}`">
      <button class="card-button">Add to Cart</button>
    </router-link>
  </div>
</template>

<script>
export default {
  props: ['product']
}
</script>

<style scoped>
.card {
  background-color: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.2s ease;
  height: 100%;
}

.card:hover {
  transform: translateY(-4px);
}

.card-image {
  width: 100%;
  height: 220px;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 12px;
}

.card-title {
  font-size: 1.1rem;
  font-weight: 600;
  margin: 8px 0;
  text-align: center;
}

.card-description {
  font-size: 0.95rem;
  color: #666;
  margin-bottom: 6px;
  text-align: center;
}

.card-price {
  color: #e91e63;
  font-weight: bold;
  margin: 6px 0;
}

.card-button {
  background-color: #1976d2;
  color: white;
  padding: 10px 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.95rem;
  transition: background 0.3s;
  margin-top: auto;
}

.card-button:hover {
  background-color: #1565c0;
}
</style>