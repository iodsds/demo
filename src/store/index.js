import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state () {
    return {
      count: 0
    }
  },
  mutations: {
    add (state) {
      state.count++
    }
  },
  actions: {
  },
  modules: {
  }
})
