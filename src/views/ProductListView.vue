<template>
  <div class="product-list-view">
    <!-- Collection Header Section -->
    <div class="collection-header">
      <div class="header-content">
        <h1>Our Exquisite Dress Collection</h1>
        <p class="subtitle">Discover handcrafted elegance that blends traditional charm with contemporary style</p>
        <div class="collection-stats">
          <span> Unique designs</span>
          <span>|</span>
          <span>Starting from ₹{{ lowestPrice }}</span>
        </div>
      </div>
      <img src="https://www.hatkay.com/cdn/shop/articles/Which-are-the-Top-6-Eye-Catching-Indian-Dresses-for-Women.jpg?v=1667471100" 
           alt="Indian ethnic wear collection" 
           class="header-image">
    </div>

    <!-- Product Grid -->
    <div class="container">
      <div class="grid">
        <ProductCard
          v-for="product in products"
          :key="product.id"
          :product="product"
        />
      </div>
    </div>
  </div>
   <footer class="site-footer">
      <div class="footer-content">
        <div class="footer-section">
          <h4>Location</h4>
          <div class="map-container">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.837261881618!2d77.20986431508162!3d28.57508298243993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2daa9eb4d0b%3A0x717971125923e5d!2sIndia%20Gate!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
              width="100%" 
              height="200" 
              style="border:0;" 
              allowfullscreen="" 
              loading="lazy">
            </iframe>
            <p>123 Fashion Street, New Delhi, India</p>
          </div>
        </div>

        <div class="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/products">Collections</router-link></li>
            <li><router-link to="/about">About Us</router-link></li>
            <li><router-link to="/contact">Contact</router-link></li>
          </ul>
        </div>

        <div class="footer-section">
          <h4>Connect With Us</h4>
          <div class="social-links">
            <a href="https://facebook.com" target="_blank"><i class="fab fa-facebook"></i></a>
            <a href="https://instagram.com" target="_blank"><i class="fab fa-instagram"></i></a>
            <a href="https://twitter.com" target="_blank"><i class="fab fa-twitter"></i></a>
            <a href="https://pinterest.com" target="_blank"><i class="fab fa-pinterest"></i></a>
          </div>
          
          <div class="contact-info">
            <p><i class="fas fa-envelope"></i> info@kanishkaboutique.com</p>
            <p><i class="fas fa-phone"></i> +91 98765 43210</p>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <p>&copy; 2023 Kanishka's Boutique. All Rights Reserved.</p>
      </div>
    </footer>
</template>

<script>
import ProductCard from '../components/ProductCard.vue'
import { products } from '../data/products'

export default {
  components: { ProductCard },
  data() {
    return { 
      products,
      collectionBanner: 'https://example.com/path-to-your-banner.jpg'
    }
  },
  computed: {
    lowestPrice() {
      return Math.min(...this.products.map(p => p.price))
    }
  }
}
</script>

<style scoped>
.product-list-view {
  padding-bottom: 40px;
}

.collection-header {
  position: relative;
  margin-bottom: 40px;
  height: 400px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
}

.header-content {
  position: relative;
  z-index: 2;
  max-width: 800px;
  padding: 0 20px;
}

.header-content h1 {
  font-size: 2.8rem;
  margin-bottom: 1rem;
  text-shadow: 0 2px 4px rgba(0,0,0,0.5);
  font-family: 'Playfair Display', serif;
}

.subtitle {
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  text-shadow: 0 1px 3px rgba(0,0,0,0.5);
}

.collection-stats {
  display: flex;
  justify-content: center;
  gap: 15px;
  font-size: 1.1rem;
  font-weight: 500;
}

.header-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
}

/* Gradient overlay for better text readability */
.collection-header::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.6));
  z-index: 1;
}

.container {
  padding: 0 24px;
  max-width: 1400px;
  margin: 0 auto;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
}
.site-footer {
  background-color: #2c3e50;
  color: white;
  padding: 40px 0 20px;
  margin-top: 40px;
}

.footer-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.footer-section {
  flex: 1;
  min-width: 250px;
  margin-bottom: 30px;
  padding: 0 15px;
}

.footer-section h4 {
  font-size: 1.2rem;
  margin-bottom: 20px;
  color: #ecf0f1;
  position: relative;
  padding-bottom: 10px;
}

.footer-section h4::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 50px;
  height: 2px;
  background-color: #c2185b;
}

.map-container {
  margin-top: 15px;
  border-radius: 8px;
  overflow: hidden;
}

.map-container p {
  margin-top: 10px;
  font-size: 0.9rem;
}

.footer-section ul {
  list-style: none;
  padding: 0;
}

.footer-section ul li {
  margin-bottom: 10px;
}

.footer-section ul li a {
  color: #bdc3c7;
  text-decoration: none;
  transition: color 0.3s;
}

.footer-section ul li a:hover {
  color: #c2185b;
}

.social-links {
  display: flex;
  gap: 15px;
  margin-bottom: 20px;
}

.social-links a {
  color: white;
  font-size: 1.5rem;
  transition: color 0.3s;
}

.social-links a:hover {
  color: #c2185b;
}

.contact-info {
  margin-top: 20px;
}

.contact-info p {
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.contact-info i {
  width: 20px;
  text-align: center;
}

.footer-bottom {
  text-align: center;
  padding-top: 20px;
  border-top: 1px solid #34495e;
  margin-top: 20px;
  font-size: 0.9rem;
  color: #bdc3c7;
}
/* Responsive adjustments */
@media (max-width: 768px) {
  .collection-header {
    height: 300px;
  }
  
  .header-content h1 {
    font-size: 2rem;
  }
  
  .subtitle {
    font-size: 1rem;
  }
  
  .collection-stats {
    flex-direction: column;
    gap: 5px;
  }
  
  .container {
    padding: 0 15px;
  }
  
  .grid {
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    gap: 15px;
  }
}
</style>