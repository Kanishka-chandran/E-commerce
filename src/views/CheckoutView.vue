<template>
  <div class="checkout-container">
    <div class="checkout-steps">
      <div class="step" :class="{ active: currentStep === 1, completed: currentStep > 1 }">1. Address</div>
      <div class="step" :class="{ active: currentStep === 2, completed: currentStep > 2 }">2. Payment</div>
      <div class="step" :class="{ active: currentStep === 3 }">3. Review</div>
    </div>
    
    <div class="checkout-content">
      <!-- Step 1: Address -->
      <div v-if="currentStep === 1" class="address-step">
        <h2>Delivery Address</h2>
        <form @submit.prevent="validateAddress" class="address-form">
          <div class="form-group">
            <label>Full Name*</label>
            <input v-model="address.fullName" type="text" placeholder="Enter your full name" required>
            <span class="error" v-if="errors.fullName">{{ errors.fullName }}</span>
          </div>
          <div class="form-group">
            <label>Mobile Number*</label>
            <input v-model="address.mobile" type="tel" placeholder="Enter mobile number" required>
            <span class="error" v-if="errors.mobile">{{ errors.mobile }}</span>
          </div>
          <div class="form-group">
            <label>Pincode*</label>
            <input v-model="address.pincode" type="text" placeholder="Enter pincode" required>
            <span class="error" v-if="errors.pincode">{{ errors.pincode }}</span>
          </div>
          <div class="form-group">
            <label>Address*</label>
            <textarea v-model="address.fullAddress" placeholder="Enter full address" required></textarea>
            <span class="error" v-if="errors.fullAddress">{{ errors.fullAddress }}</span>
          </div>
          <div class="form-group">
            <label>City*</label>
            <input v-model="address.city" type="text" placeholder="Enter city" required>
            <span class="error" v-if="errors.city">{{ errors.city }}</span>
          </div>
          <div class="form-group">
            <label>State*</label>
            <input v-model="address.state" type="text" placeholder="Enter state" required>
            <span class="error" v-if="errors.state">{{ errors.state }}</span>
          </div>
          <button type="submit" class="next-btn">Continue to Payment</button>
        </form>
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
            <span>₹{{ subtotal.toFixed(2) }}</span>
          </div>
          <div class="summary-item">
            <span>Shipping</span>
            <span>₹{{ shipping.toFixed(2) }}</span>
          </div>
          <div class="summary-item total">
            <span>Total</span>
            <span>₹{{ total.toFixed(2) }}</span>
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
          <button @click="currentStep = 1" class="edit-btn">Edit Address</button>
        </div>
        
        <div class="payment-review">
          <h3>Payment Method</h3>
          <p>{{ selectedMethodName }}</p>
          <button @click="currentStep = 2" class="edit-btn">Change Payment</button>
        </div>
        
        <div class="order-review">
          <h3>Order Items ({{ cartQuantity }})</h3>
          <div class="order-item" v-for="item in cartItems" :key="item.id">
            <img :src="item.image" :alt="item.name" class="item-image">
            <div class="item-details">
              <h4>{{ item.name }}</h4>
              <p>₹{{ item.price.toFixed(2) }} x {{ item.quantity }}</p>
            </div>
            <div class="item-total">₹{{ (item.price * item.quantity).toFixed(2) }}</div>
          </div>
        </div>
        
        <div class="order-summary">
          <h3>Order Summary</h3>
          <div class="summary-item">
            <span>Subtotal</span>
            <span>₹{{ subtotal.toFixed(2) }}</span>
          </div>
          <div class="summary-item">
            <span>Shipping</span>
            <span>₹{{ shipping.toFixed(2) }}</span>
          </div>
          <div class="summary-item total">
            <span>Total</span>
            <span>₹{{ total.toFixed(2) }}</span>
          </div>
        </div>
        
        <div class="action-buttons">
          <button @click="currentStep = 2" class="back-btn">Back</button>
          <button @click="placeOrder" class="place-order-btn">
            <span v-if="!isProcessing">Place Order</span>
            <span v-else class="processing">
              <i class="fas fa-spinner fa-spin"></i> Processing...
            </span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data() {
    return {
      currentStep: 1,
      isProcessing: false,
      address: {
        fullName: '',
        mobile: '',
        pincode: '',
        fullAddress: '',
        city: '',
        state: ''
      },
      errors: {},
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
    ...mapGetters(['cartItems', 'cartQuantity', 'subtotal', 'shipping', 'total']),
    selectedMethodName() {
      const method = this.paymentMethods.find(m => m.id === this.selectedMethod)
      return method ? method.name : ''
    }
  },
  methods: {
    ...mapActions(['clearCart', 'fetchCart']),
    validateAddress() {
      this.errors = {}
      let isValid = true
      
      if (!this.address.fullName.trim()) {
        this.errors.fullName = 'Full name is required'
        isValid = false
      }
      
      if (!this.address.mobile.trim()) {
        this.errors.mobile = 'Mobile number is required'
        isValid = false
      } else if (!/^\d{10}$/.test(this.address.mobile)) {
        this.errors.mobile = 'Enter a valid 10-digit mobile number'
        isValid = false
      }
      
      if (!this.address.pincode.trim()) {
        this.errors.pincode = 'Pincode is required'
        isValid = false
      } else if (!/^\d{6}$/.test(this.address.pincode)) {
        this.errors.pincode = 'Enter a valid 6-digit pincode'
        isValid = false
      }
      
      if (!this.address.fullAddress.trim()) {
        this.errors.fullAddress = 'Address is required'
        isValid = false
      }
      
      if (!this.address.city.trim()) {
        this.errors.city = 'City is required'
        isValid = false
      }
      
      if (!this.address.state.trim()) {
        this.errors.state = 'State is required'
        isValid = false
      }
      
      if (isValid) {
        this.currentStep = 2
      }
    },
    async placeOrder() {
      this.isProcessing = true
      
      try {
        // Simulate processing delay
        await new Promise(resolve => setTimeout(resolve, 1500))
        
        // Generate order ID
        const orderId = 'ORD-' + Date.now().toString().slice(-6)
        
        // Create order object
        const order = {
          id: orderId,
          items: [...this.cartItems],
          address: {...this.address},
          paymentMethod: this.selectedMethod,
          subtotal: this.subtotal,
          shipping: this.shipping,
          total: this.total,
          date: new Date().toISOString(),
          status: 'confirmed'
        }
        
        // In a real app, you would send this to your backend
        console.log('Order placed:', order)
        
        // Clear cart
        await this.clearCart()
        
        // Redirect to success page
        this.$router.push({
          path: '/order-success',
          query: {
            orderId: order.id,
            total: order.total.toFixed(2),
            items: order.items.length
          }
        })
      } catch (error) {
        console.error('Order placement failed:', error)
        alert('Payment failed. Please try again or use a different payment method.')
      } finally {
        this.isProcessing = false
      }
    }
  },
  async created() {
    await this.fetchCart()
  }
}
</script>

<style scoped>
.checkout-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.checkout-steps {
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
  position: relative;
  counter-reset: step;
}

.checkout-steps::before {
  content: '';
  position: absolute;
  top: 15px;
  left: 0;
  right: 0;
  height: 2px;
  background: #e0e0e0;
  z-index: 1;
}

.step {
  position: relative;
  z-index: 2;
  background: white;
  padding: 0 15px;
  color: #9e9e9e;
  font-weight: 500;
}

.step.active {
  color: #1976d2;
  font-weight: 600;
}

.step.completed {
  color: #4caf50;
}

.step::after {
  content: '';
  display: block;
  width: 30px;
  height: 30px;
  background: #e0e0e0;
  border-radius: 50%;
  margin: 10px auto 0;
  text-align: center;
  line-height: 30px;
  color: white;
}

.step.active::after {
  background: #1976d2;
  content: counter(step);
  counter-increment: step;
}

.step.completed::after {
  background: #4caf50;
  content: '✓';
}

.checkout-content {
  background: white;
  border-radius: 8px;
  padding: 30px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.address-step h2,
.payment-step h2,
.review-step h2 {
  margin-top: 0;
  color: #333;
  padding-bottom: 15px;
  border-bottom: 1px solid #eee;
  margin-bottom: 25px;
}

.address-form {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
  color: #555;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 10px 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
}

.form-group textarea {
  min-height: 80px;
  resize: vertical;
}

.error {
  color: #f44336;
  font-size: 0.8rem;
  margin-top: 5px;
  display: block;
}

.payment-options {
  display: grid;
  grid-template-columns: 1fr;
  gap: 15px;
  margin-bottom: 30px;
}

.payment-method {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  cursor: pointer;
  transition: all 0.3s;
}

.payment-method.selected {
  border-color: #1976d2;
  background-color: #f5f9ff;
}

.payment-method label {
  display: flex;
  align-items: center;
  gap: 15px;
  cursor: pointer;
}

.payment-method i {
  font-size: 1.5rem;
  color: #1976d2;
}

.payment-method .description {
  font-size: 0.9rem;
  color: #666;
  margin-left: auto;
}

.order-summary {
  background: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 30px;
}

.order-summary h3 {
  margin-top: 0;
  padding-bottom: 10px;
  border-bottom: 1px solid #eee;
}

.summary-item {
  display: flex;
  justify-content: space-between;
  margin: 15px 0;
}

.summary-item.total {
  font-weight: bold;
  font-size: 1.1rem;
  border-top: 1px solid #eee;
  padding-top: 15px;
}

.action-buttons {
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
}

.back-btn,
.next-btn,
.place-order-btn {
  padding: 12px 24px;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s;
}

.back-btn {
  background: #f5f5f5;
  color: #333;
}

.back-btn:hover {
  background: #e0e0e0;
}

.next-btn,
.place-order-btn {
  background: #1976d2;
  color: white;
}

.next-btn:hover,
.place-order-btn:hover {
  background: #1565c0;
}

.place-order-btn {
  background: #4caf50;
}

.place-order-btn:hover {
  background: #388e3c;
}

.address-review,
.payment-review {
  background: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 30px;
}

.address-review h3,
.payment-review h3,
.order-review h3 {
  margin-top: 0;
  padding-bottom: 10px;
  border-bottom: 1px solid #eee;
}

.edit-btn {
  background: none;
  border: none;
  color: #1976d2;
  cursor: pointer;
  padding: 0;
  margin-top: 10px;
  font-size: 0.9rem;
}

.edit-btn:hover {
  text-decoration: underline;
}

.order-item {
  display: flex;
  gap: 20px;
  padding: 15px 0;
  border-bottom: 1px solid #eee;
  align-items: center;
}

.item-image {
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 4px;
}

.item-details {
  flex: 1;
}

.item-details h4 {
  margin: 0 0 5px 0;
}

.item-total {
  font-weight: 500;
}

.processing {
  display: flex;
  align-items: center;
  gap: 8px;
}

.fa-spinner {
  animation: fa-spin 1s infinite linear;
}

@keyframes fa-spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@media (max-width: 768px) {
  .address-form {
    grid-template-columns: 1fr;
  }
  
  .checkout-steps {
    flex-direction: column;
    align-items: flex-start;
    gap: 30px;
  }
  
  .checkout-steps::before {
    display: none;
  }
  
  .step {
    padding-left: 40px;
  }
  
  .step::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    background: #e0e0e0;
    border-radius: 50%;
  }
  
  .step.active::before,
  .step.completed::before {
    background: #1976d2;
    color: white;
    content: counter(step);
    counter-increment: step;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.7rem;
  }
  
  .step.completed::before {
    background: #4caf50;
    content: '✓';
  }
}
</style>