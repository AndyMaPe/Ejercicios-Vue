import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login'
import McDonalds from '../views/McDonalds'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/mcDonalds',
    name: 'McDonalds',
    component: McDonalds
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
