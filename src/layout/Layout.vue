<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="auto">
        <Sidebar />
      </el-aside>
      <el-container>
        <el-header>
          <Header />
        </el-header>
        <el-main>
          foo
          <button @click="toggleDark()">
            Is Dark: {{ isDark }}
          </button>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import Sidebar from './sidebar/index.vue';
import Header from './header/index.vue';

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

<style scoped lang="scss">
:deep(.el-header) {
  height: 80px;
  padding: unset;
  border-bottom: 0.5px solid var(--header-border-color);
}

.el-aside,
:deep(.el-menu) {
  background-color: var(--sidebar-bg-color);
  color: var(--sidebar-text-color);
}

:deep(.el-sub-menu__title) {
  background-color: var(--submenu-bg-color);
  color: var(--submenu-text-color);

  &:hover {
    color: var(--submenu-hover-text-color);
  }
}

// 2D2D2D
:deep(.el-menu-item) {
  background-color: var(--menuitem-bg-color);
  color: var(--submenu-text-color);

  &:hover {
    color: var(--submenu-hover-text-color);
  }
}

:deep(.el-menu-item.is-active) {
  background-color: #0960bd;
  color: #fff;
}

.el-header {
  background-color: var(--header-bg-color);
  color: var(--header-text-color);
}

.el-main {
  background-color: var(--main-bg-color);
  color: var(--main-text-color);
}

// drawr样式
:deep(.el-drawer__header) {
  margin-bottom: unset;
  padding: 10px;
  background-color: var(--drawer-title-bg-color);
  color: var(--drawer-title-text-color);
  border-bottom: 0.5px solid var(--header-border-color);
}

:deep(.el-drawer__body) {
  padding: unset;
}
</style>