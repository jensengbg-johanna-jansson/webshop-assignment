import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [
      {
        id: '1',
        name: 'Cat tower hoodie',
        price: 299,
        img: "/assets/images/cats_hoodie.jpg"
      },
      {
        id: '2',
        name: 'Cat tower T-shirt',
        price: 199,
        img: "/assets/images/cats_tshirt.jpg"
      },
      {
        id: '3',
        name: 'Like a boss T-shirt',
        price: 199,
        img: "/assets/images/boss_tshirt.jpg"
      },
      {
        id: '4',
        name: 'Like a boss hoodie',
        price: 299,
        img: "/assets/images/boss_hoodie.jpg"
      },
      {
        id: '5',
        name: 'Koi fish hoodie',
        price: 299,
        img: "/assets/images/koi_hoodie.jpg"
      },
      {
        id: '6',
        name: 'Koi fish T-shirt',
        price: 199,
        img: "/assets/images/koi_tshirt.jpg"
      },
      {
        id: '7',
        name: 'Coffee T-shirt',
        price: 199,
        img: "/assets/images/coffee_tshirt.jpg"
      },
      {
        id: '8',
        name: 'Coffee hoodiea',
        price: 299,
        img: "/assets/images/coffee_hoodie.jpg"
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
