<template>
  <div class="order-success-container">
    <div class="order-success-content">
      <div class="success-icon">✓</div>
      <h1 class="success-title">Order Placed Successfully!</h1>
      <p class="success-message">Thank you for your purchase. Your order has been confirmed.</p>
      <router-link :to="{ name: 'Home' }" class="home-link">
        Return to Home
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OrderSuccess'
}
</script>

<style scoped>
.order-success-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f8f9fa;
  padding: 20px;
  text-align: center;
}

.order-success-content {
  max-width: 500px;
  padding: 40px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

.success-icon {
  font-size: 5rem;
  color: #4BB543;
  line-height: 1;
  margin-bottom: 20px;
  animation: scaleIn 0.5s ease-out;
}

.success-title {
  font-size: 2rem;
  color: #2b2d42;
  margin-bottom: 16px;
}

.success-message {
  font-size: 1.1rem;
  color: #6c757d;
  margin-bottom: 32px;
  line-height: 1.6;
}

.home-link {
  display: inline-block;
  padding: 12px 32px;
  background-color: #4361ee;
  color: white;
  text-decoration: none;
  border-radius: 50px;
  font-weight: 500;
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.home-link:hover {
  background-color: white;
  color: #4361ee;
  border-color: #4361ee;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(67, 97, 238, 0.2);
}

@keyframes scaleIn {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  80% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

@media (max-width: 600px) {
  .order-success-content {
    padding: 30px 20px;
  }
  
  .success-title {
    font-size: 1.8rem;
  }
  
  .success-message {
    font-size: 1rem;
  }
}
</style>