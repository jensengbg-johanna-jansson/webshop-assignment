<template>
<div class="product">
    <header>
    <title>Product Page</title>
    <h1>Product Page</h1>
    </header>
    <main>

        <Product/>
        
    <h2 id="productName">Product name</h2>
    <h2 id="price">Price</h2>
        

    <ul id="images">
    <img id="img1" src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80">
    <img id="img2" src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80">
    <img id="img3" src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80">
    </ul>

    <ul id="pnames">
        <h2 id="p1">T-Shirt</h2>
    <h2 id="p2">Jeans</h2>
    </ul>

    <ul id="prices">
        <h2>200 kr </h2>
        <h2> 350 kr </h2>
    </ul>
    
    
    
    </main>


    
    
</div>
    
</template>

<script>
import { component } from 'vue/types/umd'
import Product from '../components/product'
export default {
    name: 'ProductPage',

    components: {
        Product,
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
}
img {
    width: 100%;
    height: 70%;
    
    
}

#images {
    grid-row: 2/4;
    display: grid;
    grid-template-rows: repeat(4,1fr);
    
    
    

    
}

#prices {
    grid-row: 2/4;
    display: grid;
    grid-template-rows: repeat(4,1fr);
    justify-content: center;

}



#productName {
    grid-column: 2;
    display: flex;
    align-self: flex-end;
    justify-self: center;
}

#price {
    grid-column: 3;
    display: flex;
    align-self: flex-end;
    justify-self: center;
}

#pnames {
    
    display: grid;
    grid-template-rows: repeat(4,1fr);
    grid-row: 2/4;
    justify-content: center;
    
}



img1 {
    grid-row: 2;
}

img2 {
    grid-row: 3;
}

img3 {
    grid-row: 4;
}
    


</style>