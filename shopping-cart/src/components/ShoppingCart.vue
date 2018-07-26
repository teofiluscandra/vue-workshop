<template>
    <table class="table is-fullwidth">
        <thead>
            <tr>
                <th>Item Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="product in cart" :key="product.id">
                <td>{{product.details.name}}</td>
                <td>{{product.details.price | currency}}</td>
                <td>{{product.quantity}}</td>
                <td><button class="button is-danger is-small" @click="removeFromCart(product.details.id)">-</button></td>
            </tr>
        </tbody>
    </table>
</template>
<script>
    import {Store} from '../store/store'

    export default {
        computed : {
            cart(){
                return Store.$data.cart
            }
        },
        methods : {
            removeFromCart(id){
                Store.removeFromCart(id)
            }
        }
    }
</script>