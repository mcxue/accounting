<template>
  <div>
    <Layout name="标签">
      <Type />
    <div>Label</div>
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
  export default class Label extends Vue {
    
  }
</script>

<style lang="scss" scoped>

</style>