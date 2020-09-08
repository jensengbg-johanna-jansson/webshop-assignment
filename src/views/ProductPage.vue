<template>
<div class="product-container">
    <main>
        <ul class="list_products">
            <Product v-for="(product, index) in addProducts" :key="index" :product="product"/>       
        </ul>
    
    </main>


    
    
</div>
    
</template>

<script>
import Product from '../components/product'
export default {
    name: 'ProductPage',

    components: {
        Product,
    },

    computed: {
        addProducts() {
       return this.$store.state.products
        }
    },

    


}
</script>

<style scoped>

h1 {
    display: grid;
    justify-content: center;
}

.product-container {
    width: 85vw;
    max-width: 2000px;
}

.list_products {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}












    


</style>