<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Favorites from '../components/Favorites.vue';
import FavSlot from '../components/FavSlot.vue';
import { nextTick,ref } from 'vue';
let cartItems = window.localStorage.getItem("cartItems")
let rendering = ref(true)
if (cartItems){
  cartItems = JSON.parse(cartItems)
}else{
  cartItems=[]
}
async function remove(piece){
    let index = cartItems.findIndex(p => p.name == piece.name)
    cartItems.splice(index,1)
    window.localStorage.setItem("cartItems",JSON.stringify(cartItems))
    rendering.value = false
    await nextTick()
    rendering.value = true
}
</script>

<template>
<RouterLink to="/">Home </RouterLink>
    <h1>Your Cart</h1>
    <Favorites v-if="rendering">
        <FavSlot v-for="piece in cartItems" :name="piece.name" :count="piece.count" @remove="function(){remove(piece)}"></FavSlot>
    </Favorites>
</template>
<style scoped>
  h1 {
    background-color: black;
    text-align: center;
    font-weight: 900;
    color: white;
  }
</style>