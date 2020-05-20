<template>
    <Layout name="记账" class-prefix="layout">
      <Type/>
      <Choice/>
      <Note/>
      <Show/>
      <Write/>
    </Layout>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import Type from '@/components/Type.vue';
  import Choice from '@/components/Account/Choice.vue';
  import Note from '@/components/Account/Note.vue';
  import Write from '@/components/Account/Write.vue';
  import Show from '@/components/Account/Show.vue';

  @Component({
    components: {Show, Write, Note, Choice, Type}
  })
  export default class Account extends Vue {
    
  }
</script>

<style lang="scss">
  .layout-content {
    display: flex;
    flex-direction: column;
  }
</style>