<template>
  <div class="cart-container">
    <div class="cart-items">
      <h2>Your Cart ({{ cartQuantity }})</h2>
      
      <div v-if="cartItems.length === 0" class="empty-cart">
        <p>Your cart is empty</p>
        <router-link to="/products">
          <button class="continue-shopping-btn">Continue Shopping</button>
        </router-link>
      </div>
      
      <div v-else>
        <div class="cart-item" v-for="item in cartItems" :key="item.id">
          <img :src="item.image" :alt="item.name" class="item-image" />
          <div class="item-details">
            <h3>{{ item.name }}</h3>
            <p class="item-price">₹{{ item.price }}</p>
            <div class="quantity-controls">
              <button @click="decreaseQuantity(item)">-</button>
              <span class="quantity">{{ item.quantity }}</span>
              <button @click="increaseQuantity(item)">+</button>
            </div>
            <button class="remove-btn" @click="removeItem(item.id)">Remove</button>
          </div>
        </div>
        
        <div class="cart-summary">
          <h3>Order Summary</h3>
          <div class="summary-row">
            <span>Subtotal</span>
            <span>₹{{ subtotal }}</span>
          </div>
          <div class="summary-row">
            <span>Shipping</span>
            <span>₹{{ shipping }}</span>
          </div>
          <div class="summary-row total">
            <span>Total</span>
            <span>₹{{ total }}</span>
          </div>
          
          <router-link to="/checkout">
            <button class="checkout-btn">Proceed to Checkout</button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters(['cartItems', 'cartQuantity', 'subtotal', 'shipping', 'total']),
  },
  methods: {
    ...mapActions(['updateCartItem', 'removeFromCart']),
    increaseQuantity(item) {
      this.updateCartItem({ id: item.id, quantity: item.quantity + 1 })
    },
    decreaseQuantity(item) {
      if (item.quantity > 1) {
        this.updateCartItem({ id: item.id, quantity: item.quantity - 1 })
      } else {
        this.removeItem(item.id)
      }
    },
    removeItem(id) {
      this.removeFromCart(id)
    }
  }
}
</script>

<style scoped>
.cart-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.cart-items h2 {
  color: #333;
  border-bottom: 1px solid #eee;
  padding-bottom: 15px;
  margin-bottom: 20px;
}

.empty-cart {
  text-align: center;
  padding: 40px 0;
}

.empty-cart p {
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 20px;
}

.continue-shopping-btn {
  background-color: #1976d2;
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s;
}

.continue-shopping-btn:hover {
  background-color: #1565c0;
}

.cart-item {
  display: flex;
  gap: 20px;
  padding: 20px 0;
  border-bottom: 1px solid #eee;
  align-items: center;
}

.item-image {
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 8px;
}

.item-details {
  flex: 1;
}

.item-details h3 {
  margin: 0 0 8px 0;
  color: #333;
}

.item-price {
  font-weight: bold;
  color: #e91e63;
  margin: 8px 0;
}

.quantity-controls {
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 15px 0;
}

.quantity-controls button {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid #ddd;
  background: white;
  cursor: pointer;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.quantity-controls button:hover {
  background: #f0f0f0;
}

.quantity {
  min-width: 20px;
  text-align: center;
}

.remove-btn {
  background-color: #f44336;
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: background-color 0.3s;
}

.remove-btn:hover {
  background-color: #d32f2f;
}

.cart-summary {
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  margin-top: 30px;
}

.cart-summary h3 {
  margin-top: 0;
  color: #333;
  border-bottom: 1px solid #ddd;
  padding-bottom: 10px;
}

.summary-row {
  display: flex;
  justify-content: space-between;
  margin: 15px 0;
}

.summary-row.total {
  font-weight: bold;
  font-size: 1.1rem;
  border-top: 1px solid #ddd;
  padding-top: 15px;
}

.checkout-btn {
  width: 100%;
  background-color: #4caf50;
  color: white;
  padding: 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  margin-top: 20px;
  transition: background-color 0.3s;
}

.checkout-btn:hover {
  background-color: #388e3c;
}

@media (max-width: 768px) {
  .cart-item {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .item-image {
    width: 100%;
    height: auto;
    max-height: 200px;
  }
}
</style>