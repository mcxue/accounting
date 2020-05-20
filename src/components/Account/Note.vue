<template>
    <label>
      <span>备注</span>
      <input type="text" placeholder="在这里添加备注">
    </label>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  
  @Component
  export default class Note extends Vue {
    
  }
</script>

<style lang="scss" scoped>
  label{
    display: flex;
    justify-content: center;
    background: #ffffff;
    align-items: center;
    >span{
      margin: 5px 20px;
      text-align: center;
      line-height: 46px;
      font-weight: bold;
    }
    >input{
      flex-grow:1;
      text-align: right;
      margin-right: 25px;
      line-height: 46px;
      text-decoration: none;
    }
  }
</style>