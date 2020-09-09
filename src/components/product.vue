<template>
    <article class="product" @click="goToProduct">
        <div class="image-container">
            <img class="productImage" :src="product.img">
        </div>
        <h2 class="productName">{{ product.name }}</h2>
        <p class="price">{{ product.price }} SEK</p>
    </article>
</template>

<script>
export default {
    name: 'Product',
    props: {
        product: Object
    },
    methods: {
        goToProduct() {
            let productId = this.product.id;
            this.$router.push({ path: `/product/${ productId }` });
        }
    }
}
</script>

<style lang="scss" scoped>
.product {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 2rem 2rem;
}
.product:hover {
    cursor: pointer;
}
.image-container {
    width: 15rem;
    height: 20rem;
    overflow: hidden;
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;
}
.productImage {
    height: 100%;
}
.productName {
    font-size: 1rem;
    color: #000000;
    margin-bottom: .8rem;
}
.price {
    color: #444444;
}
</style>