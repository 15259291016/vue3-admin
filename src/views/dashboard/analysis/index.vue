<template>
  <AnalysisSkeleton :loading="loading">
    <div class="analysis">
      <!-- 卡片区域 -->
      <div class="analysis-data ">
        <Card :headerTitle="$t('msg.analysis.visitCount')" :count="222" :headerTag="$t('msg.analysis.headerTagMonth')"
          :amountTitle="$t('msg.analysis.visitAmount')" :amount="2022" />
        <Card :headerTitle="$t('msg.analysis.benefitCount')" :count="222" :headerTag="$t('msg.analysis.headerTagMonth')"
          :amountTitle="$t('msg.analysis.benefitAmount')" :amount="2022" />
        <Card :headerTitle="$t('msg.analysis.downloadCount')" :headerTag="$t('msg.analysis.headerTagWeek')"
          :amountcount="222" :amountTitle="$t('msg.analysis.downloadAmount')" :amount="2022" />
        <Card :headerTitle="$t('msg.analysis.orderCount')" :headerTag="$t('msg.analysis.headerTagYear')" :count="222"
          :amountTitle="$t('msg.analysis.orderAmount')" :amount="2022" />
      </div>
      <div class="analysis-chart ">
        <el-card>
          <el-tabs v-model="activeName" class="demo-tabs">
            <!-- 折线图 -->
            <el-tab-pane :label="$t('msg.analysis.trend')" name="lineChart">
              <Line />
            </el-tab-pane>
            <!-- 柱状图 -->
            <el-tab-pane :label="$t('msg.analysis.visitCount')" name="barChart">
              <Bar />
            </el-tab-pane>
          </el-tabs>
        </el-card>
      </div>
      <div class="analysis-pie ">
        <!-- 饼图 -->
        <PieChartCard :pieChartTitle="$t('msg.analysis.conversionRates')">
          <Pie />
        </PieChartCard>
        <!-- k线图 -->
        <PieChartCard :pieChartTitle="$t('msg.analysis.compositeIndex')">
          <Kline />
        </PieChartCard>
        <!-- 旭日图 -->
        <PieChartCard :pieChartTitle="$t('msg.analysis.sunBurst')">
          <Sunburst />
        </PieChartCard>
      </div>
    </div>
  </AnalysisSkeleton>
</template>

<script setup lang="ts">
import Card from '@/components/Card/index.vue'
import Line from './components/line.vue';
import Bar from './components/bar.vue';
import PieChartCard from '@/components/Card/ChartCard.vue';
import Pie from './components/pie.vue';
import Kline from './components/kline.vue';
import Sunburst from './components/sunburst.vue';
import AnalysisSkeleton from '@/components/Skeleton/AnalysisSkeleton.vue';

const activeName = ref<string>('lineChart') // tabs标志
const loading = ref<boolean>(true) // 骨架屏加载状态


onMounted(() => {
  nextTick(() => {
    setTimeout(() => {
      loading.value = false
    }, 200);
  })
})

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

  &-pie {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}

:deep(.el-tabs__active-bar) {
  background-color: var(--primary-color-green);
}
</style>