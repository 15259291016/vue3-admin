<template>
  <el-dialog v-model="props.isDialogVisible" width="36%" :show-close="false" @closed="handleClosed">
    <!-- 搜索框 -->
    <el-input v-model="searchText" class="w-50 m-2" size="large" clearable placeholder="Search..."
      :prefix-icon="SearchIcon">
    </el-input>
    <!-- 搜索内容 -->
    <div class="recent-wrap"><span style="color: #42b883;font-weight: 590; font-size: 17px">Recent</span></div>
    <RecentItem @update:item="getRecent" />
    <template #footer>
      <div class="footer">
        <div class="enter">
          <i class="r4 r4-enter"></i>
          <span>to select</span>
        </div>
        <div class="up-down">
          <i class="r4 r4-up"></i>
          <i class="r4 r4-down"></i>
          <span>to navigate</span>
        </div>
        <div class="esc">
          <p>Esc</p>
          <span>to close</span>
        </div>
      </div>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import SearchIcon from './searchIcon.vue'
import RecentItem from '../recentItem/index.vue'

const props = defineProps({
  isDialogVisible: {
    type: Boolean,
    default: false,
  }
})
const emit = defineEmits(['update:isDialogVisible'])
const router = useRouter()


const searchText = ref<string>('') // 搜索框内容

// Dialog 关闭回调
const handleClosed = () => {
  emit('update:isDialogVisible', !props.isDialogVisible)
}

// 点击搜索记录事件
const getRecent = (recent: number) => {
  searchText.value = recent.toString()
}

</script>

<style lang="scss" scoped>
.recent-wrap {
  margin: 15px 0 5px 0;
}

.footer {
  border-top: 1px solid var(--header-border-color);
  padding-top: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  p {
    display: inline-block;
  }

  span {
    margin-left: 10px;
    color: #ccc;
    font-size: 12px;
  }
}

:deep(.el-input__wrapper) {
  box-shadow: 0 0 0 1px #42b883;
  background-color: var(--search-bg-color);
}

:deep(.el-input__inner) {
  color: var(--search-text-color);
}
</style>