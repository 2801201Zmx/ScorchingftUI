<template>
    <div cursor class="sf-button">
        <slot></slot>
    </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.sf-button {
    width: fit-content;
    box-sizing: border-box;
    padding: 8px 15px;
    border: 1px solid #ccc;
    border-radius: 5px;
}
</style>