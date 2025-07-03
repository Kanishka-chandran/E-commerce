<template>
  <div class="payment-success-container">
    <div class="success-card">
      <div class="success-icon">
        <i class="fas fa-check-circle"></i>
      </div>
      <h1>Order Placed Successfully!</h1>
      
      <div class="order-info">
        <p><strong>Order ID:</strong> {{ orderId }}</p>
        <p><strong>Total Paid:</strong> ₹{{ total }}</p>
        <p><strong>Items:</strong> {{ items }} item(s)</p>
      </div>
      
      <div class="delivery-info">
        <h3>Your order will be delivered to:</h3>
        <p>{{ deliveryAddress }}</p>
      </div>
      
      <div class="actions">
        <router-link to="/orders" class="view-orders-btn">
          View My Orders
        </router-link>
        <router-link to="/" class="continue-shopping-btn">
          Continue Shopping
        </router-link>
      </div>
      
      <div class="support-info">
        <p>Need help? Contact our customer support at support@example.com</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    orderId() {
      return this.$route.query.orderId || 'ORD-000000'
    },
    total() {
      return this.$route.query.total || '0'
    },
    items() {
      return this.$route.query.items || '0'
    },
    deliveryAddress() {
      // In a real app, you would get this from the order details
      return 'Your delivery address will appear here'
    }
  }
}
</script>

<style scoped>
.payment-success-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  padding: 20px;
  background-color: #f5f5f5;
}

.success-card {
  background: white;
  border-radius: 12px;
  padding: 40px;
  text-align: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  width: 100%;
}

.success-icon {
  color: #4CAF50;
  font-size: 72px;
  margin-bottom: 20px;
}

h1 {
  color: #4CAF50;
  margin-bottom: 20px;
}

.order-info {
  margin: 25px 0;
  padding: 20px;
  background: #f9f9f9;
  border-radius: 8px;
  text-align: left;
}

.order-info p {
  margin: 8px 0;
}

.delivery-info {
  margin: 25px 0;
  text-align: left;
}

.delivery-info h3 {
  margin-bottom: 10px;
}

.actions {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 30px;
}

.view-orders-btn, .continue-shopping-btn {
  padding: 12px 24px;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  text-decoration: none;
}

.view-orders-btn {
  background: #1976d2;
  color: white;
}

.view-orders-btn:hover {
  background: #1565c0;
}

.continue-shopping-btn {
  background: white;
  color: #1976d2;
  border: 1px solid #1976d2;
}

.continue-shopping-btn:hover {
  background: #f0f7ff;
}

.support-info {
  margin-top: 30px;
  font-size: 14px;
  color: #666;
}
</style>