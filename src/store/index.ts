import Vue from 'vue';
import Vuex from 'vuex';

type LabelList = {
  labelList: string[];
}

Vue.use(Vuex);
const store =  new Vuex.Store({
  state:{
    labelList:['默认','衣','食','住','行']
  },
  mutations: {
    addLabel(state){
      state.labelList.push('彩票')
    }
  }
});

store.commit('addLabel');

export default store

