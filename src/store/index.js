import Vue from 'vue'
import Vuex from 'Vuex'
const state = {
  userInfo: {
    name: 'haha',
    gender: 'male',
    age: 0
  },
  header: {},
  nav: {},
  main: {},
  footer: {}
}

// mutations 作为命名输出对象
export const mutations = {
  getUserInfo (state, payload = {key: 'name', value: 'nothing'}) {
    state.userInfo[payload.key] = payload.value
  }
}

const getters = { }

const actions = {
  increment (context) {
    context.commit({
      type: 'getUserInfo',
      value: 10
    })
  }
}

Vue.use(Vuex)
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
