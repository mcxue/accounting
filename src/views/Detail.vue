<template>
  <div>
    <Layout name="明细">
      <div class="top">
        全部收支
      </div>
    <RecordShow/>
    </Layout>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import RecordShow from '@/components/RecordShow.vue';
  @Component({
    components: {RecordShow}
  })
  export default class Detail extends Vue {

  }
</script>

<style lang="scss" scoped>
  .top {
    background: #0066cc;
    line-height: 24px;
    font-size: 16px;
    color: white;
    vertical-align: center;
    padding: 13px 15px;
  }



</style>