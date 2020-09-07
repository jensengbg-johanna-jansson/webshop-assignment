import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import ShoppingCart from '@/views/ShoppingCart.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/shopping-cart',
    name: 'Shopping cart',
    component: ShoppingCart,
  },
]

const router = new VueRouter({
  routes,
})

export default router
