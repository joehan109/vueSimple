import Vue from 'vue'
import Vuex from 'Vuex'

export default  {
  getUserInfo (state, payload = {key: 'name', value: 'nothing'}) {
    console.log(payload)
    state.userInfo = {...state.userInfo, [payload.key]:payload.value}
    // Vue.set(state.userInfo, payload.key, payload.value)
    console.log(state.userInfo)
  },
  getNav (state, payload) {
    state.nav = payload
  }
}
