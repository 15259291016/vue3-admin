<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="auto">
        <Sidebar id="guide-sidebar" />
      </el-aside>
      <el-container>
        <el-header>
          <Header />
          <Tagsview id="guide-tabsView" />
        </el-header>
        <el-main>
          <router-view v-slot="{ Component, route }">
            <transition name="fade">
              <keep-alive include="keepAlive">
                <component :is="Component" :key="route.path"></component>
              </keep-alive>
            </transition>
          </router-view>
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
