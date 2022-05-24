<template>
  <el-skeleton :loading="loading" animated class="main">
    <template #template>
      <el-skeleton-item style="width:23%;height:26vh;" />
      <el-skeleton-item style="width:23%;height:26vh;margin-left: 30px;" />
      <el-skeleton-item style="width:23%;height:26vh;margin-left: 30px;" />
      <el-skeleton-item style="width:23%;height:26vh;margin-left: 30px;" />
      <el-skeleton-item style="width:100%;height:58vh;margin-top: 30px;" />
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
</style>