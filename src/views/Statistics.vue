<template>
  <div>
  <Layout name="统计">
    <Type/>
    <div>Statistics</div>
  </Layout>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import Type from '@/components/Type.vue';
  @Component({
    components: {Type}
  })
  export default class Statistics extends Vue {
    
  }
</script>

<style lang="scss" scoped>

</style>