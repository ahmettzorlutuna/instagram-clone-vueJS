import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import '@/styles/app.css' //Import css file

createApp(App).use(store).use(router).mount('#app')
