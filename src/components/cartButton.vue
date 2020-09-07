<template>
    <button class="cart-button" @click="goToCart">
        <img src="@/assets/cart_icon.png" alt="Cart button">
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
    },
    methods: {
        goToCart () {
            this.$router.push({ path: 'shopping-cart' });
        }
    }
}
</script>

<style lang="scss" scoped>
    .cart-button {
        border: none;
        position: relative;
        background: none;

        &-number {
            position: absolute;
            right: -0.9rem;
            top: -0.9rem;
            background: #DB4D4D;
            color: #ffffff;
            width: 1rem;
            height: 1rem;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            border-radius: 2rem;
            font-size: 0.7rem;
        }
    }
    .cart-button:hover {
        cursor: pointer;
    }
</style>