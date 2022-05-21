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
        <div class="search-key" @click="isDialogShow = true">
          <span>Enter+s</span>
        </div>
        <!-- 头部搜索按钮 -->
        <ToolTip content="search">
          <div class="search hover-effect" @click="isDialogShow = true">
            <i class="r4 r4-search"></i>
          </div>
        </ToolTip>
        <!-- 搜索框 -->
        <Search v-model:isDialogVisible="isDialogShow" />
        <!-- 头部通知按钮 -->
        <ToolTip content="bell">
          <div class="bell hover-effect">
            <i class="r4 r4-bell"></i>
          </div>
        </ToolTip>
        <!-- 头部全屏按钮 -->
        <ToolTip content="fullscreen">
          <div class="fullscreen hover-effect" @click="toggle">
            <i :class="[isFullscreen ? 'r4 r4-fullscreen-shrink' : 'r4 r4-fullscreen']"></i>
          </div>
        </ToolTip>
        <!-- 国际化按钮 -->
        <div class="langSelect hover-effect">
          <LangSelect />
        </div>
        <!-- 用户信息区域 -->
        <div class="userInfo">
          <Avatar />
        </div>
        <!-- 项目配置按钮 -->
        <div class="setting hover-effect" @click="isDrawerShow = true">
          <i class="r4 r4-setting"></i>
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
import ToolTip from '@/components/ToolTip/index.vue';
import ThemeSelect from '@/components/ThemeSelect/index.vue';
import Search from './components/search/index.vue';
import Avatar from './components/avatar/index.vue';

const store = useAppStore()

const isDrawerShow = ref<boolean>(false) // 是否显示主题切换弹出层
const { isFullscreen, toggle } = useFullscreen() // 是否全屏
const isDialogShow = ref<boolean>(false) // 是否显示搜索框


// Enter + s 快捷键打开搜索框
const flag = ref<number>(1)
onKeyStroke('Enter', (e) => {
  flag.value = 2
})
onKeyStroke('s', (e) => {
  if (flag.value === 2) {
    isDialogShow.value = true
  }
}, { eventName: 'keyup' })

onMounted(() => {
  // 鼠标进入 search 图标时候为快捷键添加颜色
  const search = document.querySelector('.search')
  search!.addEventListener('mouseenter', () => {
    document.querySelector('.search-key')?.classList.add('search-key-hover-color')
  })
  search?.addEventListener('mouseleave', () => {
    document.querySelector('.search-key')?.classList.remove('search-key-hover-color')
  })
})


</script>

<style scoped lang="scss">
@import './index.scss';
</style>