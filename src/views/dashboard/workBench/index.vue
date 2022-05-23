<template>
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
          <span>待办</span>
          <p>2/10</p>
        </div>
        <div class="right-item">
          <span>项目</span>
          <p>8</p>
        </div>
        <div class="right-item">
          <span>团队</span>
          <p>1</p>
        </div>
      </div>
    </div>
    <!-- /工作台头部区域 -->
    <!-- 工作台内容区域 -->
    <div class="workBench-body">
      <div class="workBench-body-left">
        <div class="project">
          <WorkBenchCard />
        </div>
        <div class="news">
          <WorkBenchCard title="最新动态" :is-project-card="false" />
        </div>
      </div>
      <div class="workBench-body-right">
        <div class="quick-nav"></div>
        <div class="index"></div>
        <div class="team"></div>
      </div>
    </div>
    <!-- /工作台内容区域 -->
  </div>
</template>

<script setup lang="ts">
import WorkBenchCard from '@/components/WorkBenchCard/index.vue';

</script>

<style scoped lang="scss">
.workBench {
  &-header {
    width: 100%;
    height: 110px;
    position: absolute;
    box-sizing: border-box;
    background-color: var(--card-bg-color);
    top: 0;
    left: 0;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .left {
      display: flex;
      align-items: center;

      .weather {
        height: 100%;
        margin-left: 20px;

        p {
          font-size: 20px;
          padding-bottom: 1.5vh
        }

        span {
          font-size: 14px;
          color: #ccc;
        }
      }
    }

    .right {
      width: 20vw;
      display: flex;
      justify-content: space-around;
      align-items: center;

      &-item {
        text-align: center;

        span {
          color: #8f8f8f;
        }

        p {
          padding-top: 1.5vh;
          font-size: 30px;
        }
      }
    }
  }

  &-body {
    margin-top: 100px;
    display: flex;
    justify-content: space-between;

    height: 80vh;

    &-left {
      width: 68%;

      .news {
        margin-top: 15px;
      }
    }

    &-right {
      width: 31%;
      height: 100px;
      background-color: green;
    }
  }
}
</style>