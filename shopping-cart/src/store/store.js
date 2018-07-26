import Vue from 'vue'
import data from '../api/products'

export const Store = new Vue({
    data() {
        return {
            products : data,
            cart : []
        }
    },
    computed : {
        total() {
            return this.cart.reduce((accumulator,product) => {
                return accumulator + product.details.price * product.quantity
            },0)
        }
    },
    methods : {
        addToCart(product) {
            const index = this.cart.findIndex(item => {
                return item.details.id === product.id
            }) 

            if(index === -1) {
                this.cart.push({
                    details : product,
                    quantity : 1
                })
            } else {
                this.cart[index].quantity++
            }
        }, 
        removeFromCart(id) {
            const index = this.cart.findIndex(item => {
                return item.details.id === id
            })
            
            if(this.cart[index].quantity <=1){
                this.cart.splice(index,1)
            } else {
                this.cart[index].quantity--
            }
        }
    }
})