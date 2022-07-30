export default {
  namespaced: true,
  state: {
    optionInOut: {},
    optionStockUse: {},
    optionAreaUse: {}
  },
  mutations: {
    changeOptInOut(state, payload) {
      state.optionInOut = payload
    },
    changeOptStockUse(state, payload) {
      state.optionStockUse = payload
    },
    changeOptAreaUse(state, payload) {
      state.optionAreaUse = payload
    }
  },
  getters: {
    optInOut: (state) => state.optionInOut,
    opStockUse: (state) => state.optionStockUse,
    optAreaUse: (state) => state.optionAreaUse
  },
  actions: {}
}
