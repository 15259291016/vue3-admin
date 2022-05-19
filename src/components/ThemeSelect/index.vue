<template>
  <el-drawer v-model="isDrawerShow" direction="rtl" @close="handleClose" size="18%">
    <!-- 标题区域 -->
    <template #title>
      <h4>项目配置</h4>
    </template>
    <!-- 内容区域 -->
    <div class="body">
      theme
    </div>
    <!-- footer区域 -->
  </el-drawer>
</template>

<script setup lang="ts">

const props = defineProps({
  isDrawerShow: {
    type: Boolean,
    default: false,
  }
})
const emit = defineEmits(['update:isDrawerShow'])

// 弹出层关闭事件
const handleClose = () => {
  emit('update:isDrawerShow', !props.isDrawerShow)
}


</script>

<style lang="scss" scoped>
.body {
  background-color: var(--main-bg-color);
  color: var(--main-text-color);
  height: 100%;
}
</style>