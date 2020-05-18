<template>
  <div>
    <Top/>
    <br>
    <div>Label</div>
    <br>
    <Nav/>
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