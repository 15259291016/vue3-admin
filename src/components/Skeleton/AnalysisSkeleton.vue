<template>
  <el-skeleton :loading="loading" class="main">
    <template #template>
      <el-skeleton-item style="width:23%;height:26vh;" />
      <el-skeleton-item style="width:23%;height:26vh;margin-left: 20px;" />
      <el-skeleton-item style="width:23%;height:26vh;margin-left: 20px;" />
      <el-skeleton-item style="width:23%;height:26vh;margin-left: 20px;" />
      <el-skeleton-item style="width:100%;height:58vh;margin-top: 10px;" />
    </template>
    <template #default>
      <slot></slot>
    </template>
  </el-skeleton>
</template>

<script setup lang="ts">
const props = defineProps({
  loading: {
    type: Boolean,
    required: true
  }
})
</script>

<style scoped  lang="scss">
:deep(.el-skeleton__item) {
  background: unset;
  background-color: var(--skeleton-bg-color);
}
</style>