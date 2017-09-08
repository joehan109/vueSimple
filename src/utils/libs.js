// lodash
import Vue from 'vue'
import lodash from 'lodash'
Object.defineProperty(Vue.prototype, '$lodash', { value: lodash })

// axios
import axios from 'axios'
axios.jsonp = require('jsonp')
Object.defineProperty(Vue.prototype, '$http', { value: axios })

// promise-polyfill
import Promise from 'promise-polyfill'
Object.defineProperty(Vue.prototype, '$promise', { value: Promise })
