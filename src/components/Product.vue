<template>
  <section class="product">
    <section class="imgCont"></section>
    <section class="infoCont">
      <h3>{{ product.name }}</h3>
      <p>{{ product.price }} SEK</p>
      <p class="size">{{ product.size }}</p>
      <button @click="deleteFunc(product)">delete</button>
    </section>
  </section>
</template>

<script>
export default {
  data: () => {
    return {
      product: {
        name: 'First test product',
        size: 'M',
        price: 299,
        img: '',
      },
      productToDelete: {},
    }
  },
  methods: {
    deleteFunc: function(prod) {
      console.log(prod)
      this.productToDelete = prod
      console.log('This is the deleted product', this.productToDelete)
    },
  },
}
</script>

<style></style>

/* name: 'First test product', size: 'M', price: 299, img: '', */
