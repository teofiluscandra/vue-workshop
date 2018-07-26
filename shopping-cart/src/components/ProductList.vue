<template>
    <div>
        <h3>Our Products</h3>
        <div class="columns">
            <div :key="product.id" v-for="product in products" class="column">
                <Product :product="product" />
            </div>
        </div>
    </div>
</template>
<script>
    import {Store} from '../store/store'
    import Product from './Product.vue'
    export default {
        name : 'ProductList',
        components : {
            Product
        },
        data : function() {
            return {
                products : Store.$data.products
            }
        },
    }
</script>