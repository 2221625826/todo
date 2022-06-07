import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Axios from './axios/index.js'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App).use(store).use(router).use(ElementPlus, {
    locale: zhCn,
})
app.config.globalProperties.$axios = Axios
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
//finally
app.mount('#app')