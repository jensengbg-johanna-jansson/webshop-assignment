import { shallowMount } from '@vue/test-utils';
import quantityPicker from '@/components/quantityPicker.vue';

it('should increase number by one when clicking "+"-button', async () => {
    const expected = 2;

    let wrapper = shallowMount(quantityPicker);
    let button = wrapper.find('.increase-button');
    let numberContainer = wrapper.find('p');

    await button.trigger('click');

    let actual = Number(numberContainer.text());

    expect(actual).toBe(expected);
})

it('should decrease number by one when clicking "-"-button', async () => {
    const expected = 2;

    let wrapper = shallowMount(quantityPicker);
    let incButton = wrapper.find('.increase-button');
    let decButton = wrapper.find('.decrease-button');
    let numberContainer = wrapper.find('p');

    await incButton.trigger('click');
    await incButton.trigger('click');
    await decButton.trigger('click');

    let actual = Number(numberContainer.text());

    expect(actual).toBe(expected);
})

it('when clicking the "-"-button the number should not go lower than "1"', async () => {
    const expected = 1;

    let wrapper = shallowMount(quantityPicker);
    let button = wrapper.find('.decrease-button');
    let numberContainer = wrapper.find('p');

    await button.trigger('click');

    let actual = Number(numberContainer.text());

    expect(actual).toBe(expected);
})

it('should emit the current number every time it changes', async () => {
    const expectedEmitsCount = 3;
    const expected = expectedEmitsCount;

    let wrapper = shallowMount(quantityPicker);
    let incButton = wrapper.find('.increase-button');
    let decButton = wrapper.find('.decrease-button');
    
    await incButton.trigger('click');
    await decButton.trigger('click');
    await incButton.trigger('click');

    let actual = wrapper.emitted('emitQuantity').length;

    expect(actual).toBe(expected);
})

it('last emit should have value of the current quantity', async () => {
    let wrapper = shallowMount(quantityPicker);
    let incButton = wrapper.find('.increase-button');
    let decButton = wrapper.find('.decrease-button');

    const expected = [3];

    await incButton.trigger('click');
    await incButton.trigger('click');
    await incButton.trigger('click');
    await decButton.trigger('click');

    await wrapper.vm.$nextTick();

    let actual = wrapper.emitted('emitQuantity')[3];

    expect(actual).toEqual(expected);
})

it('should display number "1" on load', async () => {
    const expected = 1;
    
    let wrapper = shallowMount(quantityPicker);
    let numberContainer = wrapper.find('p');

    let actual = Number(numberContainer.text());

    expect(actual).toBe(expected);
})

it('if given a quantity prop on load it should display the prop data as the number', async () => {
    let expectedQuantity = 3;
    let wrapper = shallowMount(quantityPicker, {
            propsData: {
                recievedQuantity: expectedQuantity
            }}
        );
    
    const expected = expectedQuantity;
    
    let numberContainer = wrapper.find('p');

    let actual = Number(numberContainer.text());

    expect(actual).toBe(expected);

})