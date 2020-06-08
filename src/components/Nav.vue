<template>
    <nav>
      <router-link to="/home" class="item" active-class="selected"><Icon name="home"/>首页</router-link>
      <router-link to="/detail" class="item" active-class="selected"><Icon name="detail"/>明细</router-link>
      <router-link to="/account" class="item" active-class="selected"><Icon name="add"/>记账</router-link>
      <router-link to="/label" class="item" active-class="selected"><Icon name="label"/>标签</router-link>
      <router-link to="/statistics" class="item" active-class="selected"><Icon name="statistics"/>统计</router-link>
    </nav>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import Icon from '@/components/Icon.vue';
@Component({
  components: {Icon}
})
  export default class Nav extends Vue {
  }
</script>

<style lang="scss" scoped>
  @import "~@/assets/reset.scss";
  nav{
    background: #e5e5e5;
    font-size: 13px;
    display: flex;
    justify-content:center;
    align-items: center;
    box-shadow: 0 0 2px rgba(0,0,0,0.2);
    .item{
      width:20%;
      padding: 5px 0;
      display:flex;
      flex-direction:column;
      justify-content: center;
      align-items: center;
    }
    .item.selected{
      color:blue;
    }
  }
</style>