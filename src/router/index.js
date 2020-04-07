import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Products from '../views/Products.vue'
import Login from '../views/login.vue'
import Model from '../views/Model.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    mode: 'history'
  },
  {
    path: '/Products',
    name: 'Products',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Products
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Login
  },
  {
    path: '/model',
    name: 'Model',
    component: Model
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
