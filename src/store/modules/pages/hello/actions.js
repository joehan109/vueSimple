import Vue from 'vue'
import Vuex from 'Vuex'

export default {
  increment ({commit}, payload) {
    Vue.prototype.$http.get('/api/table.json').then(response => {
      commit('getData', response.data.res)
    })
  }
}
