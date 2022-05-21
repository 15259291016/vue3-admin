<template>
  <ul class="box-card" v-show="isContextMenuShow" ref="target">
    <li class="hover-effect" @click="handleRefresh">
      <span>重新加载</span>
    </li>
    <li class="hover-effect" @click="handleCloseTag">
      <span>关闭标签页</span>
    </li>
    <li class="hover-effect" @click="handleCloseLeftTags">
      <span>关闭左侧标签页</span>
    </li>
    <li class="hover-effect" @click="handleCloseRightTags">
      <span>关闭右侧标签页</span>
    </li>
    <li class="hover-effect" @click="handleCloseOtherTags">
      <span>关闭其他标签页</span>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { useAppStore } from '@/store/app';
import { PropType } from 'vue';

const props = defineProps({
  // 控制 contextmenu 的显示
  isContextMenuShow: {
    type: Boolean,
    default: false
  },
  // 当前点击的 tag
  tag: {
    type: Object as PropType<any>
  }
})
const emit = defineEmits(['update:isContextMenuShow'])
const store = useAppStore()
const router = useRouter()


// 刷新页面
const handleRefresh = () => {
  location.reload()
}
// 关闭标签页
const handleCloseTag = () => {
  const index = store.tagsViewList.indexOf(props.tag)
  store.removeTag(props.tag)
  // 关闭 contexmenu
  emit('update:isContextMenuShow', !props.isContextMenuShow)
  // 跳转到前一个 tag
  if (index === 0) return
  router.push(store.tagsViewList[index - 1].fullPath)
}
// 关闭左侧标签页
const handleCloseLeftTags = () => {
  store.removeLeftTags(props.tag)
  // 关闭 contexmenu
  emit('update:isContextMenuShow', !props.isContextMenuShow)
}
// 关闭右侧标签页
const handleCloseRightTags = () => {
  store.removeRightTags(props.tag)
  // 关闭 contexmenu
  emit('update:isContextMenuShow', !props.isContextMenuShow)
  const index = store.tagsViewList.indexOf(props.tag)
  router.push(store.tagsViewList[index].fullPath)
}

// 关闭其他标签页
const handleCloseOtherTags = () => {
  store.removeOtherTags(props.tag)
  // 关闭 contexmenu
  emit('update:isContextMenuShow', !props.isContextMenuShow)
}

// 点击外部关闭 contextMenu
const target = ref(null)
onClickOutside(target, (event) => {
  emit('update:isContextMenuShow', !props.isContextMenuShow)
})
</script>

<style scoped>
.box-card {
  position: absolute;
  width: auto;
  height: auto;
  border: 1px solid var(--header-border-color);
  background-color: var(--header-bg-color);
  padding: 5px;
  border-radius: 7px;
  font-size: 13px;
}

li {
  padding: 5px 20px;
}
</style>