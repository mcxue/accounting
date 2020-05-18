<template>
  <div>
    <div class="router-wrapper">
      <router-link to="/home">主页</router-link>
      <router-link to="/detail">明细</router-link>
      <router-link to="/account">记账</router-link>
      <router-link to="/label">标签</router-link>
      <router-link to="/account">统计</router-link>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  
  @Component
  export default class Nav extends Vue {
  }
</script>

<style lang="scss" scoped>
  @import "~@/assets/reset.scss";
  .router-wrapper{
    display: flex;
    justify-content: space-between;
    border:1px solid red;
    margin:0 auto
  }
</style>