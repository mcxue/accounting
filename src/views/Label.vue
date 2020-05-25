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
            <Icon :value="label" name="edit" @click="editLabel"/>
            <Icon name="delete" @click="deleteLabel"/>
          </div>
        </li>
      </ul>
      <div class="createLabel" @click="createLabel">
        <button>新建标签</button>
      </div>
    </Layout>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import Type from '@/components/Type.vue';
  import {labelListModel} from '@/views/models/labelListModel';

  @Component({
    components: {Type}
  })
  export default class Label extends Vue {
    labels = labelListModel.data.map(item => item.name);
    clickLabel = '';
    createLabel() {
      const name = window.prompt('请输入标签名');
      if (name) {
        const message = labelListModel.create(name);
        if (message === 'duplicated') {
          window.alert('标签名重复啦');
        } else {
          window.alert('新建标签成功');
          this.labels = labelListModel.data.map(item => item.name);
        }
      } else {
        window.alert('标签名不能为空');
      }
    }
    editLabel() {
      const name = window.prompt('请输入新的标签名');
      if (name) {
        const message = labelListModel.edit(this.clickLabel, name);
        if (message === 'duplicated') {
          window.alert('标签名重复啦');
        } else {
          window.alert('编辑标签名成功');
          this.labels = labelListModel.data.map(item => item.name);
        }
      } else {
        window.alert('标签名不能为空');
      }
    }

    deleteLabel() {
      console.log(this.clickLabel);
      const message = labelListModel.delete(this.clickLabel);
      if(message ==='success'){
        window.alert('删除标签成功');
        this.labels = labelListModel.data.map(item => item.name);
      }else{
        window.alert('删除标签失败')
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