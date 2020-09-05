import Vue from 'vue'
import VueRouter from 'vue-router'
import ProductDetailsPage from '@/views/ProductDetailsPage.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
  },
  {
    path: '/product',
    name: 'Product',
    component: ProductDetailsPage
  }
]

const router = new VueRouter({
  routes
})

export default router
