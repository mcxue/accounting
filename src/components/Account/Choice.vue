<template>
  <div class="choice-wrapper">
    <div>标签</div>
    <ul>
      <li v-for="value2 in $store.state.labels" :key="value2"
          :class="{selected:value2===value}"
          @click="toggle(value2)">{{value2}}</li>
    </ul>
  </div>

</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';

  @Component
  export default class Choice extends Vue {
    @Prop(String) readonly value!: string;
    toggle(label: string){
      this.$emit('update:value',label)
    }
    created(){
      this.$store.commit('fetchLabels')
    }
  }
</script>

<style lang="scss" scoped>
  @import "~@/assets/helper.scss";
  .choice-wrapper{
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #ffffff;
    padding:20px 0;
    >div{
      margin: 0 20px;
      font-weight: bold;
      white-space: nowrap;
    }
    >ul{
      flex-grow:1;
      display:flex;
      justify-content: left;
      align-items: center;
      flex-wrap: wrap;
      padding-left:0;
      >li{
        min-width: 52px;
        text-align: center;
        padding:5px 10px;
        margin:5px 10px;
        background: #ddd;
        border-radius: 15px;
        &.selected{
          background: $color-sky-blue;
          color: #ffffff;
        }
      }
    }
  }

</style>