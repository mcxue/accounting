<template>
  <div>
    <router-view></router-view>
  </div>
</template>
<script>
  export default {
    name: 'App'
  }
</script>
<style lang="scss">
  @import "~@/assets/reset.scss";
  @import "~@/assets/helper.scss";
  body{
    background: #eeeeee;
    line-height: 1.5em;
    font-family: $font-hei;
    font-size:16px;
    color: #333333;

  }
</style>
