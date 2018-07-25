<template>
  <div id="app">
    <div class="container">
      <NavBar />
      <div class="columns">
        <div class="column is-two-thirds">
          <Product imageSrc="https://cdn-images-1.medium.com/max/1200/1*-PlqbnwqjqJi_EVmrhmuDQ.jpeg" name="Sepatu" price="12000" desc="Converse" />
        </div>
        <div class="column">
          <h3>Shooping Cart</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import Product from './components/Product.vue'

export default {
  name: 'app',
  components: {
    NavBar,
    Product
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
