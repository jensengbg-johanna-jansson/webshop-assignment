import Vue from 'vue'
import VueRouter from 'vue-router'
import ProductPage from '../Views/ProductPage'
import ProductDetailsPage from '@/views/ProductDetailsPage.vue'
import Home from '@/views/Home.vue'
import ShoppingCart from '@/views/ShoppingCart.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: ProductPage
  },
  {
    path: '/product/:id',
    name: 'Product',
    component: ProductDetailsPage
  },
  {
    path: '/shopping-cart',
    name: 'Shopping cart',
    component: ShoppingCart,
  }

  
]

const router = new VueRouter({
  routes,
})

export default router
