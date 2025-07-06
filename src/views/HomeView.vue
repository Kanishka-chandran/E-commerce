<template>
  <div class="home-container">
    <div class="content-overlay">
      <h2>Welcome to Kanishka's Boutique</h2>
      <p>
        Explore our <router-link :to="{ name: 'Products' }">Dress Collection</router-link>.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  // No need for authentication check in this version
}
</script>

<style scoped>
.home-container {
    background-image: url('https://byshree.com/cdn/shop/files/Desktop-Website-Banner_2.png?v=1749021089&width=2048'); 
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.home-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
}

.content-overlay {
  position: relative;
  z-index: 1;
  text-align: center;
  color: white;
  padding: 40px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  max-width: 800px;
  margin: 0 20px;
}

h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: white;
}

p {
  font-size: 1.2rem;
  color: white;
}

a {
  color: #ffd700;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s ease;
}

a:hover {
  color: #ffffff;
  text-decoration: underline;
}

@media (max-width: 768px) {
  h2 {
    font-size: 2rem;
  }
  
  p {
    font-size: 1rem;
  }
  
  .content-overlay {
    padding: 20px;
  }
}
</style>