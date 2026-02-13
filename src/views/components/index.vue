<template>
    <main>
        <div class="siderbar">
            <Siderbar/>
        </div>
        <div class="content-index">
            <RouterView></RouterView>
        </div>
    </main>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';

import { getPathName } from '@/hooks/getpathname';

import Siderbar from './siderbar/siderbar.vue';

const router = useRouter();

onMounted(() => {
    getPathName(window.location.pathname);
})
</script>

<style scoped>
main {
    width: 100%;
    height: 100%;
    display: flex;
    background-color: white;
}

.siderbar {
    width: 18%;
    height: calc(100% - var(--input-label-padding));
    padding: var(--input-label-padding);
    overflow-y:auto;
    overflow-x: hidden;
}

.content-index {
    width: 100%;
    height: 100%;
    box-sizing:border-box;
    padding: 0 0 0 40px;
    overflow: hidden;
}
</style>
