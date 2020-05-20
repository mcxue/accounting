<template>
  <ul>
    <li class="selected">支出</li>
    <li>收入</li>
  </ul>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  
  @Component
  export default class Top2 extends Vue {
    
  }
</script>

<style lang="scss" scoped>
  @import "~@/assets/helper.scss";
  ul {
    background: $color-sky-blue;
    display: flex;
    padding-left: 0;
    padding-right:0;
    > li {
      text-align: center;
      width: 50%;
      color: #ffffff;
      padding: 13px 0;

      &.selected {
        position: relative;
        &::after{
          $width:32px;
          content:'';
          position: absolute;
          left:50%;
          bottom: 5px;
          background: #ffffff;
          height:3px;
          width:$width;
          margin-left: -$width/2;
        }
      }
    }
  }
</style>