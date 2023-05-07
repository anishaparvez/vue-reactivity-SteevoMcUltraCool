<script setup>
import Favorites from '../components/Favorites.vue';
import FavSlot from '../components/FavSlot.vue';
import { nextTick,ref } from 'vue';
let favorites = window.localStorage.getItem("FavArray")
let rendering = ref(true)
if (favorites){
  favorites = JSON.parse(favorites)
}else{
  favorites=[]
}
async function remove(piece){
    let index = favorites.findIndex(p => p.name == piece.name)
    favorites.splice(index,1)
    window.localStorage.setItem("FavArray",JSON.stringify(favorites))
    rendering.value = false
    await nextTick()
    rendering.value = true
}
</script>

<template>
    <h1>Favorites</h1>
    <Favorites v-if="rendering">
        <FavSlot v-for="piece in favorites" :name="piece.name" :count="piece.count" @remove="function(){remove(piece)}"></FavSlot>
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