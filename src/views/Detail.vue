<template>
  <div class="detail">
    <router-link to="/home">主页</router-link>
    <br>
    <div>Detail</div>
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

</style>