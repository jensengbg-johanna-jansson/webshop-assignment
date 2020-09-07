<template>
    <article class="product">
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