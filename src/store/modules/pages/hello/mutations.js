import Vue from 'vue'
import Vuex from 'Vuex'

export default  {
  getData (state, payload) {
    console.log(payload,222)
    state.data = payload
    // Vue.set(state.userInfo, payload.key, payload.value)
    console.log(state.data)
  }
}
