import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component(resolve) {
        require.ensure(['@/pages/Hello'], () => {
            resolve(require('@/pages/Hello'))
        })
      },
      children: []
    }, {
      path: '/index',
      name: 'Index',
      component: Index
    }
  ]
})
