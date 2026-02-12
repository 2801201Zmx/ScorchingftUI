<template>
    <div class="sf-card" :style="styles">
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
import { CSSProperties, onMounted, PropType, ref, watch } from 'vue';


const props = defineProps({
    width: {
        type: [Number, String],
        default: 300
    },
    height: {
        type: [Number, String],
        default: 200
    },
    border: {
        type: String,
        default: '1px'
    },
    solid: {
        type: Boolean,
        default: false
    },
    dashed: {
        type: Boolean,
        default: false
    },
    color: {
        type: String,
        default: '#ce9bfd'
    }
});

const styles = ref<CSSProperties | null>(null);

watch(() => props, (newVal) => {
    if(typeof(newVal.width) == 'string' && typeof(newVal.height) == 'string') {
        styles.value = {
            width: newVal.width,
            height: newVal.height,
            border: `${newVal.border} ${newVal.dashed ? 'dashed' : 'solid'} ${newVal.color}`,
        }
    } else {
        styles.value = {
            width: `${newVal.width}px`,
            height: `${newVal.height}px`,
            border: `${newVal.border} ${newVal.dashed ? 'dashed' : 'solid'} ${newVal.color}`,
        }
    }
}, { deep: true });

onMounted(() => {
    if(typeof(props.width) == 'string' && typeof(props.height) == 'string') {
        styles.value = {
            width: props.width,
            height: props.height,
            border: `${props.border} ${props.dashed ? 'dashed' : 'solid'} ${props.color}`,
        }
    } else {
        styles.value = {
            width: `${props.width}px`,
            height: `${props.height}px`,
            border: `${props.border} ${props.dashed ? 'dashed' : 'solid'} ${props.color}`,
        }
    }
})
</script>

<style scoped></style>