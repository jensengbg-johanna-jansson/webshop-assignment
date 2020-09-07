import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../Views/Home'
import ProductPage from '../Views/ProductPage'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home 
  },
  {
    path: '/productpage',
    name: 'ProductPage',
    component: ProductPage
  }

  
]

const router = new VueRouter({
  routes
})

export default router
