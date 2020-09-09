import { shallowMount } from '@vue/test-utils'
import TotalValue from '@/components/TotalValue.vue'

describe('TotalVale.vue', () => {
  const wrapper = shallowMount(TotalValue)

  it('Should return the sum of the prices', () => {
    const expected = wrapper.vm.totalPrice
    const items = wrapper.vm.cartItems
    let actuall = 0
    items.map((elem) => (actuall += elem.price))
    expect(expected).toBe(actuall)
  })
})
