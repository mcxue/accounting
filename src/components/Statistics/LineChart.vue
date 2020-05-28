<template>
  <div>
    <div ref="container" class="chart">
    </div>

  </div>

</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';
  import echarts from 'echarts';

  @Component
  export default class LineChart extends Vue {
    @Prop() readonly xData!: [];
    @Prop() readonly yData!: [];

    mounted() {
      const width = document.documentElement.clientWidth;
      const height = (document.documentElement.clientWidth) * 0.8;
      this.$refs.container.style = `width: ${width}px;height:${height}px`;
      const myChart = echarts.init(this.$refs.container);
      const option = {
        tooltip: {},
        legend: {
          data: ['支出', '收入']
        },
        xAxis: {
          type: 'category',
          data: this.xData
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          name: '支出',
          data: this.yData[0],
          type: 'line',
          itemStyle: {
            normal: {
              lineStyle: {
                color: '#FF0000'
              }
            }
          },
        },
          {
            name: '收入',
            data: this.yData[1],
            type: 'line',
            itemStyle: {
              normal: {
                lineStyle: {
                  color: '#029202'
                }
              }
            },
          }]
      };
      myChart.setOption(option);

    }
  }
</script>

<style lang="scss" scoped>
  .chart {
    margin: 30px auto;
  }
</style>