<script setup>
import data from "../data.js"
import Card from "../components/Card.vue"
import CardHolder from "../components/CardHolder.vue";
import { RouterLink, RouterView } from 'vue-router'
import router from "../router/index.js"
let cartItems = window.localStorage.getItem("cartItems")
if (cartItems){
  cartItems = JSON.parse(cartItems)
}else{
  cartItems=[]
}
function addCart(piece){
  let x = cartItems.findIndex(p=> p.name == piece.name)
  if (x>=0){
    cartItems[x].count+=1
  }else{
    cartItems.push({
      name:piece.name,
      icon:piece.image,
      count:1,
    })
  }
  console.log(cartItems)
  window.localStorage.setItem("cartItems",JSON.stringify(cartItems))
}

</script>

<template>
    <RouterLink :to="{name:'cart'}">Cart</RouterLink>
    <h1>Make your order</h1>
  <CardHolder>
    <Card v-for="food in data"  :name="food.name" :value="food.value" :desc="food.desc" :image="food.image" @_clicked="function(){addCart(food)}" />
  </CardHolder>
</template>
<style>
  h1 {
    background-color: aquamarine;
    text-align: center;
    font-weight: 900;
  }
</style>
