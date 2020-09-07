import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [
      {
        name: '"Mister Parka Jr." parka',
        img: '',
        price: 299
      },
      {
        name: '"Mister Parke Jr." T-shirt',
        img: '',
        price: 199
      },
      {
        name: 'Sporty T-shirt',
        img: '',
        price: 199
      },
      {
        name: 'Sporty parka',
        img: '',
        price: 299
      },
      {
        name: 'Bug stick parka',
        img: '',
        price: 299
      },
      {
        name: 'Bug stick T-shirt',
        img: '',
        price: 199
      },
      {
        name: 'Rick roll T-shirt',
        img: '',
        price: 199
      },
      {
        name: 'Rick roll parka',
        img: '',
      },
    ],
    cart: [],
  },
  mutations: {},
  actions: {},
  modules: {},
})
