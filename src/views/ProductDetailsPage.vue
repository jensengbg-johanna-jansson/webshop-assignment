<template>
    <section class="product-page">
        <img :src="productData.img" class="product-image" alt="">
        <article class="product-details">
            <h2 class="product-name">{{ productData.name }}</h2>
            <p class="product-price">{{ productData.price }} SEK</p>
            <h3 class="product-small-heading">Choose a size</h3>
            <sizePicker class="product-size" @emitSize="updateSize" />
            <quantityPicker class="product-quantity" @emitQuantity="updateQuantity" />
            <div class="message-container">
                <transition name="fade-up">
                    <span class="success-message" v-show="showSuccessMsg">Product was added to cart</span>
                </transition>
                <transition name="fade-up">
                    <span class="error-message" v-show="showErrorMsg">{{ errorMsg }}</span>
                </transition>
            </div>
            <button class="add-to-cart-button" @click="addToCart">Continue</button>
        </article>
    </section>
</template>

<script>
import quantityPicker from '@/components/quantityPicker.vue';
import sizePicker from '@/components/sizePicker.vue';

export default {
    name: 'ProductDetailsPage',
    components: {
        quantityPicker,
        sizePicker
    },
    data() {
        return {
            size: '',
            quantity: '',
            showSuccessMsg: false,
            showErrorMsg: false,
            errorMsg: ''
        }
    },
    methods: {
        
        updateSize(value) {            
            this.size = value;
        },
        updateQuantity(value) {
            this.quantity = value;
        }, 
        isValidToCartRequest(toCartObject) {
            let productToCartvalues = toCartObject;
            let isValid = true;
            let noSize = false;
            console.log(productToCartvalues.size);
            if(productToCartvalues.size === ''
            || productToCartvalues.size === null
            || productToCartvalues.size === undefined) {
                noSize = true;
            } else {
                noSize = false;
            }
            for(let i = 0; i < productToCartvalues.length; i++) {
                if(productToCartvalues[i] === '' 
                || productToCartvalues[i] === null
                || productToCartvalues[i] === undefined 
                ){
                    isValid = false;
                } else {
                    isValid = true;
                }
            }
            return {isValid: isValid,
                    noSize: noSize
                    };
        },
        isInCart (item) {
            let isAdded = false;
            for(let i = 0; i < this.cartItems.length; i++) {
                if (this.cartItems[i] === item) {
                    isAdded = true;
                }
            }
            return isAdded;
        },
        async addToCart () {
            let productToCart = {
                name: this.productData.name,
                price: this.productData.price,
                size: this.size,
                quantity: this.quantity
            }
            let validCartObj = this.isValidToCartRequest(productToCart);
            console.log(validCartObj.noSize);
            if(validCartObj.noSize === true){
                this.errorMsg = 'Please choose a size';
                this.showErrorMsg = true;
                let t = this;
                setTimeout(function () {
                    t.showErrorMsg = false;
                }, 1500);
            } else
            if(validCartObj.isValid != false 
            && validCartObj.isValid != null 
            && validCartObj.isValid != undefined
            ) {
                await this.$store.dispatch('commitProductToCart', productToCart);
                
                if(this.isInCart(productToCart) === true) {
                    this.showSuccessMsg = true;
                    let t = this;
                    setTimeout(function () {
                        t.showSuccessMsg = false;
                    }, 1500);
                } else {
                    this.errorMsg = 'Error: Could not add product to cart';
                    this.showErrorMsg = true;
                    let t = this;
                    setTimeout(function () {
                        t.showErrorMsg = false;
                    }, 1500);
                }
            } else {
                this.errorMsg = 'Error: Could not add product to cart';
                this.showErrorMsg = true;
                let t = this;
                setTimeout(function () {
                    t.showErrorMsg = false;
                }, 1500);
            }         
        }
    },
    computed: {
        productData () {
            let storeProducts = this.$store.state.products;
            let productId = this.$route.params.id;
            return storeProducts.find( ({ id }) => id === productId );
        },
        cartItems () {
            return this.$store.state.cart;            
        }
    }
}
</script>

<style lang="scss" scoped>
    .product-page {
        display: grid;
        grid-template-columns: 60% 1fr;
        grid-column-gap: 3rem;
        width: 80vw;
        max-width: 2000px;
        min-height: 80vh;

        img {
            width: 100%;
            align-self: center;
        }
        .product-details {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            align-self: center;

            .product-name {
                font-size: 1.2rem;
                margin-bottom: .7rem;
            }
            .product-price {
                color: #444444;
                font-size: 1.2rem;
                margin-bottom: 4rem;
            }
            .product-small-heading {
                font-size: 1rem;
                font-weight: normal;
                color: #222222;
                margin-bottom: .5rem;
            }
            .product-size {
                margin-bottom: 2rem;
            }
            .product-quantity {
                margin-bottom: 3rem;
            }
            .add-to-cart-button {
                color: #f6f6f6;
                background: #222222;
                text-transform: uppercase;
                border: 1px solid #222222; 
                border-radius: .2rem;
                font-size: 1rem;
                font-weight: bold;
                padding: .5rem;
                width: 100%;
            }
            .add-to-cart-button:hover {
                background: #f6f6f6;
                color: #222222;
                cursor: pointer;
            }

            .message-container {
                height: 2.6rem;
                display: flex;
                align-items: flex-end;
    
                .success-message {
                    color: #2eb872;
                }
                .error-message {
                    color: #fa4659;
                }

                /* Transitions */
                .fade-up-enter-active,.fade-up-leave-active {
                    transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
                }
                .fade-up-enter, .fade-up-leave-to {
                    transform: translateY(10px);
                    opacity: 0;
                }
            }
        }
    }
</style>