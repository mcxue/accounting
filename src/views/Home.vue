<template>
  <div>
    <Layout name="首页">
      <div class="record">
        <div class="month">今天是</div>
        <div class="number">{{year}}年{{month}}月{{day}}日</div>
        <div class="numbers">点击下方「记账」记一笔吧~</div>
      </div>
      <div class="recent">
        <div class="text">
          <Icon name="note"/>
          <span>最近</span></div>
        <RecordShow :value="7"/>
      </div>
    </Layout>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import RecordShow from '@/components/RecordShow.vue';

  @Component({
      components: {RecordShow}
    }
  )
  export default class Home extends Vue {
    beforeCreate() {
      this.$store.commit('fetchRecords');
    }
    get year(){
      return new Date().getFullYear()
    }
    get month(){
      return new Date().getMonth()+1
    }
    get day(){
      return new Date().getDate()
    }
  }
</script>

<style lang="scss" scoped>
  .record {
    background: #0066cc;
    height: 170px;
    color: white;

    .month {
      padding: 13px 15px;
      font-size: 16px;
    }

    .number {
      padding: 15px 30px;
      text-align: center;
      font-size: 35px;
    }

    .numbers {
      text-align: center;
      padding: 15px 30px;
      font-size: 15px;
    }
  }

  .recent {
    margin-top: 20px;

    .text {
      font-weight: bold;
      color: #000;
      display: flex;
      margin-left: 10px;
      align-items: center;

      > svg {
        margin-right: 10px;
      }
    }

    .records {
      padding-left: 0;

      > li {
        padding: 3px 5px;
        background: #fff;
        border-radius: 4px;
        margin: 10px 0;

        &::after {
          content: '';
          display: block;
          clear: both;
        }

        > span {
          margin: 0 10px;

          &:nth-child(1) {
            float: left;
          }

          &:nth-child(2) {
            float: left;
            color: #999999;
          }
        }

        &.expend > span:nth-child(3) {
          float: right;
          color: red;
        }

        &.income > span:nth-child(3) {
          float: right;
          color: #029202;
        }
      }
    }
  }
</style>
