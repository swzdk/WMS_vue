import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
Vue.filter('strUpperCase', (val, division) => {
  return val.toLocaleUpperCase().split('').join(division)
})

Vue.filter('strLocaleLowerCase', (val) => {
  return val.toLocaleLowerCase()
})
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
