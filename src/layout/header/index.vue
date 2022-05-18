<template>
  <div class="header">
    <div class="header-top">
      <div class="header-top-left">
        <div class="fold" @click="store.isFold = !store.isFold">
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
          <LangSelect />
        </div>
        <div class="setting">
          <i class="r4 r4-setting"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import LangSelect from '@/components/LangSelect/index.vue';
import { useAppStore } from '@/store/app'

const store = useAppStore()
</script>

<style scoped lang="scss">
@use './index.scss';
</style>