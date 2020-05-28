<template>
  <div>
    <div class="label-wrapper">
      <ul class="records">
        <li v-for="(record,index) in newRecords"
            @click.capture="clicked=record.date"
            :class="{expend:record.type ==='-',income:record.type==='+'}"
            :key="index">
          <span>{{record.choice}}</span>
          <span>{{record.note}}</span>
          <span @click="removeRecord(clicked)">{{record.date2}}</span>
          <span>￥{{record.amount}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component,Prop} from 'vue-property-decorator';
  
  @Component
  export default class RecordShow extends Vue {
    clicked = '';
    @Prop() value?: number;
    beforeCreate() {
      this.$store.commit('fetchRecords');
    }

    get newRecords() {
      const newRecords = this.$store.state.records;
      for (let i = 0; i < newRecords.length; i++) {
        const newDate = newRecords[i].date;
        newRecords[i].date2 = (newDate as string).split('T')[0].replace(/-/g, '/');
      }
      if(this.value){
        return newRecords.slice(0,this.value)
      }
      return newRecords.reverse();
    }
    removeRecord(clicked: string){
      console.log(clicked);
      if(window.confirm('确认要删除这条记录吗')){
        this.$store.commit('deleteRecord',clicked)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .label-wrapper {
    margin: 20px 0;

    .records {
      padding-left: 0;

      > li {
        padding: 3px 5px;
        background: #fff;
        border-radius: 4px;
        margin: 10px 0;

        &::after {
          content: '';
          display: block;
          clear: both;
        }

        > span {
          margin: 0 10px;

          &:nth-child(1) {

            float: left;
          }

          &:nth-child(2) {
            float: left;
            color: #999999;
          }

          &:nth-child(3) {
            float: right;
            font-size: 10px;
            color: #999999;
          }
        }

        &.expend > span:nth-child(4) {
          float: right;
          color: red;
          margin: 0 0;
        }

        &.income > span:nth-child(4) {
          float: right;
          margin: 0 0;
          color: #029202;
        }
      }
    }
  }
</style>