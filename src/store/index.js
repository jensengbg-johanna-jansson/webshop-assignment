import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [
      {
        name: '"Mister Parka Jr." parka',
        img: ""
      },
      {
        name: '"Mister Parke Jr." parka'
      },
      {
        name: 'Sporty T-shirt',
        img: ''
      },
      {
        name: 'Sporty parka',
        img: ''
      },
      {
        name: 'Bug stick parka',
        img: ''
      },
      {
        name: 'Bug stick T-shirt',
        img: ''
      },
      {
        name: 'Rick roll T-shirt',
        img: ''
      },
      {
        name: 'Rick roll parka',
        img: ''
      }
    ],
    cart: []
  },
  mutations: {
    addProductToCart (state, payload) {
        state.cart.push(payload);
    }
  },
  actions: {
    commitProductToCart ({commit}, product) {
      commit('addProductToCart', product);
    }
  },
  modules: {
  }
})
