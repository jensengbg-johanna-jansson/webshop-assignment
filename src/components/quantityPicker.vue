<template>
    <div>
        <button class="decrease-button" @click="decreaseQuantity">-</button>
        <p>{{ quantity }}</p>
        <button class="increase-button" @click="increaseQuantity">+</button>
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
        }
    },
    watch: {
        quantity: function () {
            this.$emit('emitQuantity', this.quantity);
        }
    },
    created() {
        if(this.recievedQuantity) {
            this.quantity = this.recievedQuantity;
        } else {
            this.quantity = 1;
        }
    }
}
</script>

<style>

</style>