<template>
  <Layout name="记账" class-prefix="layout">
    <Type :value.sync='record.type'/>
    <Choice :value.sync="record.choice"/>
    <Note @note="record.note = $event"/>
    <Show/>
    <Write @ok="submit"/>
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

  type OneRecord = {
    type: string;
    choice: string;
    note: string;
    amount: string;
    date?: string;
  }

  @Component({
    components: {Show, Write, Note, Choice, Type},
  })
  export default class Account extends Vue {

    beforeCreate() {
      this.$store.commit('fetchLabels');
      this.$store.commit('fetchRecords')
    }

    get defaultChoice() {
      return this.$store.state.labels[0];
    }

    record: OneRecord = {type: '-', choice: this.defaultChoice, note: '', amount: '0'};

    submit($event: string) {
      if($event ==='0'){
        window.alert('金额忘记写啦');
      }else{
        this.record.amount = $event;
        this.record.date = new Date().toISOString();
        this.$store.commit('createRecords', this.record);
        window.alert('保存成功');
        this.$store.state.writeNumber = '0';
        this.record.type = '-';
        this.record.choice = this.defaultChoice;
      }

    }
  }
</script>

<style lang="scss">
  .layout-content {
    display: flex;
    flex-direction: column;
  }
</style>