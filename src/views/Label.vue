<template>
  <div class="label">
    <router-link to="/home">主页</router-link>
    <br>
    <div>Label</div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  
  @Component
  export default class Label extends Vue {
    
  }
</script>

<style lang="scss" scoped>

</style>