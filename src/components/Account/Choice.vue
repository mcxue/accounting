<template>
  <div class="choice-wrapper">
    <div>类别</div>
    <ul>
      <li v-for="value in data" :key="value"
          :class="{selected:selected===value}"
          @click="toggle(value)">{{value}}</li>
    </ul>
  </div>

</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';

  @Component
  export default class Choice extends Vue {
    @Prop() readonly data!: string[];
    @Prop() readonly selected!: string;
    toggle(label: string){
      this.$emit('update:selected',label)
    }

    createLabel(){
      const name = window.prompt("请输入标签名");
      if(name ===''){
        window.alert('标签名不能为空')
      }else{
        if(this.data){
          this.$emit('update:data',[...this.data,name])
        }
      }
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