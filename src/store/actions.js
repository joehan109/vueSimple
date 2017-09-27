import Vue from 'vue'
import Vuex from 'Vuex'

export default {
  increment ({commit}, payload) {
    Vue.prototype.$http.get('/api/a.json').then(response => {
      console.log(response)
      commit('getUserInfo', payload)
    })
  }
}
