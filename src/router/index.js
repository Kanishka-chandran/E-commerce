import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/HomeView.vue'),
    meta: { title: 'Home' }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/AboutView.vue'),
    meta: { title: 'About Us' }
  },
  {
    path: '/products',
    name: 'Products',
    component: () => import('../views/ProductListView.vue'),
    meta: { title: 'Dress Collection' } // removed requiresAuth
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import('../views/CartView.vue'),
    meta: { title: 'Your Cart' } // removed requiresAuth
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: () => import('../views/CheckoutView.vue'),
    meta: { title: 'Checkout' } // removed requiresAuth
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/LoginView.vue'),
    meta: { title: 'Login' }
  },
  {
    path: '/payment/:id',
    name: 'Payment',
    component: () => import('../views/PaymentView.vue'),
    props: true,
    meta: { title: 'Complete Payment' } // removed requiresAuth
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('../views/NotFoundView.vue'),
    meta: { title: 'Page Not Found' }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { top: 0 }
  }
})

// Simplified navigation guard - only sets document title
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Kanishka Boutique'
  next()
})

export default router