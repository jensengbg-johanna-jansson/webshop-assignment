import Vuex from 'vuex'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import ProductList from '@/components/ProductList.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

const mockProductData = {
  name: 'A mock T-shirt',
  price: 299,
  size: 'M',
  img: 'https://picsum.photos/id/237/200/300',
}

describe('Delete product', () => {
  it('Should delete the clicked item', async () => {
    const expected = 1
    let store = new Vuex.Store({})

    const wrapper = shallowMount(ProductList, {
      propsData: {
        cartItem: mockProductData,
      },
      store,
      localVue,
    })

    const deleteBtn = wrapper.find('.deleteBtn')
    await deleteBtn.trigger('click')

    const productToDelete = wrapper.vm.productToDelete
    const actuall = productToDelete.length
    expect(expected).toBe(actuall)
  })
})
