<script setup>
import Button from "./Button.vue"
let prop = defineProps(["name","value","desc","image"])

</script>

<template>
    <div>
        <h2>{{prop.name }}</h2>
        <img :src="prop.image">
        <h4>Value: {{ prop.value }}</h4>
        <p>{{ prop.desc }}</p>
        <Button @clicked="$emit('_clicked')"></Button>
    </div>
</template>

<style scoped>
div {
    aspect-ratio: 1;
    width: 30%;
    max-height: 49%;
    overflow: auto;
    background-color: #ACE;
    color: white;
    text-align: center;

}
img {
    max-height: 60%;
    max-width: 100%;
}
</style>