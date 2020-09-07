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
            if(Array.isArray(cart)) {
                return cart.length;
            } else {
                return 0;
            }
        }
    }
}
</script>

<style>

</style>