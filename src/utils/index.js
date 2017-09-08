import Vue from 'vue'
require('./libs')
Object.defineProperty(Vue.prototype, '$utils', { value: require('./funcs') })
