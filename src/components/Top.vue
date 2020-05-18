<template>
  <div class="wrapper">
    <Icon name="person"/>
    <header>浪浪记账</header>
    <p>{{name}}</p>
  </div>
</template>

<script lang="ts">
  import Icon from '@/components/Icon.vue';
  export default{
    name:'Top',
    components: {Icon},
    props:['name']
  }
</script>

<style lang="scss" scoped>
  .wrapper{
    display:flex;
    flex-direction:row;
    justify-content: space-between;
    align-items:center;
    padding:20px 20px;
    color:#fff;
    background: #0066CC;
    box-shadow: 0 0 5px rgba(0,0,0,0.5);
    header{
      font-size: 25px;
      color: #ffffff;
    }
    p{
      font-size:15px;
    }
  }
</style>