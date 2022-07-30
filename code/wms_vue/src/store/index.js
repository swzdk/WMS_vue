import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user.js'
import echarts from './modules/echarts.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    user,
    echarts
  }
})
