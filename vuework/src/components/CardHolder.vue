<script setup>
</script>

<template>
    <div >
        <slot></slot>
    </div>
</template>

<style scoped>
div {
    overflow: auto;
    height: 90vh;
    width: 90vw;
    margin: auto auto;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    align-content: space-around;
    background-color: #F9C
}
</style>