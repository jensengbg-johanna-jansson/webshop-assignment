import Vuex from 'vuex';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import ProductDetailsPage from '@/views/ProductDetailsPage.vue';

const localVue = createLocalVue();
localVue.use(Vuex);

const mockProductData = {
    name: 'A mock T-shirt',
    price: 299,
    img: 'https://picsum.photos/id/237/200/300'
}

const mockCartData = {
    name: mockProductData.name,
    price: mockProductData.price,
    size: 'medium',
    quantity: 1
}

describe('Product details page tests', () => {

it('should display the product"s name in the product name heading', async () => {
    const expected = mockProductData.name;

    let store = new Vuex.Store({});

    let wrapper = shallowMount(ProductDetailsPage, {
        computed: {
            productData: () => { return mockProductData }
          },
          store,
          localVue
    });
    let nameHeading = wrapper.find('.product-name');

    let actual = nameHeading.text();

    expect(actual).toBe(expected);
})

it('should display the product"s price in the product price textbox', async () => {
    const expected = '299 SEK';

    let store = new Vuex.Store({});

    let wrapper = shallowMount(ProductDetailsPage, {
        computed: {
            productData: () => { return mockProductData }
          },
          store,
          localVue
    });
    let price = wrapper.find('.product-price');

    let actual = price.text();

    expect(actual).toBe(expected);
})

it('should display the product"s image in the product img-tag', async () => {
    const expected = mockProductData.img;
    
    let store = new Vuex.Store({});

    let wrapper = shallowMount(ProductDetailsPage, {
        computed: {
            productData: () => { return mockProductData }
          },
          store,
          localVue
    });
    let image = wrapper.find('.product-image');

    let actual = image.attributes('src');

    expect(actual).toBe(expected);
})

it('should commit a mutation with a payload that corresponds to the currently set product details when "Continue"-button is clicked', async () => {
    const expected = mockCartData;

    let actions = {
        commitProductToCart: jest.fn()
      };
    let store = new Vuex.Store({
        actions
    });

    let wrapper = shallowMount(ProductDetailsPage, {
        computed: {
            productData: () => { return mockProductData }
        },
        store,
        localVue
    });
    let addToCartButton = wrapper.find('.add-to-cart-button');
    await wrapper.setData({ size: mockCartData.size });
    await wrapper.setData({ quantity: mockCartData.quantity });
    await addToCartButton.trigger('click');
    
    expect(actions.commitProductToCart).toHaveBeenCalled()
    let actual = actions.commitProductToCart.mock.calls[0][1];

    expect(actual).toStrictEqual(expected);
})

it('should display a success message if "showSuccessMsg" is true', async () => {
    const expected = true;

    let store = new Vuex.Store({});

    let wrapper = shallowMount(ProductDetailsPage, {
        computed: {
            productData: () => { return mockProductData }       
          },
          store,
          localVue
    });
    
    let successMsg = wrapper.find('.success-message');
    await wrapper.setData({
        showSuccessMsg: true
    });
    let actual = successMsg.element.style.display !== 'none';

    expect(actual).toBe(expected);
})

it('should display an error message if the "shoeErrorMsg" is true', async () => {
    const expected = true;
    
    let store = new Vuex.Store({});

    let wrapper = shallowMount(ProductDetailsPage, {
        computed: {
            productData: () => { return mockProductData }       
          },
          store,
          localVue
    });
    let errorMsg = wrapper.find('.error-message');
    await wrapper.setData({
        showErrorMsg: true
    });

    let actual = errorMsg.element.style.display !== 'none';

    expect(actual).toBe(expected);
})

})
