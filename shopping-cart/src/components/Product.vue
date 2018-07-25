<template>
    <div class="card">
        <div class="card-image">
            <figure class="image is-4by3">
            <img :src="imageSrc" alt="Placeholder image">
            </figure>
        </div>
        <div class="card-content">
            <div class="media">
            <div class="media-content">
                <p class="title is-4">{{name}}</p>
                <div class="content">
                    {{desc}}
                    <br>
                </div>
                <h5>{{price | rupiah}}</h5>
            </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name : 'Product',
        props : {
            name : String,
            price : Number,
            imageSrc : String,
            desc : String
        },
        filters : {
            rupiah : num => `Rp. ${num}`
        }
    }
</script>
