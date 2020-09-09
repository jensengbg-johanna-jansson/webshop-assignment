<template>
  <section class="product">
    <section class="imgCont"></section>
    <section class="infoCont">
      <h3>{{ cartItem.name }}</h3>
      <p>{{ cartItem.price }} SEK</p>
      <p class="size">{{ cartItem.size }}</p>
      <QuantityPicker />
    </section>
    <button @click="deleteFunc(cartItem)" class="deleteBtn">delete</button>
  </section>
</template>

<script>
import QuantityPicker from './quantityPicker.vue'
export default {
  components: {
    QuantityPicker,
  },
  data: () => {
    return {
      productToDelete: [],
    }
  },
  props: {
    cartItem: Object,
  },
  methods: {
    deleteFunc: function(item) {
      this.productToDelete.push(item)
      console.log(this.productToDelete)
      this.$store.dispatch('deleteProd', item)
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
  position: relative;
  width: 24rem;
  height: 18rem;
  margin: 2rem;
  @include flex();

  section {
    width: 50%;
    height: 100%;
    margin: 0rem 0.5rem;
  }

  .imgCont {
    background: #aaa;
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
      color: #666;
    }

    .size {
      margin-bottom: 1rem;
    }
  }
  .deleteBtn {
    position: absolute;
    bottom: 0rem;
    right: 3.2rem;
    background: none;
    border: solid #666 1px;
    border-radius: 4px;
    color: #666;
    padding: 0.4rem 2.4rem;
    text-transform: uppercase;
    transition: 0.3s all ease;
    cursor: pointer;

    &:hover {
      background: #222;
      border-color: #222;
      color: #f6f6f6;
    }
  }
}
</style>
