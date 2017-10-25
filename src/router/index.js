import Vue from 'vue'
import Router from 'vue-router'
import PossumList from '@/components/PossumList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: PossumList
    }
  ]
})
