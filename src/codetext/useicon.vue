<!-- 使用 el-icon 为 SVG 图标提供属性 -->
<template>
  <div>
    <el-icon :size="size" :color="color">
      <Add />
    </el-icon>
<!-- 或者独立使用它，不从父级获取属性 -->
    <Add />
  </div>
</template>