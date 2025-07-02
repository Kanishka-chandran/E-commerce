import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import LoginView from '../views/LoginView.vue'
import ProductListView from '../views/ProductListView.vue'
import PaymentView from '../views/PaymentView.vue'

const routes = [
 { path: '/', component: HomeView },
  { path: '/about', component: AboutView },
  { path: '/login', component: LoginView },
  { path: '/products', component: ProductListView },
  { path: '/payment/:id', component: PaymentView, props: true }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
