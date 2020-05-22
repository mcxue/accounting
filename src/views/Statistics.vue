<template>
  <div>
    <Layout name="统计">
      <Type/>
      <ul class="toggle">
        <li class="selected">按年</li>
        <li>按月</li>
      </ul>
      <div>折线图</div>
      <div class="list">
        <div class="text-wrapper">
          <Icon name="trophy"/>
          <span>排行榜</span>
        </div>
        <ul class="records">
          <li class="expend"><span>衣</span><span>外套</span><span>￥199.00</span></li>
          <li class="expend"><span>食</span><span>红烧鸡米饭</span><span>￥12.00</span></li>
          <li class="expend"><span>食</span><span>小混沌</span><span>￥12.00</span></li>
        </ul>
      </div>
    </Layout>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import Type from '@/components/Type.vue';

  @Component({
    components: {Type}
  })
  export default class Statistics extends Vue {
    
  }
</script>

<style lang="scss" scoped>
  @import "~@/assets/helper.scss";
  .toggle{
    margin:10px 0;
    background: white;
    padding:5px 0;
    display: flex;
    >li{
      min-width: 52px;
      text-align: center;
      padding:5px 10px;
      margin:5px 10px;
      background: #ddd;
      border-radius: 15px;
      &.selected{
        background: $color-sky-blue;
        color: #ffffff;
      }
    }
  }
  .list {
    >.text-wrapper{
      display:flex;
      align-items: center;
      margin:10px 10px;

      >.trophy{
      }
      >span{
        padding-left: 5px;
        font-weight: bold;
      }
    }

    >.records {
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