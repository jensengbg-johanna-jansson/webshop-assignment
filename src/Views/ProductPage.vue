<template>
<div class="product">
    <header>
    <title>Product Page</title>
    <h1>Product Page</h1>
    </header>
    <main>
        
    <h2 id="productName">Product name</h2>
    <h2 id="price">Price</h2>
        

        <div class="images">
    <img src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80">
    <img src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80">
    <img src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80">
    </div>
    <div class="pnames">
    <h2 id="p1">T-Shirt</h2>
    <h2 id="p2">Jeans</h2>
    </div>
    </main>


    
    
</div>
    
</template>

<script>
export default {
    name: 'ProductPage'
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
    width: 70%;
    height: 70%;
    
    
}

.images {
    grid-row: 2/4;
    display: grid;
    align-self: center;

    
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

.pnames {
    
    display: grid;
    grid-row: 2/4;
}

#p2 {
    grid-row: 4;
    grid-column: 2;
}
    


</style>