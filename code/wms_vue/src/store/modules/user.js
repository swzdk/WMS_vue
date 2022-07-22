import { getLocal, setLocal } from '@/utils/storage'
export default {
  namespaced: true,
  state: {
    isMemory: getLocal('isMemory') || false
  },
  getters: {
    UserInfo(state) {
      // 如果保存密码，则返回本地储存数据，否则返回数据为空数据
      return state.isMemory
        ? getLocal('userInfo')
        : { userName: '', password: '' }
    },
    stateMemory(state) {
      return state.isMemory
    }
  },
  mutations: {
    // 储存本地数据
    setLoginInfo(state, payload) {
      if (state.isMemory) {
        setLocal('userInfo', payload)
      }
    },
    changeStateMemory(state, payload) {
      state.isMemory = payload
      setLocal('isMemory', state.isMemory)
      // 如果不记住密码，删除本地数据
      if (!payload) setLocal('userInfo', null)
    }
  },
  actions: {}
}
