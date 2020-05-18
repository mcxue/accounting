<template>
  <div class="account">
    <router-link to="/home">主页</router-link>
    <br>
    <div>Account</div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  
  @Component
  export default class Account extends Vue {
    
  }
</script>

<style lang="scss" scoped>

</style>