<template>
  <component
    :is="dynamicComponent"
    v-if="dynamicComponent && !loadError"
    v-bind="$attrs"
  />

  <div v-else-if="loadError" class="error">
    <sf-icon color="red">
      <CircleCloseFilled />
    </sf-icon>
    组件加载失败: {{ loadError }}
  </div>

  <div v-else class="loading">
    组件加载中...
    <img src="@/assets/images/loading.gif" alt="" />
  </div>
</template>

<script setup lang="ts">
import { shallowRef, watch, defineAsyncComponent, useAttrs } from 'vue';

import type { Component } from 'vue';

defineOptions({
  inheritAttrs: false
})

const props = defineProps<{
  componentPath: string
  componentType?: 'guide' | 'components'
}>()

const attrs = useAttrs()

const dynamicComponent = shallowRef<any>(null)
const loadError = shallowRef<string | null>(null)

const moduleMaps = {
  guide: import.meta.glob<Component>('../views/guide/**/*.vue'),
  components: import.meta.glob<Component>('../views/components/**/*.vue')
} as const

function findModule(componentName: string) {
  const maps = props.componentType
    ? [moduleMaps[props.componentType]]
    : Object.values(moduleMaps)

  for (const modules of maps) {
    for (const [path, loader] of Object.entries(modules)) {
      if (path.endsWith(`/${componentName}.vue`)) {
        return loader
      }
    }
  }
}

watch(
  () => props.componentPath,
  (name) => {
    loadError.value = null

    const loader = findModule(name)

    if (!loader) {
      dynamicComponent.value = null
      loadError.value = `Component '${name}' not found`
      return
    }

    dynamicComponent.value = defineAsyncComponent({
      loader,
      onError(err) {
        loadError.value = err instanceof Error ? err.message : String(err)
      }
    })
  },
  { immediate: true }
)
</script>

<style scoped>
.loading,
.error {
  padding: 1.5rem;
  text-align: center;
  box-sizing: border-box;
}

.loading {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--topic-color-text);
}

.loading img {
  width: 100px;
  height: 100px;
  object-fit: contain;
}

.error {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  color: #f44336;
}
</style>