import Vue from 'vue'
import Vuex from 'Vuex'

export default {
  increment ({commit}, payload) {
    Vue.prototype.$http.get('/api/a.json').then(response => {
      console.log(response)
      commit('getUserInfo', payload)
    })
  },
  getNav ({commit}, payload) {
    Vue.prototype.$http.get('/api/nav.json').then(response => {
      console.log(response.data,888)
      commit('getNav', response.data.data)
    })
  }
}
