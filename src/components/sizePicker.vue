<template>
    <div>
        <input type="radio" name="size" value="small" id="radio-small" v-model="selectedSize">
        <label for="radio-small" @click="clickEvent('s')" :class="{ selectedSize:selected == 's' }">S</label>

        <input type="radio" name="size" value="medium" id="radio-medium" v-model="selectedSize">
        <label for="radio-medium" @click="clickEvent('m')" :class="{ selectedSize:selected == 'm' }">M</label>

        <input type="radio" name="size" value="large" id="radio-large" v-model="selectedSize">
        <label for="radio-large" @click="clickEvent('l')" :class="{ selectedSize:selected == 'l' }">L</label>
    </div>
</template>

<script>
export default {
    name: 'sizePicker',
    data() {
        return {
            selected: '',
            selectedSize: null
        }
    },
    methods: {
        clickEvent(size) {
            this.selected = size;
        }
    }
}
</script>

<style lang="scss" scoped>

</style>