<template>
    <div class="example">
        <div class="example-showcase">
            <slot name="preview"></slot>
        </div>
        <div class="op-btns">
            <slot name="button"></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.example {
    width: 100%;
}

.example-showcase {
    display: flex;
    width: 100%;
    box-sizing: border-box;
    padding: 30px;
    border: 1px solid var(--overview-card-color);
}

.op-btns {
    display: flex;
    width: 100%;
    height: 30px;
    box-sizing: border-box;
    align-items: center;
    justify-content: flex-end;
    margin: -1px 0 0 0;
    border: 1px solid var(--overview-card-color);
}
</style>