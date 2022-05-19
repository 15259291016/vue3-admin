<template>
  <div class="header">
    <!-- header头部 -->
    <div class="header-top">
      <div class="header-top-left">
        <div class="fold hover-effect" @click="store.isFold = !store.isFold">
          <i :class="[store.isFold ? 'r4 r4-expand' : 'r4 r4-fold']"></i>
        </div>
      </div>
      <div class="header-top-right">
        <div class="search">
          <i class="r4 r4-search"></i>
        </div>
        <div class="bell">
          <i class="r4 r4-bell"></i>
        </div>
        <div class="fullscreen">
          <i class="r4 r4-fullscreen"></i>
        </div>
        <div class="langSelect">
          <!-- 国际化组件 -->
          <LangSelect />
        </div>
        <div class="setting">
          <i class="r4 r4-setting" @click="isDrawerShow = true"></i>
          <!-- 切换主题组件 -->
          <ThemeSelect v-model:isDrawerShow="isDrawerShow" />
        </div>
      </div>
    </div>
    <!-- tab栏位置 -->
  </div>
</template>

<script setup lang="ts">
import LangSelect from '@/components/LangSelect/index.vue';
import { useAppStore } from '@/store/app'

const store = useAppStore()

const isDrawerShow = ref<boolean>(false) // 是否显示主题切换弹出层
</script>

<style scoped lang="scss">
@import './index.scss';
</style>