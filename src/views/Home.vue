<template>
  <div>
    <div>Home</div>
    <router-link to="/detail">明细</router-link>
    <br>
    <Nav/>
  </div>
</template>

<script>
  import Nav from "@/components/Nav"
  export default {
    name: 'Home',
    components: {Nav},
  }
</script>

<style lang="scss" scoped>

</style>
