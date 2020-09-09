import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [
      {
        name: '"Mister Parka Jr." parka',
        img: '',
      },
      {
        name: '"Mister Parke Jr." parka',
      },
      {
        name: 'Sporty T-shirt',
        img: '',
      },
      {
        name: 'Sporty parka',
        img: '',
      },
      {
        name: 'Bug stick parka',
        img: '',
      },
      {
        name: 'Bug stick T-shirt',
        img: '',
      },
      {
        name: 'Rick roll T-shirt',
        img: '',
      },
      {
        name: 'Rick roll parka',
        img: '',
      },
    ],
    cart: [
      {
        name: 'Bug stick parka',
        img: '',
        price: 299,
        size: 'M',
      },
      {
        name: 'Bug stick T-shirt',
        img: '',
        price: 499,
        size: 'L',
      },
    ],
  },
  mutations: {
    deleteProdFromCart(state, item) {
      let index = state.cart.indexOf(item)
      state.cart.splice(index, 1)
    },
  },
  actions: {
    deleteProd(ctx, item) {
      ctx.commit('deleteProdFromCart', item)
    },
  },
  modules: {},
})
