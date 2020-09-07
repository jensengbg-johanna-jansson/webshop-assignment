<template>
    <article class="product" @click="goToProduct">
        <img class="productImage" :src="product.img">
        <h2 class="productName">{{ product.name }}</h2>
        <h2 class="price">{{ product.price }}</h2>
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
    display: grid;
    grid-template-columns: repeat(3,1fr);
    

}

.productImage {
    width: 12rem;
    height: 10rem;
}

.productName {
    display: flex;
    align-self: center;
    justify-self: center;
}

.price {
    display: flex;
    align-self: center;
    justify-self: center;
}



</style>