import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import routers from "@/router/index1";


import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css'


const app = createApp(App)
app.use(ElementPlus)
app.use(routers)
app.mount('#app')
