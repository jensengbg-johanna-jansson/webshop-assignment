<template>
  <div id="app">
    <mainHeader />
    <router-view />
  </div>
</template>

<script>
import mainHeader from '@/components/mainHeader.vue';

export default {
  components: {
    mainHeader
  }
}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  align-items: center;
}

* {
  padding: 0rem;
  margin: 0rem;
  box-sizing: border-box;
}
</style>
