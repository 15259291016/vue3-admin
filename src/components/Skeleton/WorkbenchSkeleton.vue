<template>
  <el-skeleton :loading="loading" animated class="main">
    <template #template>
      <el-skeleton-item style="width:100%;height:12vh;" />
      <div style="display: flex;">
        <div style="width: 68%;">
          <el-skeleton-item style="height: 44vh"></el-skeleton-item>
          <el-skeleton-item style="height:26vh;" />
        </div>
        <div style="width: 30%;margin-left: 2%;">
          <el-skeleton-item style="height:25vh"></el-skeleton-item>
          <el-skeleton-item style="height:45vh"></el-skeleton-item>
        </div>
      </div>
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