<template>
    <article class="product">
        <img class="productImage" src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80">
        <h2 class="productName">T-Shirt</h2>
        <h2 class="price">Price</h2>


    </article>
</template>

<script>
export default {
    name: 'Product',

    props: [
        product,

    ]
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