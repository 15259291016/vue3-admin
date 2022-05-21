<template>
  <el-drawer v-model="isDrawerShow" direction="rtl" @closed="handleClose" size="18%">
    <!-- 标题区域 -->
    <template #title>
      <h4> {{ $t('msg.projectConfiguration.configurationTitle') }} </h4>
    </template>
    <!-- 内容区域 -->
    <div class="body">
      <!-- 切换主题区域 -->
      <el-divider content-position="center">
        <span> {{ $t('msg.projectConfiguration.themeDivider') }} </span>
      </el-divider>
      <div class="body-switcher">
        <DarkSwitcher :active-icon="LightIcon" :inactive-icon="DarkIcon" />
      </div>
    </div>
    <!-- footer区域 -->
  </el-drawer>
</template>

<script setup lang="ts">
import DarkIcon from './components/darkSwitcher/dark-theme.vue'
import LightIcon from './components/darkSwitcher/light-theme.vue'
import DarkSwitcher from './components/darkSwitcher/index.vue';

const props = defineProps({
  // 是否显示弹出层
  isDrawerShow: {
    type: Boolean,
    default: false,
  }
})
const emit = defineEmits(['update:isDrawerShow']) // 更新弹出层状态

// 弹出层关闭事件
const handleClose = () => {
  emit('update:isDrawerShow', !props.isDrawerShow)
}

</script>

<style lang="scss" scoped>
h4 {
  margin-left: 20px;
}


.body {
  box-sizing: border-box;

  &-switcher {
    height: 30px;
    text-align: center;
  }
}
</style>