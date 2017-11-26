import Vue from 'vue'
import Router from 'vue-router'

import PhHome from '@/pages/PhHome/PhHome'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: PhHome
    }
  ]
})
