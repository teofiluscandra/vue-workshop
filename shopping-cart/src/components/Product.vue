<template>
    <div class="card">
        <div class="card-image">
            <figure class="image is-4by3">
            <img :src="product.imageSrc" alt="Placeholder image">
            </figure>
        </div>
        <div class="card-content">
            <div class="media">
            <div class="media-content">
                <p class="title is-4">{{product.name}}</p>
                <div class="content">
                    {{product.desc}}
                    <br>
                </div>
                <h5>{{product.price | rupiah}}</h5>
                <!-- <AddToCart/> -->
                <button class="button is-primary" @click="addToCart(product)">Add To Cart</button>  
            </div>
            </div>
        </div>
    </div>
</template>
<script>
    import AddToCart from './AddToCart.vue' 
    import {Store} from '../store/store'
    export default {
        name : 'Product',
        components : {
            AddToCart
        },
        props : {
            product : Object
        },
        filters : {
            rupiah : num => `Rp. ${num}`
        },
        methods : {
            addToCart(product){
                Store.addToCart(product)
            }
        }
    }
</script>
