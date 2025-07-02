import { createApp, reactive } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
const auth = reactive({ loggedIn: false })
app.provide('auth', auth)

app.use(router)
app.mount('#app')