<template>
  <div class="wrapper">
    <h2>MY PRODUCTS</h2>
    <div class="productSection">
      <ProductList
        v-for="item in cartItems"
        :key="item.name"
        :cartItem="item"
      />
    </div>
    <TotalValue />
  </div>
</template>

<script>
import ProductList from '@/components/ProductList.vue'
import TotalValue from '@/components/TotalValue.vue'
export default {
  components: {
    ProductList,
    TotalValue,
  },
  computed: {
    cartItems() {
      return this.$store.state.cart
    },
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

  h2 {
    margin: 4rem 0rem 1rem 0rem;
  }

  .productSection {
    width: 100%;
    margin-top: auto;
    margin: 3rem 0rem 2rem 0rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
}
</style>
