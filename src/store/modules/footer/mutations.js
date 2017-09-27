import Vue from 'vue'
import Vuex from 'Vuex'

export default  {
  getUserInfo (state, payload = {key: 'name', value: 'nothing'}) {
    console.log(payload)
    state.footer = {...state.footer, [payload.key]:payload.value + 'footer'}
    // Vue.set(state.userInfo, payload.key, payload.value)
  }
}
