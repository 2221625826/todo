import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Axios from './axios/index.js'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import 'element-plus/dist/index.css'

const app = createApp(App).use(store).use(router).use(ElementPlus, {
    locale: zhCn,
}).mount('#app')
app.config.globalProperties.$axios = Axios