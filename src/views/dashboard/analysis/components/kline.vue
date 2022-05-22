<template>
  <div id="kline">

  </div>
</template>

<script setup lang="ts">
import * as echarts from 'echarts/core';
import { GridComponent } from 'echarts/components';
import { CandlestickChart } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';

echarts.use([GridComponent, CandlestickChart, CanvasRenderer]);

onMounted(() => {

  var chartDom = document.getElementById('kline')!;
  var myChart = echarts.init(chartDom);
  var option;

  option = {
    xAxis: {
      data: ['2022-05-22', '2022-05-25', '2022-10-26', '2022-10-27']
    },
    yAxis: {},
    series: [
      {
        type: 'candlestick',
        data: [
          [20, 34, 10, 38],
          [40, 35, 30, 50],
          [31, 38, 33, 44],
          [38, 15, 5, 42]
        ]
      }
    ]
  };
  option && myChart.setOption(option);
})
</script>

<style scoped lang="scss">
#kline {
  width: 28vw;
  height: 35vh;
}
</style>