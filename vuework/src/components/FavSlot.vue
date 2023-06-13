<script setup>
let prop = defineProps(["name","count"])
</script>

<template>
    <div>
        <h2>{{ prop.name }} &nbsp; <button @click="$emit('remove')">Remove</button></h2>
        <p>You're ordering {{prop.count}} times</p>
    </div>
</template>

<style scoped>
    div {
        margin: 5px auto;
        padding: 2px;
        width: calc(100% - 10px);
        color: lightgreen;
        background-color: black;
    }
</style>