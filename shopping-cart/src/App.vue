<template>
  <div id="app">
    <div class="container">
      <NavBar />
      <div class="columns">
        <div class="column is-two-thirds">
            <ProductList/>
        </div>
        <div class="column">
          <h3 class="title is-4">Shopping Cart</h3>
          <ShoppingCart />
          <h3>Total : {{total | currency}}</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import ProductList from './components/ProductList.vue'
import ShoppingCart from './components/ShoppingCart.vue'
import {Store} from './store/store'

export default {
  name: 'app',
  components: {
    NavBar,
    ProductList,
    ShoppingCart
  },
  computed: {
    total(){
      return Store.total
    }
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
