<script setup>
import data from "../data.js"
import Card from "../components/Card.vue"
import CardHolder from "../components/CardHolder.vue";
import { RouterLink, RouterView } from 'vue-router'
import router from "../router/index.js"
let favorites = window.localStorage.getItem("FavArray")
if (favorites){
  favorites = JSON.parse(favorites)
}else{
  favorites=[]
}
function favorite(piece){
  let x = favorites.findIndex(p=> p.name == piece.name)
  if (x>=0){
    favorites[x].count+=1
  }else{
    favorites.push({
      name:piece.name,
      icon:piece.image,
      count:1,
    })
  }
  console.log(favorites)
  window.localStorage.setItem("FavArray",JSON.stringify(favorites))
}

</script>

<template>
    <RouterLink :to="{name:'fav'}">Favorites</RouterLink>
    <h1>Chess Pieces</h1>
  <CardHolder>
    <Card v-for="piece in data"  :name="piece.name" :value="piece.value" :desc="piece.desc" :image="piece.image" @_clicked="function(){favorite(piece)}" />
  </CardHolder>
</template>
<style>
  h1 {
    background-color: aquamarine;
    text-align: center;
    font-weight: 900;
  }
</style>
