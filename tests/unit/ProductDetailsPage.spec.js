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

    let wrapper = shallowMount(ProductDetailsPage);
    await wrapper.setData({ product: mockProductData });
    let nameHeading = wrapper.find('.product-name');

    let actual = nameHeading.text();

    expect(actual).toBe(expected);
})

it('should display the product"s price in the product price textbox', async () => {
    const expected = '299 SEK';

    let wrapper = shallowMount(ProductDetailsPage);
    await wrapper.setData({ product: mockProductData });
    let price = wrapper.find('.product-price');

    let actual = price.text();

    expect(actual).toBe(expected);
})

it('should display the product"s image in the product img-tag', async () => {
    const expected = mockProductData.img;
    
    let wrapper = shallowMount(ProductDetailsPage);
    await wrapper.setData({ product: mockProductData });
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
        store,
        localVue
    });
    let addToCartButton = wrapper.find('.add-to-cart-button');
    
    await wrapper.setData({ productToCart: mockCartData });
    await addToCartButton.trigger('click');

    let actual = actions.commitProductToCart.mock.calls[0][1];

    expect(actual).toStrictEqual(expected);
})

it('should display a success message if the $store.state.cart data should include the payload data after clicking "Continue"-button', async () => {
    const expected = true;

    let store = new Vuex.Store({});

    // Läs in wrapper med en computed property
    let wrapper = shallowMount(ProductDetailsPage, {
        computed: {
            // Sätt värdet på computed propertyn till 'testValue'
            cartItems: () => ['testValue']
          },
          store,
          localVue
    });
    
    let addToCartButton = wrapper.find('.add-to-cart-button');
    let successMsg = wrapper.find('.success-message');
    await wrapper.setData({ productToCart: 'testValue' });
    await addToCartButton.trigger('click');

    let actual = successMsg.element.style.display !== 'none';

    expect(actual).toBe(expected);
})

it('should display an error message if the $store.state.cart data does not include the payload data after clicking "Continue"-button', async () => {
    const expected = true;
    
    let store = new Vuex.Store({});

    let wrapper = shallowMount(ProductDetailsPage, {
        computed: {
            cartItems: () => ['testValue']
          },
          store,
          localVue
    });
    let addToCartButton = wrapper.find('.add-to-cart-button');
    let errorMsg = wrapper.find('.error-message');
    const mockPayload = 'differentTestValue';
    await wrapper.setData({ productToCart: mockPayload });
    await addToCartButton.trigger('click');

    let actual = errorMsg.element.style.display !== 'none';

    expect(actual).toBe(expected);
})

})
