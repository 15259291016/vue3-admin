<template>
  <el-card class="pieChart">
    <!-- 头部区域 -->
    <template #header>
      <span> {{ pieChartTitle }} </span>
    </template>
    <slot></slot>
  </el-card>
</template>

<script setup lang="ts">
const props = defineProps({
  pieChartTitle: {
    type: String,
    default: 'PieChart'
  }
})
</script>

<style scoped lang="scss">
.el-card {
  margin-top: 10px;
  width: 27vw;
  height: 40vh;
}
</style>