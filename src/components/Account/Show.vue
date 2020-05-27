<template>
  <div class="show">
    <div class="text">金额</div>
    <div class="number">{{output}}</div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';

  @Component({
    computed:{
      output(){
        return this.$store.state.writeNumber;
      }
    }
  })
  export default class Show extends Vue {
  }
</script>

<style lang="scss" scoped>
  .show {
    background: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    width:100vw;
    > .text {
      margin: 10px 20px;
      font-weight: bold;
      white-space: nowrap;
    }
    >.number{
      flex-grow:1;
      text-align: right;
      margin-right: 25px;
      font-family: Consolas, monospace;
    }
  }
</style>