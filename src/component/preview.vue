<template>
    <div class="main">
        <div class="h1-title">
            <slot name="title"></slot>
        </div>
        <div class="content">
            <slot name="content"></slot>
        </div>
        <div class="code">
            
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.main {
    width: 100%;
    height: 100%;
    padding: 0 20px 20px 20px;
}

.h1-title {
    font-size: 1.4rem;
    font-weight: bold;
}

.content {
    font-size: 1.1rem;
}
</style>