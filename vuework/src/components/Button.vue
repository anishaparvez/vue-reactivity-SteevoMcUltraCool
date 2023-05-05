<script setup>
</script>
<template>
    <button @click="$emit('clicked')">
        Add to favorite list!
    </button>
</template>
<style scoped>
    button {
        padding: 3px;
        border-radius: 20px;
        background-color: white;
        color:black;
        border: 1px solid black;
        transition: all 0.2s;
    }
    button:hover {
        transform: scale(1.03);
        box-shadow: 0px 0px 3px white;
    }
</style>