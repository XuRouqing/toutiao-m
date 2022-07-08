import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const TOKEN_KEY = 'TOUTIAO_USER'
import { gteItem, setItem, removeItem } from '@/utils/storage'
import { getItem } from '../utils/storage'

export default new Vuex.Store({
  state: {
    user: getItem(TOKEN_KEY)
    // user: JSON.parse(window.localStorage.getItem(TOKEN_KEY))
  },
  mutations: {
    setUser(state, data){
      state.user = data

      setItem(TOKEN_KEY, state.user)
      // window.localStorage.setItem(TOKEN_KEY, JSON.stringify(state.user))
    },
    logout(state) {
      state.user = null
      removeItem(TOKEN_KEY)
    }
  },
  actions: {
  },
  modules: {
  }
})
