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

<style></style>
