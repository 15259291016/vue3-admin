<template>
  <el-menu default-active="2" class="el-menu-vertical" :collapse="store.isFold">
    <el-sub-menu index="1">
      <template #title>
        <el-icon>
          <i class="r4 r4-dashboard"></i>
        </el-icon>
        <span style="color: #fff;">Navigator One</span>
      </template>
      <el-menu-item index="1-3">item three</el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script setup lang="ts">
import { useAppStore } from '@/store/app'

const store = useAppStore()
</script>

<style scoped lang="scss">
.el-menu-vertical {
  height: 100vh;
  background-color: #001529;

  &:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
}
</style>