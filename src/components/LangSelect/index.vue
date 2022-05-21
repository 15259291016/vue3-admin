<template>
  <el-dropdown class="i18n" @command="toggleLang">
    <i class="r4 r4-lang"></i>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item command="zh" :class="[store.currentLang === 'zh' ? 'item-active' : '']">中文简体
        </el-dropdown-item>
        <el-dropdown-item command="en" :class="[store.currentLang === 'en' ? 'item-active' : '']">English
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts">
import { useAppStore } from '@/store/app'
import { useI18n } from 'vue-i18n'

const store = useAppStore()
const i18n = useI18n()

const toggleLang = (lang: string) => {
  store.setLang(lang)
  i18n.locale.value = lang
}
</script>

<style scoped lang="scss">
.i18n {
  .r4-lang {
    font-size: 20px;
    color: var(--langselect-text-color);
  }
}
</style>