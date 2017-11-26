import Vue from 'vue'
import Router from 'vue-router'
import PhMap from '@/components/PhMap/PhMap'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Map',
      component: PhMap
    }
  ]
})
