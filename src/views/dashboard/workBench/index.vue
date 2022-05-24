<template>
  <WorkbenchSkeleton :loading="loading">
    <div class="workBench">
      <!-- 工作台头部区域 -->
      <div class="workBench-header">
        <div class="left">
          <!-- 头像区域 -->
          <div class="avatar">
            <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" :size="75" />
          </div>
          <div class="weather">
            <p>早安, Rich4$t, 开始您一天的工作吧!</p>
            <span>今日晴, 20℃ - 32℃!</span>
          </div>
        </div>
        <div class="right">
          <div class="right-item">
            <span> {{ $t('msg.workBench.toDO') }} </span>
            <p>2/10</p>
          </div>
          <div class="right-item">
            <span> {{ $t('msg.workBench.project') }} </span>
            <p>8</p>
          </div>
          <div class="right-item">
            <span> {{ $t('msg.workBench.team') }} </span>
            <p>1</p>
          </div>
        </div>
      </div>
      <!-- /工作台头部区域 -->
      <!-- 工作台内容区域 -->
      <div class="workBench-body">
        <div class="workBench-body-left">
          <div class="project">
            <WorkBenchCard :title="$t('msg.workBench.project')" />
          </div>
          <div class="news">
            <WorkBenchCard :title="$t('msg.workBench.news')" :is-project-card="false" />
          </div>
        </div>
        <div class="workBench-body-right">
          <div class="quick-nav">
            <QuickNav />
          </div>
          <div class="index">
            <BudgetIndex />
          </div>
          <div class="team">
            <Team />
          </div>
        </div>
      </div>
      <!-- /工作台内容区域 -->
    </div>
  </WorkbenchSkeleton>
</template>

<script setup lang="ts">
import WorkBenchCard from '@/components/WorkBenchCard/index.vue';
import QuickNav from './components/quick-nav.vue';
import BudgetIndex from './components/budget-index.vue';
import Team from './components/team.vue';
import WorkbenchSkeleton from '@/components/Skeleton/WorkbenchSkeleton.vue';

const loading = ref<boolean>(true)

onMounted(() => {
  nextTick(() => {
    setTimeout(() => {
      loading.value = false;
    }, 100);
  })
})

</script>

<style scoped lang="scss">
@import './index.scss';
</style>