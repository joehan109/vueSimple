import Vue from 'vue'
import Vuex from 'Vuex'

export default  {
  getUserInfo (state, payload = {key: 'name', value: 'nothing'}) {
    console.log(payload)
    state.header = {...state.header, [payload.key]:payload.value+'header'}
    // Vue.set(state.userInfo, payload.key, payload.value)
    console.log(state.header)
  }
}
