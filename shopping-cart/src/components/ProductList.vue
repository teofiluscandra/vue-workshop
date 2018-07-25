<template>
    <div>
        <h3>Our Products</h3>
        <div class="columns">
            <div :key="product.id" v-for="product in products" class="column">
                <Product :imageSrc="product.imageSrc" :name="product.name" :price=product.price :desc="product.desc" />
            </div>
        </div>
    </div>
</template>
<script>
    import data from '../api/products.js'
    import Product from './Product.vue'
    export default {
        name : 'ProductList',
        components : {
            Product
        },
        data : function() {
            return {
                products : data
            }
        },
    }
</script>