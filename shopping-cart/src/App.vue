<template>
  <div id="app">
    <div class="container">
      <NavBar />
      <div class="columns">
        <div class="column is-two-thirds">
            <ProductList/>
        </div>
        <div class="column">
          <h3>Shopping Cart</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import ProductList from './components/ProductList.vue'

export default {
  name: 'app',
  components: {
    NavBar,
    ProductList
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
