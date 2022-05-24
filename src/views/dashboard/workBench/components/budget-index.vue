<template>
  <el-card>
    <template #header>
      <span> {{ $t('msg.workBench.budgetIndex') }} </span>
    </template>
    <div id="budget">
    </div>
  </el-card>
</template>

<script setup lang="ts">
import * as echarts from 'echarts/core';
import {
  TitleComponent,
  TitleComponentOption,
  LegendComponent,
  LegendComponentOption
} from 'echarts/components';
import { RadarChart, RadarSeriesOption } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';

echarts.use([TitleComponent, LegendComponent, RadarChart, CanvasRenderer]);

type EChartsOption = echarts.ComposeOption<
  TitleComponentOption | LegendComponentOption | RadarSeriesOption
>;
onMounted(() => {
  var chartDom = document.getElementById('budget')!;
  var myChart = echarts.init(chartDom);
  var option: EChartsOption;

  option = {
    legend: {
      data: ['分配预算', '实际支出']
    },
    radar: {
      // shape: 'circle',
      indicator: [
        { name: '销售', max: 6500 },
        { name: '管理', max: 16000 },
        { name: '信息技术', max: 30000 },
        { name: '客户支持', max: 38000 },
        { name: '开发', max: 52000 },
        { name: '市场营销', max: 25000 }
      ]
    },
    series: [
      {
        name: 'Budget vs spending',
        type: 'radar',
        data: [
          {
            value: [4200, 3000, 20000, 35000, 50000, 18000],
            name: '分配预算'
          },
          {
            value: [5000, 14000, 28000, 26000, 42000, 21000],
            name: '实际支出'
          }
        ]
      }
    ]
  };

  option && myChart.setOption(option);

})
</script>

<style scoped lang="scss">
#budget {
  width: 100%;
  height: 380px;
}
</style>