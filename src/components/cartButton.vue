<template>
    <button>
        <span class="cart-button-number">{{ numberOfItemsInCart }}</span>
    </button>
</template>

<script>
export default {
    name: 'cartButton',
    computed: {
        numberOfItemsInCart() {
            let cart = this.$store.state.cart;
            return cart.length;
        }
    }
}
</script>

<style>

</style>