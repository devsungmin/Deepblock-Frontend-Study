<template>
  <div class="products">
    <v-container>
        <h1>제품</h1>
       <v-card v-for="product in products" :key="product.id">
    <v-layout>
        <v-flex xs3>
            <v-img :src="product.imgsrc" contain height="125px"></v-img>
        </v-flex>
        <v-layout column>
            <v-card-title><h1>{{ product.title }}</h1></v-card-title>
            <v-card-text>{{ `$ ${product.price} (Inventory: ${product.inventory})` }}</v-card-text>
            <v-card-actions>
                <v-btn :disabled="product.inventory <= 0" @click="addToCart(product)">Add Cart</v-btn>
            </v-card-actions>
        </v-layout>
    </v-layout>
</v-card>
        <v-spacer/>
        <h1>장바구니 ($ {{totalAmount}}) </h1>
        <v-card>
            <v-layout>
                <v-flex xs3>
                    <v-img contain height="125px"></v-img>
                </v-flex>
                <v-layout column>
                    <v-card-title></v-card-title>
                    <v-card-text></v-card-text>
                </v-layout>
            </v-layout>
        </v-card>
    </v-container>
  </div>
</template>

<script lang="js">
    export default {
        data() {
            return {
                products: [ {
        id: 1,
        title: 'Apple iPad (Wi-Fi, 32GB) - Space Gray',
        price: 350,
        inventory: 7,
        imgsrc: 'https://images-na.ssl-images-amazon.com/images/I/51x4j48wCpL._SL1024_.jpg'
    },
    {
        id: 2,
        title: 'Apple iPhone XR (64GB) - RED',
        price: 749,
        inventory: 5,
        imgsrc: 'https://images-na.ssl-images-amazon.com/images/I/51YXG1bDM5L._SL1024_.jpg'
    },
    {
        id: 3,
        title: 'Apple Macbook Retina Display Laptop',
        price: 949,
        inventory: 2,
        imgsrc: 'https://images-na.ssl-images-amazon.com/images/I/819zx3uAjhL._SL1500_.jpg'
    },
                ],
                cartItems: [
                ],
                totalAmount: 0
            }
        },
        methods: {
        }
    }
</script>
