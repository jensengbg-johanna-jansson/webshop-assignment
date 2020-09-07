import Vuex from 'vuex';
import { shallowMount, createLocalVue } from '@vue/test-utils';import cartButton from '@/components/cartButton.vue';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('Header cart button tests', () => { 
    it('should display the number of items that is currently in cart', () => {
        const expected = 1;

        let wrapper = shallowMount(ProductDetailsPage, {
            computed: {
                numberOfItemsInCart: () => { return 1 }
              },
              store,
              localVue
        });
        let cartButtonNumber = wrapper.find('.cart-button-number');

        let actual = cartButtonNumber.text();

        expect(actual).toBe(expected);
    })
})