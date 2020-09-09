<template>
    <div class="size-picker">
        <input type="radio" name="size" value="small" id="radio-small" v-model="selectedSize">
        <label for="radio-small" class="size-picker-label" @click="clickEvent('s')" :class="{ selectedSize:selected == 's' }">S</label>

        <input type="radio" name="size" value="medium" id="radio-medium" v-model="selectedSize">
        <label for="radio-medium" class="size-picker-label" @click="clickEvent('m')" :class="{ selectedSize:selected == 'm' }">M</label>

        <input type="radio" name="size" value="large" id="radio-large" v-model="selectedSize">
        <label for="radio-large" class="size-picker-label" @click="clickEvent('l')" :class="{ selectedSize:selected == 'l' }">L</label>
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
    },
    watch: {
        selectedSize: function() {
            this.$emit('emitSize', this.selectedSize);
        }
    }
}
</script>

<style lang="scss" scoped>
    .size-picker {
        display: flex;

        input[type="radio"] {
            display: none;
        }
        &-label {
           display: flex;
           justify-content: center;
           align-items: center;
           border: 1px solid #444444; 
           border-radius: .2rem;
           width: 2rem;
           height: 2rem;
           font-size: 1rem;
           margin-right: 1rem;
           transition: 0.2s all ease;
        }
        &-label:last-child {
            margin-right: 0;
        }
        &-label:hover {
            background: #444444;
            color: #ffffff;
            cursor: pointer;
        }

        .selectedSize {
            background: #222222;
            color: #ffffff;
        }
    }
</style>