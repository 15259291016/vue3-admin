<template>
  <ul class="infinite-list" style="overflow: auto" v-loading="loading" custom-class="loading-icon">
    <li v-for="i in count" :key="i" class="infinite-list-item">
      <ArticleItem>
        <template #footer>
          <img class="infinite-avatar" src="@/assets/images/githubcat.svg" alt="">
          <span class="name">曲丽丽</span>
          <span class="publish">发布在</span>
          <span class="url"> https://element-plus.gitee.io/zh-CN/</span>
        </template>
      </ArticleItem>
      <ArticleItem>
        <template #footer>
          <img class="infinite-avatar" src="@/assets/images/Vue.svg" alt="">
          <span class="name">赵明诚</span>
          <span class="publish">发布在</span>
          <span class="url"> https://element-plus.gitee.io/zh-CN/</span>
        </template>
      </ArticleItem>
    </li>
    <li class="loadBtn">
      <el-button @click="load">加载更多</el-button>
    </li>
  </ul>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import ArticleItem from './article-item/index.vue';
const count = ref(2)
const loading = ref<boolean>(false)

/* 模拟加载数据 */
const load = () => {
  loading.value = true
  setTimeout(() => {
    count.value += 3
    loading.value = false
  }, 1000)
}
</script>

<style scoped lang="scss">
.infinite-list {
  height: auto;
  padding: 0;
  margin: 0;
  list-style: none;

  .loadBtn {
    text-align: center;
    margin-top: 20px;

    .el-button {
      border-color: var(--header-border-color);
      background-color: var(--card-bg-color);
    }
  }
}


.infinite-avatar {
  width: 20px;
  height: 20px;
  margin-right: 5px;
}

.publish,
.url {
  margin-left: 8px;
}

.name,
.url {
  color: var(--primary-color-green);
  cursor: pointer;
}

.url {
  padding-top: 3px;
}

:deep(.el-loading-spinner) {
  top: unset;
  bottom: 80px;
}
</style>