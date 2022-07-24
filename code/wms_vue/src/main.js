import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ECharts from 'vue-echarts'
import { use } from 'echarts/core'
// 引入element组件库并引用样式
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 引入hrIcon组件
import HrIcon from '@/components/hrIcon'
// 引入iconfont
import '@/iconfont/iconfont.css'
// 引入全局样式
import '@/styles/index.less'

// import ECharts modules manually to reduce bundle size
import { CanvasRenderer } from 'echarts/renderers'
import { BarChart } from 'echarts/charts'
import { GridComponent, TooltipComponent } from 'echarts/components'

use([CanvasRenderer, BarChart, GridComponent, TooltipComponent])

// register globally (or you can do it locally)
Vue.component('v-chart', ECharts)

// 注册element组件
Vue.use(ElementUI)
Vue.config.productionTip = false
// 全局注册hrIcon组件
Vue.use(HrIcon)

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
