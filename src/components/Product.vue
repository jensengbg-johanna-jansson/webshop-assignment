<template>
  <section class="product">
    <section class="imgCont"></section>
    <section class="infoCont">
      <h3>{{ product.name }}</h3>
      <p>{{ product.price }} SEK</p>
      <p class="size">{{ product.size }}</p>
      <QuantityPicker />
      <button @click="deleteFunc(product)" class="deleteBtn">delete</button>
    </section>
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
  width: 24rem;
  height: 18rem;
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
      color: #666;
    }

    .size {
      margin-bottom: 1rem;
    }

    .deleteBtn {
      margin-top: auto;
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
}
</style>
