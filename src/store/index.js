import Vue from 'vue'
import Vuex from 'Vuex'
import state from './state.js'
import mutations from './mutations.js'
import actions from './actions.js'
import getters from './getters.js'
import modules from './modules'

Vue.use(Vuex)
export default new Vuex.Store({
  modules,
  state,
  mutations,
  actions,
  getters
})
