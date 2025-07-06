// import { createApp } from 'vue'
// import App from './App.vue'
// import router from './router'
// import store from './store'

// const app = createApp(App)
// app.use(router)
// app.use(store)
// app.mount('#app')


import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Import global CSS (if you have any)


// Create the app instance
const app = createApp(App)

// Register plugins
app.use(router)
app.use(store)

// Global error handler
app.config.errorHandler = (err) => {
  console.error('Global error:', err)
  // You could show a user-friendly error notification here
}

// Global properties (if needed)
app.config.globalProperties.$filters = {
  currency(value) {
    return '₹' + value.toFixed(2)
  }
}

// Mount the app
app.mount('#app')

// For debugging
