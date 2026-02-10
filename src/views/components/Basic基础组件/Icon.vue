<template>
    <Content :setupsteps="setupSteps" :api="api">
        <template #text>
            <p>
                如果你想用例一样直接使用，你需要<a class="cursor"
                    href="https://vuejs.org/guide/components/registration.html#global-registration"
                    target="_blank">全局注册组件<sup>3</sup></a>
            </p>
            <p>
                由于该组件<a class="cursor" href="https://baike.baidu.com/item/出炉/6252413" target="_blank">刚出炉
                    <sup>4</sup></a>，现在还处于快速的更新迭代中
            </p>
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
        <template #Use-preview>
            <sf-icon>
                <Add />
            </sf-icon>
            <sf-icon>
                <Add />
            </sf-icon>
        </template>
        <template #Set-preview>
            <div class="preview-icon" v-for="(item, index) in previewicon">
                <span class="h2">
                    {{ index }}
                </span>
                <div class="icons">
                    <div class="cursor icon-box" v-for="children in item" :title="children">
                        <sf-icon>
                            <component :is="children"></component>
                        </sf-icon>
                    </div>
                </div>
            </div>
        </template>
    </Content>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';

import Content from '@/component/Content.vue';

import codetext from '@/codetext/index';
import getArrowIcon from '@/utils/getIcon';

import type { Api, Attributessslots, InstallMethodsItem, SetupSteps } from '@/types/type';
const previewicon = {
    System: getArrowIcon("system"),
    Arrow: getArrowIcon("arrow"),
    Edit: getArrowIcon("edit"),
    Item: getArrowIcon("item"),
    Document: getArrowIcon("document"),
    Media: getArrowIcon("media"),
    Weather: getArrowIcon("weather"),
    Website: getArrowIcon("website")
}

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

const id = ref<number>(0);
const borderbottom = ref<Array<string>>([]);

borderbottom.value[0] = '3px solid #ca92ff';

const attributes = reactive<Array<Attributessslots>>([
    {
        name: 'color',
        meaning: 'SVG的 fill 颜色',
        type: 'string',
        default: '继承颜色'
    },
    {
        name: 'size',
        meaning: 'SVG图标的大小，size x size',
        type: 'string / number',
        default: '继承字体大小'
    }
])

const slots = reactive<Array<Attributessslots>>([
    {
        name: 'default',
        meaning: '自定义默认内容'
    }
])

const api = reactive<Api>({
    attributess: attributes,
    slots: slots
});

const setupSteps = reactive<Array<SetupSteps>>([
    {
        title: "Icon",
        subheading: "",
        maintext: "Scorchingft提供了一些常用方便的图标(ICON),开箱即用",
        code: "",
        codetype: "",
        isshell: false
    },
    {
        title: "",
        subheading: "使用图标",
        maintext: "",
        code: "",
        codetype: "",
        isshell: false
    },
    {
        title: "安装",
        subheading: "通过包管理器",
        maintext: "可以通过以下方式将 Scorchingft 组件库安装到您的项目中：",
        code: "",
        codetype: "shell",
        isshell: true,
    },
    {
        title: "Scorchingftui提供了两种浏览器使用方式",
        subheading: "",
        maintext: "使用unpkg",
        code: codetext[4],
        codetype: 'html',
        isshell: false
    },
    {
        title: "",
        subheading: "",
        maintext: "使用jsDelivr",
        code: codetext[5],
        codetype: 'html',
        isshell: false
    },
    {
        title: "",
        subheading: "完整引入",
        maintext: "在安装完成后您还需要全局注册后才能正常使用，如果不在乎包体积大小，可以使用此方法，在新的版本中已经无需再次使用图标安装方法即可使用",
        code: codetext[6],
        codetype: "main.ts",
        isshell: false
    },
    {
        title: "基础用法",
        subheading: "",
        maintext: "",
        code: codetext[7],
        codetype: "vue",
        slot: 'Use',
        isshell: false,
        isgap: true,
        ispreview: true
    },
    {
        title: "图标集合",
        subheading: "",
        maintext: "",
        code: "",
        codetype: "",
        slot: 'Set',
        isshell: false,
        ispreview: true,
        istips: true,
        isgap: true
    }
])

const indexs = setupSteps.findIndex(item => item.subheading === '通过包管理器');

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

.h2 {
    font-size: 1.6rem;
    font-weight: bold;
    color: rgb(70, 70, 70);
}

.icons {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(110px, 110px));
    column-gap: 1px;
    margin: 10px 0;

}

.icon-box {
    width: 100%;
    height: 110px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid;
    margin-top: -1px;
}

.icon-box:hover {
    background-color: #f7f0ffcb;
}
</style>