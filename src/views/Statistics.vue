<template>
  <div>
    <Layout name="统计">
      <div class="top">
        {{currentYear}}年{{currentMonth}}月
      </div>
      <LineChart :xData="xData" :yData="yData"/>
      <div class="show"><span>支出: {{collect[0]}} 元 | 收入: {{collect[1]}} 元</span></div>
    </Layout>

  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import Type from '@/components/Type.vue';
  import LineChart from '@/components/Statistics/LineChart.vue';

  @Component({
    components: {LineChart, Type}
  })
  export default class Statistics extends Vue {
    type = '-';

    beforeCreate() {
      this.$store.commit('fetchRecords');
    }

    get records() {
      return this.$store.state.records;
    }
    get xData() {
      const date = new Date();
      const array = [];
      date.setMonth(date.getMonth() + 1);
      date.setDate(0);
      for (let i = 1; i <= date.getDate(); i++) {
        array.push(i);
      }
      return array;
    }

    get currentYear() {
      return new Date().getFullYear();
    }

    get currentMonth() {
      return new Date().getMonth() + 1;
    }
    get yData(){
      // 1. 筛选出当月的有效数据

      const usefulRecords=[];
      for(let i=0;i<this.records.length;i++){
        const recordYear = this.records[i].date.split('-')[0];
        const recordMonth = this.records[i].date.split('-')[1];
        if(parseInt(recordYear)===this.currentYear && parseInt(recordMonth)===this.currentMonth){
          usefulRecords.push(this.records[i])
        }
      }
      // 2. 区分收入和支出归类
      const length = this.xData.length;
      const commitData1=[];
      const commitData2=[];
      for(let i=0;i<length;i++){
        commitData1[i]=0;
        commitData2[i]=0;
      }
      for(let i=0;i<usefulRecords.length;i++){
        const recordDay = usefulRecords[i].date.split('-')[2].split('T')[0];
        const location = recordDay-1;
        if(usefulRecords[i].type==='-'){
          commitData1[location] += parseFloat(usefulRecords[i].amount);
        }else{
          commitData2[location] += parseFloat(usefulRecords[i].amount);
        }
      }
      return [commitData1,commitData2];
    }
    get collect(){
      let collect1 = 0;
      let collect2 = 0;
      for(let i=0;i<this.yData[0].length;i++){
        collect1 += this.yData[0][i];
        collect2 += this.yData[1][i];
      }
      return [collect1,collect2]
    }
  }
</script>

<style lang="scss" scoped>
  @import "~@/assets/helper.scss";

  .top {
    background: #0066cc;
    line-height: 24px;
    font-size: 16px;
    color: white;
    vertical-align: center;
    padding: 13px 15px;
  }
  .show{
    text-align: center;
    background: #0066cc;
    border-radius: 10px;
    padding:5px 0;
    >span{
      color: white;
    }


  }
</style>