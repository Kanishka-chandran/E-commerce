<template>
  <div class="card">
    <img :src="product.image" :alt="product.name" class="card-image" />
    <h3 class="card-title">{{ product.name }}</h3>
    <p class="card-description">{{ product.description }}</p>
    <p class="card-price">₹{{ product.price }}</p>
    
    <div class="quantity-controls" v-if="isInCart">
      <button @click="decreaseQuantity">-</button>
      <span>{{ cartQuantity }}</span>
      <button @click="increaseQuantity">+</button>
    </div>
    
    <button 
      class="card-button" 
      @click="addToCart"
      v-if="!isInCart"
    >
      Add to Cart
    </button>
    
    <router-link to="/cart">
      <button class="card-button view-cart" v-if="isInCart">
        View Cart ({{ cartQuantity }})
      </button>
    </router-link>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'ProductCard',
  props: {
    product: {
      type: Object,
      required: true,
      validator: (product) => {
        return ['id', 'name', 'price', 'image'].every(key => key in product)
      }
    }
  },
  computed: {
    ...mapGetters(['getCartItem', 'cartItems']),
    isInCart() {
      return !!this.getCartItem(this.product.id)
    },
    cartQuantity() {
      const item = this.getCartItem(this.product.id)
      return item ? item.quantity : 0
    }
  },
  methods: {
    ...mapActions(['addItemToCart', 'updateCartItem']),
    addToCart() {
      this.addItemToCart({ 
        ...this.product,
        quantity: 1
      })
      // Optional: Show success message
      if (typeof this.$toast?.success === 'function') {
        this.$toast.success(`${this.product.name} added to cart!`)
      }
    },
    increaseQuantity() {
      if (this.cartQuantity < 100) {
        this.updateCartItem({
          id: this.product.id,
          quantity: this.cartQuantity + 1
        })
      }
    },
    decreaseQuantity() {
      const newQuantity = this.cartQuantity - 1
      this.updateCartItem({
        id: this.product.id,
        quantity: newQuantity > 0 ? newQuantity : 0
      })
    }
  }
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
.quantity-controls {
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 10px 0;
}

.quantity-controls button {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid #ddd;
  background: white;
  cursor: pointer;
  font-size: 16px;
}

.quantity-controls button:hover {
  background: #f0f0f0;
}

.quantity-controls span {
  min-width: 20px;
  text-align: center;
}

.view-cart {
  background-color: #ff9f00 !important;
}

.view-cart:hover {
  background-color: #e59400 !important;
}

</style>