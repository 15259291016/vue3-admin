<template>
  <div id="sunburst">

  </div>
</template>

<script setup lang="ts">
import * as echarts from 'echarts/core';
import { SunburstChart, SunburstSeriesOption } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';

echarts.use([SunburstChart, CanvasRenderer]);

type EChartsOption = echarts.ComposeOption<SunburstSeriesOption>;
onMounted(() => {
  var chartDom = document.getElementById('sunburst')!;
  var myChart = echarts.init(chartDom);
  var option: EChartsOption;

  var data = [
    {
      name: 'Grandpa',
      children: [
        {
          name: 'Uncle',
          value: 15,
          children: [
            {
              name: 'Cousin',
              value: 2
            },
            {
              name: 'Cousin',
              value: 5,
              children: [
                {
                  name: 'Jackson',
                  value: 2
                }
              ]
            },
            {
              name: 'Cousin',
              value: 4
            }
          ]
        },
        {
          name: 'Father',
          value: 10,
          children: [
            {
              name: 'Me',
              value: 5
            },
            {
              name: 'Brother',
              value: 1
            }
          ]
        }
      ]
    },
    {
      name: 'Nancy',
      children: [
        {
          name: 'Uncle',
          children: [
            {
              name: 'Cousin',
              value: 1
            },
            {
              name: 'Cousin',
              value: 2
            }
          ]
        }
      ]
    }
  ];

  option = {
    series: {
      type: 'sunburst',
      // emphasis: {
      //     focus: 'ancestor'
      // },
      data: data,
      radius: [0, '90%'],
      label: {
        rotate: 'radial'
      }
    }
  };

  option && myChart.setOption(option);

})
</script>

<style scoped lang="scss">
#sunburst {
  width: 28vw;
  height: 38vh;
}
</style>