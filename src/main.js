import { createApp } from 'vue'
import App from './App.vue'
// require('./assets/style/base.css')
import router from './router'

createApp(App).use(router).mount('#app')