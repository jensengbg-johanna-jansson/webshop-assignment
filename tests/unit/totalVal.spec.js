import Vuex from 'vuex'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import TotalValue from '@/components/TotalValue.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('TotalVale.vue', () => {
  let store = new Vuex.Store({})
  const wrapper = shallowMount(TotalValue, {
    store,
    localVue,
  })

  it('Should return the sum of the prices', () => {
    const expected = wrapper.vm.totalPrice
    const items = wrapper.vm.cartItems
    let actuall = 0
    items.map((elem) => (actuall += elem.price))
    expect(expected).toBe(actuall)
  })
})
