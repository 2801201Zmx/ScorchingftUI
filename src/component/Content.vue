<template>
    <div class="content">
        <div class="zhan"></div>
        <slot></slot>
        <div class="content-view" v-for="(item, index) in props.setupsteps">
            <div class="hr" v-if="item.isgap"></div>
            <div class="title">
                <div class="h1">
                    {{ item.title }}
                </div>
                <div class="h2">
                    {{ item.subheading }}
                </div>
                <div class="text">
                    <p>
                        {{ item.maintext }}
                    </p>
                    <slot :name="`${item.slot}-text`"></slot>
                </div>
            </div>
            <div class="method" v-if="item.subheading == '通过包管理器'">
                <slot name="install"></slot>
            </div>
            <Code :isShell="item.isshell" :code="item.code" v-if="item.code !== ''">
                <template #codetype>
                    {{ item.codetype }}
                </template>
                <template #code>
                    <span class="codecolor">{{ item.code }}</span>
                </template>
            </Code>
            <div class="preview">
                <slot :name="`${item.slot}-preview`"></slot>
                <slot :name="`${item.slot}-preview`" :title="item.subheading"></slot>
            </div>
        </div>
        <div class="api" v-if="props.isapi">
            <div class="hr"></div>
            <div class="title">
                <div class="h1">
                    API
                </div>
                <div :class="indexs" v-for="(apis, indexs) in api">
                    <div class="h2">
                        {{ indexs }}
                    </div>
                    <table cellpadding="0" cellspacing="0">
                        <thead>
                            <tr>
                                <th>
                                    {{ apititle[indexs][0] }}
                                </th>
                                <th>
                                    {{ apititle[indexs][1] }}
                                </th>
                                <th>
                                    {{ apititle[indexs][2] }}
                                </th>
                                <th>
                                    {{ apititle[indexs][3] }}
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(item, index) in apis">
                                <td>
                                    {{ item.name }}
                                </td>
                                <td>
                                    {{ item.meaning }}
                                </td>
                                <td>
                                    {{ item.type }}
                                </td>
                                <td>
                                    {{ item.default }}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div class="zhan-di"></div>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';

import Code from '@/component/code.vue';

import type { Attributessslots, SetupSteps, Api, Apititle } from '@/types/type';

const props = defineProps({
    setupsteps: {
        type: Array<SetupSteps>,
        default: []
    },
    api: {
        type: Object as () => Api,
        default: {}
    },
    isapi: {
        type: Boolean,
        default: true
    }
});

const apititle = reactive<Apititle>({
    "attributes": ['属性', '说明', '类型', '默认值'],
    "slots": ['插槽名', '说明'],
})

</script>

<style scoped>
.zhan {
    height: 80px;
}

.zhan-di {
    height: 50px;
}

.content {
    width: 100%;
    height: 100%;
    overflow-y: auto;
    overflow-X: hidden;
    box-sizing: border-box;
    padding: 0 30px 0 40px;
}

.content-view {
    width: 100%;
}

.title {
    margin: 20px 0;
}

.h1 {
    font-size: 2rem;
    font-weight: bold;
    color: var(--topic-color-text);
}

.h2 {
    font-size: 1.6rem;
    font-weight: bold;
    color: var(--topic-color-text);
}

.text {
    font-size: 1.1rem;
    color: var(--topic-color-text);
}

.method {
    margin-top: 20px;
    background-color: var(--code-background-color);
    overflow: hidden;
}

.hr {
    height: 2px;
    background-color: #cccccc67;
    margin: 35px 0;
}

.preview {
    width: 100%;
    margin: 0 auto;
}

.slots {
    margin-top: 40px;
}

.attributes .h2,
.slots .h2 {
    margin: 20px 0 10px 0;
}

table {
    width: 100%;
    height: auto;
}

table tr th, 
table tr td {
    text-align: left;
    box-sizing: border-box;
    padding: 8.4px 14px;
    border-bottom: 1px solid #ccc;
    color: rgb(56, 56, 56);
}

table tbody tr:nth-child(2n-1){
    background-color: rgba(251, 240, 255, 0.788);
}

table tr th:nth-child(1),
table tr td:nth-child(1) {
    width: 180px;

}

table tr th:nth-child(2),
table tr td:nth-child(2) {
    width: 360px;
}

table tr th:nth-child(3),
table tr td:nth-child(3) {
    width: 360px;
}

table tr th:nth-child(4),
table tr td:nth-child(4) {
    width: 360px;
}
</style>