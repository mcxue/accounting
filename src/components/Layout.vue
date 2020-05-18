<template>
  <div class="layout-wrapper">
    <Top :name="name"/>
    <div class="content">
      <slot/>
    </div>
    <Nav class="nav"/>
  </div>
</template>

<script lang="ts">
  export default {
    name:'Layout',
    props: ['name']
  }
</script>

<style lang="scss" scoped>
  .layout-wrapper{
    height:100vh;
    display:flex;
    flex-direction:column;
    .content{
      flex-grow:1;
    }
  }

</style>