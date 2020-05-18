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

  body{
    line-height: 1.5em;
    font-family: -apple-system, "Noto Sans", "Helvetica Neue", Helvetica, "Nimbus Sans L", Arial, "Liberation Sans", "PingFang SC", "Hiragino Sans GB", "Noto Sans CJK SC", "Source Han Sans SC", "Source Han Sans CN", "Microsoft YaHei", "Wenquanyi Micro Hei", "WenQuanYi Zen Hei", "ST Heiti", SimHei, "WenQuanYi Zen Hei Sharp", sans-serif;
  }
</style>
