<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="auto">
        <Sidebar />
      </el-aside>
      <el-container>
        <el-header>
          <Header />
        </el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import Sidebar from './sidebar/index.vue';
import Header from './header/index.vue';

</script>

<style scoped lang="scss">
:deep(.el-header) {
  height: 80px;
  padding: unset;
  border-bottom: 1px solid #ccc;
}
</style>