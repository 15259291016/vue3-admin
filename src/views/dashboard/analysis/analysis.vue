<template>
  <div class="analysis">
    <!-- 卡片区域 -->
    <div class="analysis-data">
      <Card headerTitle="访问数" :count="222" amountTitle="总访问数" :amount="2022" />
      <Card headerTitle="成交额" :count="222" amountTitle="总成交额" :amount="2022" />
      <Card headerTitle="下载数" headerTag="周" :count="222" amountTitle="总下载数" :amount="2022" />
      <Card headerTitle="成交数" headerTag="年" :count="222" amountTitle="总成交数" :amount="2022" />
    </div>
    <div class="analysis-chart">
      <el-card>
        <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
          <el-tab-pane label="流量趋势" name="lineChart">
            <Line v-if="activeName === 'lineChart'" />
          </el-tab-pane>
          <el-tab-pane label="访问量" name="barChart">
            <Bar v-if="activeName === 'barChart'" />
          </el-tab-pane>
        </el-tabs>
      </el-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import Card from '@/components/Card/index.vue'
import { TabsPaneContext } from 'element-plus';
import Line from './components/line.vue';
import Bar from './components/bar.vue';

const activeName = ref<string>('lineChart')

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}

</script>

<style scoped lang="scss">
.analysis {
  &-data {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &-chart {
    margin-top: 10px;

    .el-card {
      height: 59vh;
    }
  }
}
</style>