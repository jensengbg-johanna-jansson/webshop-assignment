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

it("should show the products images", () => {
    const expectedImage = "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80";
    const wrapper = shallowMount(ProductPage);
    let image = wrapper.find("img src")
    let content = image.text();
    
    expect(content).toBe(expectedImage)

})


it("Should show a page with all products", () => {
    const expectedName = "Product Page"
    const wrapper = shallowMount(ProductPage);
    let name = wrapper.find("title")
    let content = name.text();
    expect(content).toBe(expectedName)

})


//Dessa 3 namn, image och show a page with all products går hand i hand med varandra




