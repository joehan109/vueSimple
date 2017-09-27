import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Index from '@/pages/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component(resolve) {
        require.ensure(['@/components/Hello'], () => {
            resolve(require('@/components/Hello'))
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
