import { shallowMount, createLocalVue } from '@vue/test-utils'
import Product from '@/components/Product.vue'

describe('Delete product', () => {
  it('Should return the objects when clicked', async () => {
    const wrapper = shallowMount(Product)
    const expected = wrapper.vm.product
    const deleteBtn = wrapper.find('button')
    await deleteBtn.trigger('click')
    const actuall = wrapper.vm.productToDelete
    expect(expected).toBe(actuall)
  })
})
