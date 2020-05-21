<template>
  <div class="buttons">
    <button @click="inputContent">1</button>
    <button @click="inputContent">2</button>
    <button @click="inputContent">3</button>
    <button @click="remove">删除</button>
    <button @click="inputContent">4</button>
    <button @click="inputContent">5</button>
    <button @click="inputContent">6</button>
    <button @click="empty">清空</button>
    <button @click="inputContent">7</button>
    <button @click="inputContent">8</button>
    <button @click="inputContent">9</button>
    <button class="ok">确认</button>
    <button @click="inputContent" class="zero">0</button>
    <button @click="inputContent">.</button>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import personStore from '@/store/personStore';

  @Component
  export default class Write extends Vue {
    remove(){
      // todo
      personStore.remove();
      console.log(personStore.output)
    }
    empty(){
      personStore.empty();
      console.log(personStore.output)

    }
    inputContent(event: MouseEvent){
      personStore.inputContent(event);
      console.log(personStore.output)
    }
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