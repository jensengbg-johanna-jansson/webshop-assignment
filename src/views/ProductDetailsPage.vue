<template>
    <section>
        <img :src="product.img" class="product-image" alt="">
        <article>
            <h2 class="product-name">{{ product.name }}</h2>
            <p class="product-price">{{ product.price }} SEK</p>

            <button class="add-to-cart-button" @click="addToCart">Continue</button>
        </article>
        <span class="success-message" v-show="showSuccessMsg">Product was added</span>
        <span class="error-message" v-show="showErrorMsg">Error: Product could not be added</span>
    </section>
</template>

<script>
export default {
    name: 'ProductDetailsPage',
    data() {
        return {
            product: '',
            productToCart: [],
            showSuccessMsg: false,
            showErrorMsg: false
        }
    },
    methods: {
        isInCart (item) {
            console.log(this.cartItems);
            for (let i = 0; i < this.cartItems.length; i++) {
                console.log(this.cartItems[i]);
                if (this.cartItems[i] === item) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        async addToCart () {
            await this.$store.dispatch('commitProductToCart', this.productToCart);
            
            if(this.isInCart(this.productToCart) === true) {
                this.showSuccessMsg = true;
            } else {
                this.showErrorMsg = true;
            }
        }
    },
    computed: {
        cartItems () {
            return this.$store.state.cart;            
        }
    }
}
</script>

<style lang="scss" scoped>

</style>