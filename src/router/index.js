import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// import Business from '../views/Business.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/business',
    name: 'Business',
    component: () => import('../views/Business.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
