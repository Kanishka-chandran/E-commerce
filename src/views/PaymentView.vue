<template>
  <div class="checkout-container">
    <div class="checkout-steps">
      <div class="step" :class="{ active: currentStep === 1 }">1. Address</div>
      <div class="step" :class="{ active: currentStep === 2 }">2. Payment</div>
      <div class="step" :class="{ active: currentStep === 3 }">3. Review</div>
    </div>
    
    <div class="checkout-content">
      <!-- Step 1: Address -->
      <div v-if="currentStep === 1" class="address-step">
        <h2>Delivery Address</h2>
        <div class="address-form">
          <div class="form-group">
            <label>Full Name</label>
            <input v-model="address.fullName" type="text" placeholder="Enter your full name">
          </div>
          <div class="form-group">
            <label>Mobile Number</label>
            <input v-model="address.mobile" type="tel" placeholder="Enter mobile number">
          </div>
          <div class="form-group">
            <label>Pincode</label>
            <input v-model="address.pincode" type="text" placeholder="Enter pincode">
          </div>
          <div class="form-group">
            <label>Address</label>
            <textarea v-model="address.fullAddress" placeholder="Enter full address"></textarea>
          </div>
          <div class="form-group">
            <label>City</label>
            <input v-model="address.city" type="text" placeholder="Enter city">
          </div>
          <div class="form-group">
            <label>State</label>
            <input v-model="address.state" type="text" placeholder="Enter state">
          </div>
        </div>
        <button @click="currentStep = 2" class="next-btn">Continue to Payment</button>
      </div>
      
      <!-- Step 2: Payment -->
      <div v-if="currentStep === 2" class="payment-step">
        <h2>Select Payment Method</h2>
        <div class="payment-options">
          <div class="payment-method" 
               v-for="method in paymentMethods" 
               :key="method.id"
               :class="{ selected: selectedMethod === method.id }"
               @click="selectedMethod = method.id">
            <input type="radio" 
                   :id="'method-' + method.id" 
                   v-model="selectedMethod" 
                   :value="method.id" 
                   hidden>
            <label :for="'method-' + method.id">
              <i :class="method.icon"></i>
              <span>{{ method.name }}</span>
              <span v-if="method.description" class="description">{{ method.description }}</span>
            </label>
          </div>
        </div>
        
        <div class="order-summary">
          <h3>Order Summary</h3>
          <div class="summary-item">
            <span>Subtotal</span>
            <span>₹{{ subtotal }}</span>
          </div>
          <div class="summary-item">
            <span>Shipping</span>
            <span>₹{{ shipping }}</span>
          </div>
          <div class="summary-item total">
            <span>Total</span>
            <span>₹{{ total }}</span>
          </div>
        </div>
        
        <div class="action-buttons">
          <button @click="currentStep = 1" class="back-btn">Back</button>
          <button @click="currentStep = 3" class="next-btn">Review Order</button>
        </div>
      </div>
      
      <!-- Step 3: Review -->
      <div v-if="currentStep === 3" class="review-step">
        <h2>Review Your Order</h2>
        
        <div class="address-review">
          <h3>Delivery Address</h3>
          <p>{{ address.fullName }}</p>
          <p>{{ address.fullAddress }}</p>
          <p>{{ address.city }}, {{ address.state }} - {{ address.pincode }}</p>
          <p>Mobile: {{ address.mobile }}</p>
        </div>
        
        <div class="payment-review">
          <h3>Payment Method</h3>
          <p>{{ selectedMethodName }}</p>
        </div>
        
        <div class="order-review">
          <h3>Order Items</h3>
          <div class="order-item" v-for="item in cartItems" :key="item.id">
            <img :src="item.image" :alt="item.name" class="item-image">
            <div class="item-details">
              <h4>{{ item.name }}</h4>
              <p>₹{{ item.price }} x {{ item.quantity }}</p>
            </div>
            <div class="item-total">₹{{ item.price * item.quantity }}</div>
          </div>
        </div>
        
        <div class="order-summary">
          <h3>Order Summary</h3>
          <div class="summary-item">
            <span>Subtotal</span>
            <span>₹{{ subtotal }}</span>
          </div>
          <div class="summary-item">
            <span>Shipping</span>
            <span>₹{{ shipping }}</span>
          </div>
          <div class="summary-item total">
            <span>Total</span>
            <span>₹{{ total }}</span>
          </div>
        </div>
        
        <div class="action-buttons">
          <button @click="currentStep = 2" class="back-btn">Back</button>
          <button @click="placeOrder" class="place-order-btn">Place Order</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      currentStep: 1,
      address: {
        fullName: '',
        mobile: '',
        pincode: '',
        fullAddress: '',
        city: '',
        state: ''
      },
      selectedMethod: 'cod',
      paymentMethods: [
        { id: 'cod', name: 'Cash on Delivery', icon: 'fas fa-money-bill-wave', description: 'Pay when you receive the order' },
        { id: 'upi', name: 'UPI', icon: 'fas fa-mobile-alt', description: 'Pay using UPI apps like Google Pay, PhonePe' },
        { id: 'card', name: 'Credit/Debit Card', icon: 'far fa-credit-card', description: 'Pay using your card' },
        { id: 'netbanking', name: 'Net Banking', icon: 'fas fa-university', description: 'Pay directly from your bank account' }
      ]
    }
  },
  computed: {
    ...mapGetters(['cartItems', 'subtotal', 'shipping', 'total']),
    selectedMethodName() {
      const method = this.paymentMethods.find(m => m.id === this.selectedMethod)
      return method ? method.name : ''
    }
  },
  methods: {
    placeOrder() {
      // Here you would typically send the order to your backend
      const order = {
        items: this.cartItems,
        address: this.address,
        paymentMethod: this.selectedMethod,
        subtotal: this.subtotal,
        shipping: this.shipping,
        total: this.total,
        status: 'pending'
      }
      
      console.log('Order placed:', order)
      alert('Order placed successfully!')
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');

.checkout-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.checkout-steps {
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  position: relative;
}

.checkout-steps::before {
  content: '';
  position: absolute;
  top: 15px;
  left: 0;
  right: 0;
  height: 2px;
  background: #ddd;
  z-index: 0;
}

.step {
  position: relative;
  text-align: center;
  padding: 10px;
  background: white;
  z-index: 1;
  color: #777;
}

.step.active {
  color: #16a34a;
  font-weight: bold;
}

.step::after {
  content: '';
  position: absolute;
  top: 15px;
  left: 50%;
  width: 20px;
  height: 20px;
  background: #ddd;
  border-radius: 50%;
  transform: translateX(-50%);
  z-index: -1;
}

.step.active::after {
  background: #16a34a;
}

.address-form {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 30px;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: 500;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.form-group textarea {
  height: 80px;
}

.payment-options {
  margin-bottom: 30px;
}

.payment-method {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 10px;
  cursor: pointer;
  transition: all 0.3s;
}

.payment-method.selected {
  border-color: #16a34a;
  background: #f0fff4;
}

.payment-method label {
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
}

.payment-method i {
  font-size: 24px;
  color: #555;
}

.payment-method.selected i {
  color: #16a34a;
}

.payment-method .description {
  display: block;
  font-size: 0.9em;
  color: #777;
  margin-top: 5px;
}

.order-summary {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
}

.summary-item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

.summary-item.total {
  font-weight: bold;
  font-size: 1.1em;
  border-top: 1px solid #ddd;
  padding-top: 10px;
}

.action-buttons {
  display: flex;
  justify-content: space-between;
}

button {
  padding: 12px 24px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

.next-btn, .place-order-btn {
  background: #16a34a;
  color: white;
}

.next-btn:hover, .place-order-btn:hover {
  background: #15803d;
}

.back-btn {
  background: #f0f0f0;
}

.back-btn:hover {
  background: #e0e0e0;
}

.address-review, .payment-review, .order-review {
  margin-bottom: 30px;
  padding: 20px;
  border: 1px solid #eee;
  border-radius: 8px;
}

.order-item {
  display: flex;
  gap: 20px;
  align-items: center;
  padding: 15px 0;
  border-bottom: 1px solid #eee;
}

.item-image {
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 4px;
}

.item-details {
  flex: 1;
}

.item-total {
  font-weight: bold;
}
</style>