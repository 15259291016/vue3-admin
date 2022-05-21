<template>
  <el-menu unique-opened class="el-menu-vertical" router :collapse="store.isFold">
    <div class="logo">
      vue3 admin
    </div>
    <el-sub-menu index="1">
      <template #title>
        <el-icon>
          <i class="r4 r4-dashboard"></i>
        </el-icon>
        <span>Dashboard</span>
      </template>
      <el-menu-item index="/analysis">analysis</el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="2">
      <template #title>
        <el-icon>
          <i class="r4 r4-dashboard"></i>
        </el-icon>
        <span>permission</span>
      </template>
      <el-menu-item index="/test">测试</el-menu-item>
      <el-menu-item index="/test2">测试2</el-menu-item>
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
  border-right: unset;

  &:not(.el-menu--collapse) {
    width: 210px;
    min-height: 400px;
  }

  .logo {
    height: 50px;
    text-align: center;
    line-height: 50px;
  }
}
</style>