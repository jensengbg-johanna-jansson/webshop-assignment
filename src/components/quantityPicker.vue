<template>
    <div class="quantity-picker">
        <button class="decrease-button quantity-picker-button" @click="decreaseQuantity">-</button>
        <p class="quantity-picker-text">{{ quantity }}</p>
        <button class="increase-button quantity-picker-button" @click="increaseQuantity">+</button>
    </div>
</template>

<script>
export default {
    name: 'quantityPicker',
    props: {
        recievedQuantity: Number
    },
    data() {
        return {
            quantity: null
        }
    },
    methods: {
        increaseQuantity() {
            this.quantity = this.quantity + 1;
        },
        decreaseQuantity() {
            let newQuantity = this.quantity - 1;

            if(newQuantity < 1) {
                this.quantity = 1;
            } else {
                this.quantity = newQuantity;
            }
        },
        setOnLoadQuantity() {
            if(this.recievedQuantity) {
                this.quantity = this.recievedQuantity;
            } else {
                this.quantity = 1;
            }
        }
    },
    watch: {
        quantity: function () {
            this.$emit('emitQuantity', this.quantity);
        }
    },
    created() {
        this.setOnLoadQuantity();
    }
}
</script>

<style lang="scss" scoped>
    .quantity-picker {
        display: flex;
        align-items: center;

        &-button {
            display: flex;
            justify-content: center;
            align-items: center;
            background: #222222;
            border: 1px solid #222222; 
            border-radius: .2rem;
            width: 2rem;
            height: 2rem;
            font-size: 1rem;
            color: #ffffff;
        }
        &-button:hover {
            background: #ffffff;
            color: #444444;
            cursor: pointer;
        }
        &-text {
            font-size: 1rem;
            padding: 0 1.5rem;
            color: #444444;
        }
    }
</style>