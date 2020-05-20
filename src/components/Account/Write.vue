<template>
  <div class="buttons">
    <button>1</button>
    <button>2</button>
    <button>3</button>
    <button>删除</button>
    <button>4</button>
    <button>5</button>
    <button>6</button>
    <button class="clear">清空</button>
    <button>7</button>
    <button>8</button>
    <button>9</button>
    <button class="ok">确认</button>
    <button class="zero">0</button>
    <button>.</button>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  
  @Component
  export default class Write extends Vue {

  }
</script>

<style lang="scss" scoped>
  @import "~@/assets/helper.scss";
  .buttons{
    @extend %clear-fix;
    padding-left: 0;
    width:100vw;
    >button{
      float:left;
      $height:64px;
      width:25%;
      height:$height;
      text-align: center;
      line-height: $height;
      &.ok{
        height:$height*2;
        line-height: $height*2;
        float:right;
      }
      &.zero{
        width:50%;
      }
      $bg: #f2f2f2;
      &:nth-child(1) {
        background: $bg;
      }
      &:nth-child(2), &:nth-child(5) {
        background: darken($bg, 4%);
      }
      &:nth-child(3), &:nth-child(6), &:nth-child(9) {
        background: darken($bg, 4*2%);
      }
      &:nth-child(4), &:nth-child(7), &:nth-child(10) {
        background: darken($bg, 4*3%);
      }
      &:nth-child(8), &:nth-child(11), &:nth-child(13) {
        background: darken($bg, 4*4%);
      }
      &:nth-child(14) {
        background: darken($bg, 4*5%);
      }
      &:nth-child(12) {
        background: darken($bg, 4*6%);
      }
    }
  }

</style>