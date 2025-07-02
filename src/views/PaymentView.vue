<template>
  <div class="payment-container">
    <div class="payment-box">
      <h2>Checkout</h2>
      <p>You selected: {{ product.name }}</p>
      <p>Price: ₹{{ product.price }}</p>
      <button @click="handlePayment">Pay Now</button>
    </div>
  </div>
</template>

<script>
import { products } from '../data/products.js'

export default {
  data() {
    return {
      product: {}
    }
  },
  created() {
    const id = parseInt(this.$route.params.id)
    this.product = products.find(p => p.id === id) || { name: 'Unknown', price: 0 }
  },
  methods: {
    handlePayment() {
      alert('Payment completed!')
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
.payment-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  background-color: #f3f4f6;
}

.payment-box {
  background: white;
  padding: 32px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 400px;
  width: 100%;
}

button {
  margin-top: 20px;
  background-color: #16a34a;
  color: white;
  border: none;
  padding: 10px 24px;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.3s ease;
  width: 100%;
}

button:hover {
  background-color: #15803d;
}
</style>