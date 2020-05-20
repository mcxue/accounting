<template>
  <div class="top-wrapper">
    <Icon name="person"/>
    <header>浪浪记账</header>
    <p>{{name}}</p>
  </div>
</template>

<script lang="ts">
  import Icon from '@/components/Icon.vue';

  export default {
    name: 'Top',
    components: {Icon},
    props: ['name']
  };
</script>

<style lang="scss" scoped>
  @import "~@/assets/helper.scss";
  .wrapper{
    background: red;
  }
  .top-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 18px 20px;
    color: #fff;
    background: $color-sky-blue;
    border-bottom: 1px solid white;
    .icon{
      width:25px;
      height:25px;
    }
    header {
      font-size: 22px;
      color: #ffffff;
    }
    p {
      font-size: 15px;
    }
  }
</style>