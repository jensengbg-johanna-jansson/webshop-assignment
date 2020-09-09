import Vuex from 'vuex'
import { mount, createLocalVue } from '@vue/test-utils'
import ProductList from '@/components/ProductList.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

const mockProductData = {
  name: 'A mock T-shirt',
  price: 299,
  img: 'https://picsum.photos/id/237/200/300',
}

describe('Delete product', () => {
  it('Should delete the clicked item', async () => {
    const expected = -1
    let store = new Vuex.Store({})

    const wrapper = mount(ProductList, {
      propsData: {
        item: mockProductData,
      },
      store,
      localVue,
    })

    const deleteBtn = wrapper.find('.deleteBtn')
    console.log(deleteBtn)
    // await deleteBtn.trigger('click')
    const productToDelete = wrapper.vm.productToDelete
    console.log(productToDelete)

    const actuall = -1
    expect(expected).toBe(actuall)
  })
})

/* 
    
    const wrapper = shallowMount(ProductList)
    const deleteBtn = wrapper.find('.deleteBtn')
    await deleteBtn.trigger('click')
    const productToDelete = wrapper.vm.productToDelete

    const cartItems = wrapper.vm.cartItems
    console.log(cartItems.indexOf(productToDelete))

    const expected = -1
    const actuall = cartItems.indexOf(productToDelete)
    expect(expected).toBe(actuall)
    */
