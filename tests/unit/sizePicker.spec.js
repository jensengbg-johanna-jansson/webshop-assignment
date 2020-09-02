import { shallowMount } from '@vue/test-utils';
import sizePicker from '@/components/sizePicker.vue';


it('should add the class "selectedSize" to the first label when clicked', async() => {
    const expected = true;
    
    let wrapper = shallowMount(sizePicker);
    let radioLabelsArray = wrapper.findAll('label');

    await radioLabelsArray.at(0).trigger('click');

    let actual = radioLabelsArray.at(0).classes('selectedSize');

    expect(actual).toBe(expected);
})

it('should remove class "selectedSize" of the third option when another is clicked', async() => {
    const expected = false;
    
    let wrapper = shallowMount(sizePicker);
    let radioLabelsArray = wrapper.findAll('label');

    await radioLabelsArray.at(0).trigger('click');
    await radioLabelsArray.at(1).trigger('click');

    let actual = radioLabelsArray.at(0).classes('selectedSize');

    expect(actual).toBe(expected);
})

it('should set radiobutton of second label to "checked" when second label is clicked', async() => {
    const expected = true;

    let wrapper = shallowMount(sizePicker);
    let radioLabelsArray = wrapper.findAll('label');
    let radioButtonsArray = wrapper.findAll('input[type="radio"]');

    await radioLabelsArray.at(1).trigger('click');
    
    let actual = radioButtonsArray.at(1).element.checked;

    expect(actual).toBe(expected);
})

it('should set value of "selectedSize" to value of first radiobutton when first label is clicked', async () => {
    let wrapper = shallowMount(sizePicker);
    let radioButtonsArray = wrapper.findAll('input[type="radio"]');

    const expected = radioButtonsArray.at(0).attributes('value');

    let radioLabelsArray = wrapper.findAll('label');

    await radioLabelsArray.at(0).trigger('click');

    let actual = wrapper.vm.selectedSize;

    expect(actual).toBe(expected);
})