<template>
  <Layout name="记账" class-prefix="layout">
    <Type :type.sync="record.type"/>
    <Choice :selected.sync="record.choice" :data.sync="labelList"/>
    <Note :value="record.note" @update:note="onUpdateNote"/>
    <Show @ok="onOutputChange"/>
    <Write @update:amount="onUpdateAmount" @submit="saveRecord"/>
  </Layout>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Watch} from 'vue-property-decorator';
  import Type from '@/components/Type.vue';
  import Choice from '@/components/Account/Choice.vue';
  import Note from '@/components/Account/Note.vue';
  import Write from '@/components/Account/Write.vue';
  import Show from '@/components/Account/Show.vue';
  import { model } from './model';

  const records = model.fetch();

  @Component({
    components: {Show, Write, Note, Choice, Type},
  })
  export default class Account extends Vue {
    labelList = ['默认', '衣', '食', '住', '行'];
    record: RecordList = {type: '+',choice:'默认',note: '',amount: 123};
    output = '0';

    onOutputChange() {
      console.log('检测到 output 变化啦');
    }

    onUpdateNote(note: string) {
      this.record.note = note;
    }

    onUpdateAmount(amount: string) {
      this.record.amount = parseFloat(amount);
    }
    saveRecord(){
      this.record.createdAt = new Date;
      records.push(model.clone(this.record));
      model.save(records);
      console.log(records);

    }
  }
</script>

<style lang="scss">
  .layout-content {
    display: flex;
    flex-direction: column;
  }
</style>