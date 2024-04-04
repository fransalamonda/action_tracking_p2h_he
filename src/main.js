import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Vuex from 'vuex'
import store from './store'

import 'tailwindcss/tailwind.css'; // Ensure the path is correct
import '@fortawesome/fontawesome-free/css/all.css'
import './registerServiceWorker'
//import "./style.scss";
createApp(App)
.use(router)
.use(Vuex)
.use(store)
.mount('#app')
