<template>
  <nav class="navbar">
    <router-link to="/" class="logo">Kanishka's Boutique</router-link>
    
    <div class="nav-links">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      
      <!-- Conditional rendering based on auth state -->
      <template v-if="isLoggedIn">
        <router-link to="/products">Dress Collection</router-link>
        <button @click="handleLogout" class="nav-button logout">Logout</button>
      </template>
      <template v-else>
        <button @click="navigateToLogin" class="nav-button login">Login</button>
      </template>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  computed: {
    isLoggedIn() {
      // Check both auth methods for maximum compatibility
      return this.$auth?.loggedIn || localStorage.getItem('isAuthenticated') === 'true'
    }
  },
  methods: {
    navigateToLogin() {
      // Smooth navigation to login page
      this.$router.push('/login')
    },
    handleLogout() {
      // Clear all auth states
      if (this.$auth) this.$auth.loggedIn = false
      localStorage.removeItem('isAuthenticated')
      
      // Redirect to home with smooth transition
      this.$router.push('/')
      
      // Optional: Show toast notification instead of alert
      this.$emit('show-notification', 'Logged out successfully!')
    }
  }
}
</script>

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
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  text-decoration: none;
  transition: all 0.3s ease;
}

.logo:hover {
  transform: scale(1.05);
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
}

.logout {
  background-color: #e74c3c;
  color: white;
}

.logout:hover {
  background-color: #c0392b;
  transform: translateY(-2px);
}
</style>