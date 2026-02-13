<template>
  <div class="title" v-for="(item, index) in siderbar" :key="index">
    <span>
      {{ item.title }}
    </span>
    <div class="components" :class="{ componentsactive: isActive[getComponentIndex(item, component)] }"
      v-for="component in item.component" :key="component.path" @click="handleClick(component);">
      <span class="cursor">
        {{ component.title }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import { useRouter, useRoute } from 'vue-router';

import siderbar from '@/hooks/getSiderbarlist';

const router = useRouter();
const route = useRoute();
const isActive = ref<boolean[]>([]);

const getComponentIndex = (group: any, comp: any) => {
  let index = 0;
  for (const g of siderbar) {
    if (g === group) return index + g.component.indexOf(comp);
    index += g.component.length;
  }
  return -1;
};

watchEffect(() => {
  const activeStates: boolean[] = [];
  siderbar.forEach(group => {
    group.component.forEach(comp => {
      activeStates.push(route.path.includes(`${comp.path}`));
    });
  });
  isActive.value = activeStates;
});

const handleClick = (component: any) => {
  router.push(`/components/${component.path}`);
};
</script>

<style scoped>
.title {
  width: 100%;
  padding: 20px 0;
  font-size: 1.2rem;
  font-weight: bolder;
  color: var(--topic-color-text);
}

.title span {
  display: inline-block;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding-left: 35px;
}

.components {
  width: 90%;
  box-sizing: border-box;
  margin: 10px 0 0 5%;
  padding: 7px 0;
  font-size: 1.1rem;
  font-weight: 500;
  border-radius: 5px;
}

.components:nth-child(1) {
  margin-top: 10px;
}

.components span {
  display: inline-block;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding-left: 45px;
}

.components:hover {
  background-color: var(--topic-color-hover);
  color: white;
}

.componentsactive {
  background-color: var(--topic-color-hover);
  color: white;
}
</style>
