<template>
  <el-switch v-model="isDark" :active-icon="activeIcon" :inactive-icon="inactiveIcon" @change="toggleDark"
    inline-prompt />
</template>
<script setup lang="ts">
const props = defineProps({
  // 开关开启显示图标
  activeIcon: {
    type: [Comment, String],
    default: 'Y'
  },
  // 开关关闭显示图标
  inactiveIcon: {
    type: [Comment, String],
    default: 'N'
  }
})
const isDark = useDark()
const toggleDark = useToggle(isDark)

onMounted(() => {
  const body = document.querySelector('body') as HTMLBodyElement
  watch(() => isDark.value, (val) => {
    if (val) {
      body.classList.add('dark-theme')
    } else {
      body.classList.remove('dark-theme')
    }
  })
})

</script>