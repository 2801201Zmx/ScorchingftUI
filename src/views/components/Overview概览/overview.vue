<template>
  <Content :setupsteps="setupSteps" :isapi="false">
    <template #default>
      <div class="header">
        <h1>Scorchingft UI 组件库</h1>
        <p>一套为开发者、设计师准备的 Vue 3 组件库，提供了丰富的组件以满足日常开发需求。</p>
      </div>
    </template>
    <template #view-preview="viewPreview">
      <div class="overview">
        <sf-card :width="360" :height="280" border="var(--overview-card-size)" solid color="var(--overview-card-color)"
          class="card" v-for="(child, index) in getCategory(viewPreview.title)">
          <div class="overviews">
            {{ child }}
          </div>
          <div class="overviews-content">
          </div>
        </sf-card>
      </div>
    </template>
  </Content>
</template>

<script setup lang="ts">
import { onBeforeMount, reactive } from 'vue';
import { useRouter } from 'vue-router';

import type { SetupSteps } from '@/types/type';

import Content from '@/component/Content.vue';
import Components from '@/JSON/components.json';

const setupSteps = reactive<SetupSteps[]>([]);

function changeArry(arr: { title: string, components: { title: string, path: string }[] }[]) {
  for (const obj of arr) {
    setupSteps.push({
      title: '',
      subheading: obj.title,
      maintext: '',
      code: '',
      codetype: '',
      slot: 'view',
      isshell: false
    });
  }

  setupSteps.splice(0,1);

}

function getCategory(title: string): string[] {
  let obj: { [key: string]: string[] } = {};
  for (const objs of Components) {
    let array: string[] = [];
    for (const child of objs.components)
      array.push(child.title);
    obj[`${objs.title}`] = array;
  }

  delete obj["Overview 概览"];

  return obj[title];
}

onBeforeMount(() => {
  changeArry(Components);
})
</script>

<style scoped>
.header {
  text-align: center;
  margin-bottom: 40px;
  padding: 20px;
  background-color: #ad82df;
  border-radius: 6px;
  color: white;
}

.header h1 {
  font-size: 2.5rem;
  margin-bottom: 15px;
}

.header p {
  font-size: 1.2rem;
  opacity: 0.9;
}

.overview {
  display: flex;
  width: 100%;
}

.card:not(:nth-child(1)) {
  margin-left: 15px;
}

.card {
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  cursor: pointer;
}

.card:hover {
  box-shadow: 2px 2px 10px #cccccc54,-2px -2px 10px #cccccc54;
}

.overviews {
  width: 100%;
  box-sizing: border-box;
  padding: 10px 15px;
  border-bottom: var(--overview-card-size) solid var(--overview-card-color);
  color: var(--topic-color-text);
}

.overviews-content {
  width: 100%;
  height: 100%;
  background-color: aliceblue;
}
</style>