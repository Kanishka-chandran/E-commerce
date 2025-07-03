<template>
  <nav class="navbar">
    <div class="logo-container">
      <img src="https://www.shutterstock.com/image-vector/fashion-logo-design-template-suitable-600nw-2461938725.jpg" 
           alt="Logo" 
           class="logo-img">
      <router-link :to="{ name: 'Home' }" class="logo-text">Kanishka Boutique</router-link>
    </div>
    
    <div class="nav-links">
      <router-link :to="{ name: 'Home' }">Home</router-link>
      <router-link :to="{ name: 'About' }">About</router-link>
      
      <template v-if="isAuthenticated">
        <router-link :to="{ name: 'Products' }">Dress Collection</router-link>
        <router-link :to="{ name: 'Cart' }" class="cart-link">
          🛒
          <span class="cart-badge" v-if="cartQuantity > 0">{{ cartQuantity }}</span>
        </router-link>
        <button @click="handleLogout" class="nav-button logout">Logout</button>
      </template>
      <template v-else>
        <button @click="navigateToLogin" class="nav-button login">Login</button>
      </template>
    </div>
  </nav>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'NavBar',
  computed: {
    ...mapGetters(['cartQuantity', 'isAuthenticated'])
  },
  methods: {
    ...mapActions(['logout']),
    navigateToLogin() {
      this.$router.push({ name: 'Login' })
    },
    async handleLogout() {
      await this.logout()
      if (this.$route.meta.requiresAuth) {
        this.$router.push({ name: 'Home' })
      }
    }
  }
}
</script>

<!-- Keep your existing styles -->

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #2c3e50;
  color: white;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.logo-container {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.logo-img {
  height: 40px;
  width: auto;
  transition: all 0.3s ease;
  border-radius: 50%;
}

.logo-text {
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  text-decoration: none;
  transition: all 0.3s ease;
  font-family: 'Playfair Display', serif;
}

.logo-container:hover .logo-img {
  transform: scale(1.1) rotate(-5deg);
}

.logo-container:hover .logo-text {
  transform: scale(1.05);
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
}

.nav-links {
  display: flex;
  gap: 1.5rem;
  align-items: center;
}

.nav-links a {
  color: white;
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem;
  transition: all 0.3s ease;
  border-bottom: 2px solid transparent;
  position: relative;
}

.nav-links a:hover {
  color: #42b983;
  transform: translateY(-2px);
}

.nav-links a.router-link-exact-active {
  color: #42b983;
  border-bottom-color: #42b983;
}

.nav-button {
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
}

.login {
  background-color: #42b983;
  color: white;
}

.login:hover {
  background-color: #3aa876;
  transform: translateY(-2px);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

.logout {
  background-color: #e74c3c;
  color: white;
}

.logout:hover {
  background-color: #c0392b;
  transform: translateY(-2px);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

/* Cart link styles */
.cart-link {
  display: flex;
  align-items: center;
  position: relative;
  padding: 0.5rem 0.75rem;
}

.cart-link i {
  font-size: 1.2rem;
}

.cart-badge {
  position: absolute;
  top: -5px;
  right: -5px;
  background-color: #ff5722;
  color: white;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.7rem;
  font-weight: bold;
  animation: pulse 1.5s infinite;
}

@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .navbar {
    flex-direction: column;
    padding: 1rem;
  }
  
  .nav-links {
    margin-top: 1rem;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
  }
  
  .logo-text {
    font-size: 1.3rem;
  }
}
</style>