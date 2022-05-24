<template>
  <el-skeleton :loading="loading" class="main">
    <template #template>
      <el-skeleton-item style="width:100%;height:12vh;"
        :class="[ANIMATION_SWITCH ? 'animate__animated animate__fadeInUp' : '']" />
      <div style="display: flex;">
        <div style="width: 68%;">
          <el-skeleton-item style="height: 44vh"
            :class="[ANIMATION_SWITCH ? 'animate__animated animate__fadeInUp' : '']" />
          <el-skeleton-item style="height:26vh;animation-delay: 0.2s;"
            :class="[ANIMATION_SWITCH ? 'animate__animated animate__fadeInUp' : '']" />
        </div>
        <div style="width: 30%;margin-left: 2%;">
          <el-skeleton-item style="height:25vh"
            :class="[ANIMATION_SWITCH ? 'animate__animated animate__fadeInUp' : '']"></el-skeleton-item>
          <el-skeleton-item style="height:45vh;animation-delay: 0.2s;"
            :class="[ANIMATION_SWITCH ? 'animate__animated animate__fadeInUp' : '']">
          </el-skeleton-item>
        </div>
      </div>
    </template>
    <template #default>
      <slot></slot>
    </template>
  </el-skeleton>
</template>

<script setup lang="ts">
import { ANIMATION_SWITCH } from '@/constant/index'

const props = defineProps({
  loading: {
    type: Boolean,
    required: true
  }
})
</script>

<style scoped  lang="scss">
:deep(.el-skeleton__item) {
  background: unset;
  background-color: var(--skeleton-bg-color);
}
</style>