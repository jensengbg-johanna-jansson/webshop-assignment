<template>
  <div class="wrapper">
    <h1>Shopping cart</h1>
    <section class="productSection"></section>
    <TotalValue />
  </div>
</template>

<script>
import TotalValue from '@/components/TotalValue.vue'
export default {
  components: {
    TotalValue,
  },
}
</script>

<style lang="scss" scoped>
.wrapper {
  max-width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  h1 {
    margin: 3rem 0rem 3rem 0rem;
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
