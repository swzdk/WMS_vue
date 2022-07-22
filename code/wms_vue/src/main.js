import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入element组件库并引用样式
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 注册element组件
Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
