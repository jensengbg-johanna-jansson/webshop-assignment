<template>
  <div class="totalPrice">
    <section class="info">
      <h2>total amount</h2>
      <p class="price">{{ totalPrice }} SEK</p>
    </section>
    <button class="cta">check out</button>
  </div>
</template>

<script>
export default {
  computed: {
    totalPrice() {
      let totalPrice = 0
      this.$store.state.cart.map((elem) => (totalPrice += elem.price))
      return totalPrice
    },
  },
}
</script>

<style lang="scss" scoped>
.totalPrice {
  width: 100%;
  max-height: 10rem;
  padding: 2rem 6rem;
  margin-bottom: 4rem;
  margin-top: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .info {
    p {
      color: #666;
    }

    * {
      margin: 0.5rem 0rem;
    }
  }

  .cta {
    background: #222;
    border: none;
    padding: 1rem 4rem;
    color: #f6f6f6;
    text-transform: uppercase;
    border-radius: 4px;
    border: 1px solid #222;
    cursor: pointer;
    transition: all 0.4s ease;

    &:hover {
      background: #fff;
      color: #222;
    }
  }
}
</style>

/* export default { created() { console.log('created...') }, computed: {
totalPrice() { const items = this.$store.state.cart let result = 0
items.map((item) => (result += parseInt(item.price))) return result }, }, } */
