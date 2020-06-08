<template>
  <div>
    <Layout name="标签">
      <div class="top">
        全部标签
      </div>
      <ul class="labels">
        <li v-for="label in labels" :key="label" @click.capture="clickLabel=label">
          <span>{{label}}</span>
          <div>
            <Icon :value="label" name="edit" @click="updateLabel"/>
            <Icon name="delete" @click="removeLabel"/>
          </div>
        </li>
      </ul>
      <div class="createLabel" @click="generatorLabel">
        <button>新建标签</button>
      </div>
    </Layout>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import Type from '@/components/Type.vue';
  import store from '@/store/index'

  @Component({
    components: {Type},
    computed: {
      labels() {
        return store.state.labels;
      }
    }
  })
  export default class Label extends Vue {
    clickLabel = '';
    beforeCreate(){
      this.$store.commit('fetchLabels')
    }

    generatorLabel() {
      const name = window.prompt('请输入标签名',);
      if (name) {
        this.$store.commit('createLabel', name);
      } else {
        window.alert('标签名不能为空');
      }
    }

    updateLabel() {
      const newName = window.prompt('请输入新的标签名');
      const oldName = this.clickLabel;
      if (newName) {
        this.$store.commit('editLabel', {oldName, newName});
      } else if(newName ==='') {
        window.alert('标签名不能为空');
      }else {
        return
      }
    }

    removeLabel() {
      const name = this.clickLabel;
      if(window.confirm('确认要删除该标签吗')){
        this.$store.commit('deleteLabel', name);
      }else{
        return
      }
    }
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

  .labels {
    padding-left: 0;
    margin-top: 16px;

    > li {
      background: #ffffff;
      margin: 8px 0;
      padding: 0 12px;
      border-radius: 4px;
      min-height: 38px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #000;

      .edit {
        width: 22px;
        height: 22px;
        color: blue;
        margin: 0 8px;
      }

      .delete {
        width: 20px;
        height: 20px;
        color: red;
        margin: 0 8px;
      }
    }
  }

  .createLabel {
    text-align: center;
    margin-top: 20px;

    > button {
      background: #0066cc;
      color: #ffffff;
      padding: 5px 10px;
      border-radius: 4px;
    }
  }
</style>