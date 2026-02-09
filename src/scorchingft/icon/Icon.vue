<template>
    <div class="sf-icon" :style="styles">
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
import { CSSProperties, onMounted, ref, watch } from 'vue';


const props = defineProps({
    size: {
        type: Number || String,
        default: 30
    },
    color: {
        type: String,
        default: '#ce9bfd'
    }
});

const styles = ref<CSSProperties | null>(null);

watch(() => props, (newVal) => {
    if (typeof (newVal.size) == 'string') {
        styles.value = {
            width: newVal.size,
            height: newVal.size,
            color: newVal.color,
        }
    } else {
        styles.value = {
            width: `${newVal.size}px`,
            height: `${newVal.size}px`,
            color: newVal.color,
        }
    }
}, { deep: true });

onMounted(() => {
    if (typeof (props.size) == 'string') {
        styles.value = {
            width: props.size,
            height: props.size,
            color: props.color,
        }
    } else {
        styles.value = {
            width: `${props.size}px`,
            height: `${props.size}px`,
            color: props.color,
        }
    }
})
</script>

<style scoped></style>