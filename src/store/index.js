import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [
      {
        id: '1',
        name: 'A mock parka',
        price: 299,
        img: "https://picsum.photos/id/237/1080/720"
      },
      {
        id: '2',
        name: 'A mock T-shirt',
        price: 199,
        img: 'https://picsum.photos/id/237/1080/720'
      },
      {
        id: '3',
        name: 'Sporty T-shirt',
        price: 199,
        img: 'https://picsum.photos/id/237/1080/720'
      },
      {
        id: '4',
        name: 'Sporty parka',
        price: 299,
        img: 'https://picsum.photos/id/237/1080/720'
      },
      {
        id: '5',
        name: 'Bug stick parka',
        price: 299,
        img: 'https://picsum.photos/id/237/1080/720'
      },
      {
        id: '6',
        name: 'Bug stick T-shirt',
        price: 199,
        img: 'https://picsum.photos/id/237/1080/720'
      },
      {
        id: '7',
        name: 'Rick roll T-shirt',
        price: 199,
        img: 'https://picsum.photos/id/237/1080/720'
      },
      {
        id: '8',
        name: 'Rick roll parka',
        price: 299,
        img: 'https://picsum.photos/id/237/1080/720'
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
  modules: {},
})
