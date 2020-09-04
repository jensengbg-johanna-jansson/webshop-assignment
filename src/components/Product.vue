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
      this.productToDelete = prod
      console.log('This is the deleted product', this.productToDelete)
    },
  },
}
</script>

<style lang="scss" scoped>
@mixin flex {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.product {
  width: 20rem;
  height: 20rem;
  background: #eee;
  @include flex();

  section {
    width: 50%;
    height: 100%;
  }

  .infoCont {
    @include flex();
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    h3 {
      margin-bottom: 1rem;
    }

    p {
      margin: 0.2rem 0rem;
    }
  }
}
</style>
