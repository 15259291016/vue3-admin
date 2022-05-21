<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="auto">
        <Sidebar />
      </el-aside>
      <el-container>
        <el-header>
          <Header />
          <Tagsview />
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import Sidebar from './sidebar/index.vue';
import Header from './header/index.vue';
import Tagsview from './header/components/tagsview/index.vue';

</script>

<style scoped lang="scss">
@import './Layout.scss';
</style>