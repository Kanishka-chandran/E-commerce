<template>
  <div class="about">
    <div class="logo-section">
      <img src="https://www.shutterstock.com/image-vector/fashion-logo-design-template-suitable-600nw-2461938725.jpg" alt="Kanishka's Boutique Logo" class="logo" />
      <h2>About Us</h2>
    </div>

    <p>
      Welcome to <strong>Kanishka's Boutique</strong>, your one-stop destination for ethnic elegance and modern charm in women's fashion.
    </p>

    <p>
      Founded with a passion for tradition and style, Kanishka’s Boutique curates handpicked dress collections that celebrate the beauty and diversity of Indian craftsmanship. 
      From luxurious silk kurtas and hand-embroidered chikankari sets to everyday casuals and festive wear, we offer fashion that makes you feel confident and graceful.
    </p>

    <h3>Our Mission</h3>
    <p>
      We aim to blend comfort, tradition, and style to empower women to express their unique personalities through clothing. 
      Whether it’s for work, a family celebration, or a festive gathering, we have something special for every moment.
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
      Discover your style with Kanishka’s Boutique — where fashion meets culture.
    </p>
  </div>
</template>

<script>
export default {
  name: "AboutView"
}
</script>

<style scoped>
.about {
  padding: 32px;
  font-family: 'Segoe UI', sans-serif;
  max-width: 850px;
  margin: auto;
  color: #333;
  line-height: 1.7;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
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

.about h2 {
  font-size: 2rem;
  color: #c2185b;
  margin-bottom: 16px;
}

.about h3 {
  margin-top: 24px;
  font-size: 1.4rem;
  color: #1976d2;
}

.about ul {
  margin-left: 20px;
  list-style-type: disc;
}

.about li {
  margin-bottom: 8px;
}
</style>
