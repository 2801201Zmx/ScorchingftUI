<template>
    <Content :setupsteps="setupSteps" :attributes="attributes" :slots="slots" :isapi="false">
        <template #start-text>
            <p>
                ScorchingftComponents是一个全新的，完全基于vue3开发的新一代UI组件库，
            </p>
            <p>
                由于该组件<a class="cursor" href="https://baike.baidu.com/item/出炉/6252413" target="_blank">刚出炉
                    <sup>1</sup></a>，现在还处于快速的更新迭代中
            </p>
        </template>
        <template #jianrong-text>
            <div class="jianrong">
                <p>
                    下边是对于现代化主流浏览器和
                    <a class="cursor" href="https://baike.baidu.com/item/Electron/60878453" target="_blank">桌面应用程序
                        <sup>2</sup>
                    </a>
                    近两个版本的兼容性
                </p>
                <table cellpadding="0" cellspacing="0">
                    <thead>
                        <tr>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>
                                浏览器
                            </th>
                            <td v-for="(item, index) in compatibility" :key="index">
                                <img :src="item.img" alt="">
                                <span>
                                    {{ item.browser }}
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <th>
                                版本
                            </th>
                            <td v-for="(item, index) in compatibility" :key="index">
                                <span>
                                    {{ item.version }}
                                </span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </template>
        <template #install>
            <div class="method-title">
                <span class="cursor" v-for="item in installMethods" :style="{ borderBottom: borderbottom[item.id - 1] }"
                    @click="changeMethod(item.id)">
                    <sf-icon :size="25">
                        <component :is="item.name"></component>
                    </sf-icon>
                    <div class="packagename">
                        {{ item.name }}
                    </div>
                </span>
            </div>
        </template>
    </Content>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';

import Content from '@/component/Content.vue';

import codeText from '@/codetext';

import type { Slotss, Attributess, InstallMethodsItem, SetupSteps, Compatibility } from '@/types/type';

const installMethods = reactive<Array<InstallMethodsItem>>([
    {
        "id": 1,
        "name": 'npm',
    },
    {
        "id": 2,
        "name": 'pnpm',
    },
    {
        "id": 3,
        "name": 'yarn'
    }
]);

const compatibility = reactive<Array<Compatibility>>([
    {
        browser: 'IE/Edge',
        img: 'https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_32x32.png',
        version: 'last 2 versions'
    },
    {
        browser: 'Chrome',
        img: 'https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_32x32.png',
        version: 'last 2 versions'
    },
    {
        browser: 'Safari',
        img: 'https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_32x32.png',
        version: 'last 2 versions'
    },
    {
        browser: 'Firefox',
        img: 'https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_32x32.png',
        version: 'last 2 versions'
    },
    {
        browser: 'Opera',
        img: 'https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_32x32.png',
        version: 'last 2 versions'
    },
    {
        browser: 'Electron',
        img: 'https://raw.githubusercontent.com/alrra/browser-logos/master/src/electron/electron_32x32.png',
        version: 'last 2 versions'
    }
]);

const id = ref<number>(0);
const borderbottom = ref<Array<string>>([]);

borderbottom.value[0] = '3px solid #ca92ff';

const attributes = reactive<Array<Attributess>>([]);

const slots = reactive<Array<Slotss>>([]);

const setupSteps = reactive<Array<SetupSteps>>([
    {
        title: "安装",
        subheading: "",
        maintext: "在这里，您可以了解如何开始使用 Scorchingft 组件库。我们提供了详细的指南和示例，帮助您快速上手。",
        code: "",
        codetype: "",
        isshell: false
    },
    {
        title: "",
        subheading: "开始",
        maintext: "",
        code: "",
        codetype: "",
        slot: "start",
        isshell: false
    },
    {
        title: "",
        subheading: "兼容性",
        maintext: "",
        code: "",
        codetype: "",
        slot: "jianrong",
        isshell: false
    },
    {
        title: "",
        subheading: "通过包管理器",
        maintext: "",
        code: "",
        codetype: "",
        isshell: false,
        isgap: true
    },
    {
        title: "浏览器直接引入",
        subheading: "使用unpkg",
        maintext: "",
        code: codeText[0],
        codetype: 'html',
        isshell: false
    },
    {
        title: "",
        subheading: "使用jsDelivr",
        maintext: "",
        code: codeText[1],
        codetype: 'html',
        isshell: false
    },
    {
        title: "用法",
        subheading: "完整引入",
        maintext: "如果你对打包后的文件大小不是很在乎，那么使用完整导入会更方便。",
        code: codeText[2],
        codetype: "main.ts",
        isshell: false,
        isgap: true
    }
])

const indexs = setupSteps.findIndex(item => item.subheading?.trim() === '通过包管理器');

setupSteps[indexs].code = 'npm install scorchingftui';

function changeMethod(index: number) {
    setupSteps[indexs].code = installMethods[index - 1].name + ' install scorchingftui';
    borderbottom.value[index - 1] = '3px solid #ca92ff';

    if (id.value != index - 1) {
        borderbottom.value[id.value] = 'none';
        id.value = index - 1;
    }
}

</script>

<style scoped>
p {
    font-size: 1.1rem;
    color: var(--topic-color-text);
}

p a {
    text-decoration: none;
    font-size: 1.1rem;
    color: var(--topic-color-text);
}

p a:hover {
    border-bottom: 1px solid var(--topic-color-text);
}

.method-title {
    width: 96%;
    padding: 0 20px;
    border-bottom: 1px solid #ccc;
    flex-wrap: nowrap;
}

.method-title span {
    display: inline-flex;
    width: 72px;
    padding: 10px;
    justify-content: center;
}

.method-title span:hover {
    background-color: #c1c8ce3f;
}

.packagename {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.9rem;
}

table {
    width: 100%;
    border-collapse: collapse;
}

table tr th,
table tr td {
    box-sizing: border-box;
    padding: 8.4px 14px;
    border: 1px solid;
    text-align: center;
}

table tr td:nth-child(2n) {
    background-color: #faf0ff;
}
</style>