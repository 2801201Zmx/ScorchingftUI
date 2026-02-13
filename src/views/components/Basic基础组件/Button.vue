<template>
    <Content :setupsteps="setupSteps">
        <template #button-preview>
            <example>
                <template #preview>
                    <sf-button>
                        Default
                    </sf-button>
                </template>
            </example>
        </template>
    </Content>
</template>

<script setup lang="ts">

import { reactive } from 'vue';

import type { SetupSteps } from '@/types/type';

import Content from '@/component/Content.vue';
import example from '@/component/example.vue';

const setupSteps = reactive<SetupSteps[]>([
    {
        title: 'Button 按钮',
        subheading: '',
        maintext: '常用的操作按钮',
        code: '',
        codetype: '',
        isshell: false
    },
    {
        title: '',
        subheading: '基础用法',
        maintext: '使用一些属性来定义按钮样式',
        code: '',
        codetype: 'vue',
        slot: 'button',
        isshell: false
    }
]);
</script>

<style scoped></style>