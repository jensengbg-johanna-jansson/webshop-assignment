<template>
  <div class="wrapper">
    <h1>Shopping cart</h1>
    <section class="productSection">
      <Product />
    </section>
  </div>
</template>

<script>
import Product from '@/components/Product.vue'
export default {
  components: {
    Product,
  },
}
</script>

<style lang="scss" scoped>
.wrapper {
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  h1 {
    margin: 1rem 0rem 4rem 0rem;
  }
}
</style>
