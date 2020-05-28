import Vue from 'vue';
import Vuex from 'vuex';
import clone from '@/lib/clone.ts';

const localStorageKeyName = 'labels';
const localStorageKeyName2 = 'records';


Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    writeNumber: '0',
    labels: [],
    records: []
  } as RootState,
  mutations: {
    inputNumber(state,event: MouseEvent){
      const input = (event.target as HTMLButtonElement).textContent as string;
      if(state.writeNumber.length<=16){
        if(state.writeNumber ==='0' && input !=='.'){
          state.writeNumber = input;
        }else{
          if(state.writeNumber.indexOf('.')>=0 && input ==='.'){
            return
          }
          state.writeNumber += input;
        }
      }
    },
    removeNumber(state){
      if(state.writeNumber.length<=1){
        state.writeNumber = '0';
      }else{
        state.writeNumber = state.writeNumber.slice(0,-1)
      }
    },
    emptyNumber(state){
      state.writeNumber = '0';
    },
    createLabel(state, name) {
      if (state.labels.indexOf(name) >= 0) {
        window.alert('标签名重复啦');
      } else {
        state.labels.push(name);
        store.commit('saveLabels');
        window.alert('创建标签成功');
      }
    },
    editLabel(state,change: ChangeName) {
      const index = state.labels.indexOf(change.oldName);
      if (state.labels.indexOf(change.newName)>=0) {
        window.alert('标签名重复啦');
      } else {
        state.labels.splice(index,1, change.newName);
        store.commit('saveLabels');
        window.alert('修改标签名成功');
      }
    },
    deleteLabel(state,name: string) {
      if(state.labels.length<=1){
        window.alert('最后一个标签不可删除')
      }else{
        const index = state.labels.indexOf(name);
        if( index>=0){
          state.labels.splice(index, 1);
          store.commit('saveLabels');
          window.alert("删除标签成功")
        }else{
          window.alert('删除标签失败')
        }
      }
    },
    fetchLabels(state) {
      const defaultLabels = ['默认','衣','食','住','行'];
      state.labels = JSON.parse(window.localStorage.getItem(localStorageKeyName) ||JSON.stringify(defaultLabels));
    },
    saveLabels(state) {
      window.localStorage.setItem(localStorageKeyName, JSON.stringify(state.labels));
    },
    createRecords(state,record: RecordList){
      const record2 = clone(record);
      state.records.push(record2);
      state.records.sort(
        function(a: RecordList,b: RecordList){return (Date.parse(a.date as string) - Date.parse(b.date as string))}
      );
      store.commit('saveRecords')
    },
    fetchRecords(state) {
      // const fakeDate = '[{"type":"+","choice":"衣","note":"","amount":"2366","date":"2020-05-24T06:09:26.844Z"},{"type":"-","choice":"食","note":"","amount":"236","date":"2020-02-21T06:10:18.867Z"},{"type":"-","choice":"食","note":"","amount":"236","date":"2020-02-22T06:10:18.867Z"},{"type":"-","choice":"住","note":"","amount":"36","date":"2020-03-26T06:10:21.058Z"},{"type":"+","choice":"默认","note":"","amount":"1236","date":"2020-04-27T06:10:27.386Z"},{"type":"+","choice":"食","note":"","amount":"866","date":"2020-05-27T06:10:31.668Z"},{"type":"-","choice":"默认","note":"","amount":"665","date":"2020-06-27T06:10:35.644Z"},{"type":"-","choice":"默认","note":"","amount":"233","date":"2020-07-27T06:11:10.194Z"},{"type":"-","choice":"食","note":"","amount":"236","date":"2020-08-23T06:10:18.867Z"},{"type":"-","choice":"住","note":"","amount":"36","date":"2020-09-26T06:10:21.058Z"},{"type":"-","choice":"食","note":"","amount":"236","date":"2020-10-23T06:10:18.867Z"},{"type":"-","choice":"住","note":"","amount":"36","date":"2020-05-26T06:10:21.058Z"},{"type":"-","choice":"默认","note":"","amount":"12","date":"2020-12-27T06:11:26.572Z"}]';
      // state.records = JSON.parse(fakeDate || '[]') as RecordList[];
      state.records = JSON.parse(window.localStorage.getItem(localStorageKeyName2) || '[]') as RecordList[];
    },
    deleteRecord(state,date: string){
      for(let i=0;i<state.records.length;i++){
        if(state.records[i].date===date){
          state.records.splice(i,1)
        }
      }
      store.commit('saveRecords');
    },
    saveRecords(state) {
      window.localStorage.setItem(localStorageKeyName2, JSON.stringify(state.records));
      
    }
  },
  
});

export default store;

