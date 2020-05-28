<template>
  <div>
    <div ref="container" class="chart">
    </div>
  </div>
</template>

<script lang="js">
  import echarts from 'echarts';

  export default{
    name: 'LineChart',
    props:['xData','yData'],

    mounted() {
      const width = document.documentElement.clientWidth;
      const height = (document.documentElement.clientWidth) * 0.8;
      const Div = this.$refs.container;
      Div.style = `width: ${width}px;height:${height}px`;
      const myChart = echarts.init(Div);
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
          axisTick:{
            show: false
          },
          axisLabel:{
            rotate:-45,
          },
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
        }, {
          name: '收入',
          data: this.yData[1],
          type: 'line',
          itemStyle: {
            normal: {
              lineStyle: {
                color: '#029292'
              }
            }
          },
        }
        ]
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