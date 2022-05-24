<template>
  <div class="tagsview">
    <router-link v-for="tag in store.tags" :key="tag.fullPath" class="tagsview-item"
      :class="isActive(tag) ? 'active' : ''" :to="{ path: tag.fullPath }" @contextmenu.prevent="handleContextMenu(tag)">

      <div class="item">
        <span>{{ store.lang === 'en' ? tag.title : tag.name }}</span>
        <i class="r4 r4-close" v-show="!isActive(tag)" @click.prevent="store.removeTag(tag)"></i>
      </div>
    </router-link>
    <ContextMenu v-model:isContextMenuShow="isContextMenuShow" v-if="isContextMenuShow" :style="menuStyle"
      :tag="clickedTag" />
  </div>
</template>

<script setup lang="ts">
import { useAppStore } from '@/store/app';
import ContextMenu from './ContextMenu.vue';

const store = useAppStore()
const route = useRoute()

// 是否被选中
const isActive = (tag: any) => {
  return tag.path === route.path
}



/* 右键tag的事件 */
const isContextMenuShow = ref<boolean>(false)
const menuStyle = ref({ left: '', top: '' })
const { x, y } = useMouse()
const clickedTag = ref<any>()

const handleContextMenu = (tag: any) => {
  menuStyle.value.left = x.value + 'px'
  menuStyle.value.top = y.value + 'px'
  clickedTag.value = tag
  isContextMenuShow.value = true
}

/* /右键tag的事件 */
</script>

<style lang="scss" scoped>
.tagsview {

  height: 34px;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  a:first-child {
    margin-left: 5px;
  }

  a:not(:first-child) {
    margin-left: 10px;
  }

  .item {
    padding: 5px 10px;
    font-size: 10px;
    border: 1px solid var(--header-border-color);
    display: flex;
    align-items: center;
  }
}


.active {
  background-color: #42b883;
}
</style>