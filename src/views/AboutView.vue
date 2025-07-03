<template>
  <div class="about-page">
    <div class="about-content">
      <div class="logo-section">
        <img src="https://www.shutterstock.com/image-vector/fashion-logo-design-template-suitable-600nw-2461938725.jpg" 
             alt="Kanishka's Boutique Logo" 
             class="logo" />
        <h2>About Us</h2>
      </div>

      <p>
        Welcome to <strong>Kanishka's Boutique</strong>, your one-stop destination for ethnic elegance and modern charm in women's fashion.
      </p>

      <p>
        Founded with a passion for tradition and style, Kanishka's Boutique curates handpicked dress collections that celebrate the beauty and diversity of Indian craftsmanship. 
        From luxurious silk kurtas and hand-embroidered chikankari sets to everyday casuals and festive wear, we offer fashion that makes you feel confident and graceful.
      </p>

      <h3>Our Mission</h3>
      <p>
        We aim to blend comfort, tradition, and style to empower women to express their unique personalities through clothing. 
        Whether it's for work, a family celebration, or a festive gathering, we have something special for every moment.
      </p>

      <h3>What We Offer</h3>
      <ul>
        <li>Elegant ethnic wear including Kurtas, Anarkalis, and Sets</li>
        <li>Premium quality fabrics – cotton, silk, rayon & more</li>
        <li>Handcrafted designs sourced from artisans across India</li>
        <li>Affordable luxury with fast and reliable delivery</li>
      </ul>

      <h3>Why Choose Us?</h3>
      <p>
        At Kanishka's Boutique, every product is crafted with love and attention to detail. 
        Our collection is constantly updated to stay on trend while maintaining timeless elegance.
      </p>

      <p>
        Join thousands of happy customers who trust us for their wardrobe needs. 
        Discover your style with Kanishka's Boutique — where fashion meets culture.
      </p>
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
  </div>
</template>

<script>
export default {
  name: "AboutView"
}
</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');

.about-page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.about-content {
  padding: 32px;
  font-family: 'Segoe UI', sans-serif;
  max-width: 850px;
  margin: 0 auto;
  color: #333;
  line-height: 1.7;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  flex: 1;
}

.logo-section {
  text-align: center;
  margin-bottom: 24px;
}

.logo {
  max-width: 140px;
  height: auto;
  border-radius: 8px;
  margin-bottom: 12px;
}

.about-content h2 {
  font-size: 2rem;
  color: #c2185b;
  margin-bottom: 16px;
}

.about-content h3 {
  margin-top: 24px;
  font-size: 1.4rem;
  color: #1976d2;
}

.about-content ul {
  margin-left: 20px;
  list-style-type: disc;
}

.about-content li {
  margin-bottom: 8px;
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
</style>