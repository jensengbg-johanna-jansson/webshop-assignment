import { shallowMount, createLocalVue } from '@vue/test-utils'
import ProductList from '@/components/ProductList.vue'

describe('Delete product', () => {
  it('Should delete the clicked item', async () => {
    const wrapper = shallowMount(ProductList)
    const deleteBtn = wrapper.find('.deleteBtn')
    await deleteBtn.trigger('click')
    const productToDelete = wrapper.vm.productToDelete

    const cartItems = wrapper.vm.cartItems
    console.log(cartItems.indexOf(productToDelete))

    const expected = -1
    const actuall = cartItems.indexOf(productToDelete)
    expect(expected).toBe(actuall)
  })
})
