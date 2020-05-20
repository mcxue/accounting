<template>
  <svg class="icon">
    <use :xlink:href="'#'+name"></use>
  </svg>
</template>

<script lang="ts">
  const importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
  try {
    importAll(require.context('../assets/icons', true, /\.svg$/));
  } catch (error) {
    console.log(error);
  }

  export default {
    props: ['name']
  };
</script>

<style lang="scss" scoped>
  .icon {
    width: 32px;
    height: 32px;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden
  }
</style>