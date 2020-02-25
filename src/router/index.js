import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../components/Login.vue')
  },
  {
    path: '/hello',
    name: 'hello',
    component: () => import('../components/HelloWorld.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
