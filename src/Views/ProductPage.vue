<template>
<div class="product">
    <header>
    <title>Product Page</title>
    <h1>Product Page</h1>
    </header>
    <main>
        <ul class="list_products">
        <Product/>
        <Product/>
        
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
    }


}
</script>

<style scoped>

h1 {
    display: grid;
    justify-content: center;
}

main {
    display: grid;
    grid-template-rows: repeat(4,1fr);
    grid-template-columns: repeat(3,1fr);
    grid-gap: 4rem;
    justify-items: center;
}

.productName {
    grid-column: 2;
}

.price {
    grid-column: 3;
}

.product {
    justify-content:  space-between;
    grid-column: 1/3;
    
   
}

.list_products {
    grid-column: 1/4;
    display: grid;
    grid-template-rows: repeat(4,1fr);
    grid-template-columns: repeat(3,1fr);
    justify-content: center;
    grid-row-gap: 3rem;
}












    


</style>