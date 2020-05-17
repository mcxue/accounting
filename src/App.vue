import "router/index.ts"

<template>
  <div id="app">
    <router-link to="/home">主页</router-link>,
    <router-link to="/detail">明细</router-link>,
    <router-link to="/label">标签</router-link>,
    <router-link to="/account">记账</router-link>,
    <router-link to="/statistics">统计</router-link>
    <router-view></router-view>
  </div>
</template>
<script>
</script>
<style lang="scss">

</style>
