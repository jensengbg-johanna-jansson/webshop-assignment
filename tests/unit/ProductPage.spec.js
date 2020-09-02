import { shallowMount } from '@vue/test-utils'
import ProductPage from '@/components/ProductPage.vue';

/*
it("should display the prices when visiting the view", () => {
    const expectedPrice = "Price";
    const wrapper = shallowMount(ProductPage);
    let price = wrapper.find("h2")
    let content = price.text();
    expect(content).toBe(expectedPrice)
    



})

*/


it("should show the products names", () => {
    const expectedName = "Product name";
    const wrapper = shallowMount(ProductPage);
    let name = wrapper.find("h2")
    let content = name.text();
    expect(content).toBe(expectedName)

})