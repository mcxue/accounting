<template>
  <div>
    <Layout name="明细">
      <div class="top">
        全部收支
      </div>
      <div class="label-wrapper">
        <div class="date">今天</div>
        <ul class="records">
          <li class="expend"><span>衣</span><span>外套</span><span>￥199.00</span></li>
          <li class="expend"><span>食</span><span>红烧鸡米饭</span><span>￥12.00</span></li>
          <li class="income"><span>彩票</span><span>刮刮乐</span><span>￥10000.00</span></li>
          <li class="expend"><span>食</span><span>小混沌</span><span>￥12.00</span></li>
        </ul>
      </div>
    </Layout>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  
  @Component
  export default class Detail extends Vue {
    
  }
</script>

<style lang="scss" scoped>
  .top{
    background: #0066cc;
    line-height: 24px;
    font-size:16px;
    color:white;
    vertical-align: center;
    padding:13px 15px;
  }
  .label-wrapper{
    margin:20px 0;
    .date{
      font-size: 23px;
      padding-left: 10px;
    }
    .records {
      padding-left: 0;
      > li {
        padding:3px 5px;
        background: #fff;
        border-radius: 4px;
        margin: 10px 0;
        &::after{
          content:'';
          display:block;
          clear:both;
        }
        > span {
          margin: 0 10px;

          &:nth-child(1) {
            float:left;
          }

          &:nth-child(2) {
            float:left;
            color: #999999;
          }
        }
        &.expend > span:nth-child(3) {
          float:right;
          color: red;
        }
        &.income > span:nth-child(3) {
          float:right;
          color: #029202;
        }
      }
    }
  }

</style>