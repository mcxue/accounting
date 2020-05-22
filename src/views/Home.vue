<template>
  <div>
    <Layout name="首页">
      <div class="record">
        <div class="month">本月收支</div>
        <div class="number">-125.14</div>
        <div class="numbers"><span>支出:345.13</span><span>收入:218.99</span></div>
      </div>
      <div class="recent">
        <div class="text">
          <Icon name="note"/>
          <span>最近</span></div>
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

<script>
  export default {
    name: 'Home'
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

      font-size: 35px;
    }

    .numbers {
      > span {
        margin-right: 20px;
      }

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
