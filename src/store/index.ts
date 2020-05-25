// import Vue from 'vue';
// import Vuex from 'vuex';
// import generatorId from '@/lib/generatorId';
//
// const localStorageKeyName = 'labelList';
//
// type RootState = {
//   labels: OneLabel[]
// }
//
// Vue.use(Vuex);
// const store = new Vuex.Store({
//   state: {
//     labels: [],
//   } as RootState,
//   mutations: {
//     createLabel(state, name) {
//       const names = state.labels.map(item => item.name);
//       if (names.indexOf(name) >= 0) {
//         window.alert('标签名重复啦');
//       } else {
//         const id = generatorId().toString();
//         state.labels.push({id, name: name});
//         store.commit('save');
//         window.alert('创建标签成功');
//         console.log(state.labels);
//       }
//     },
    // edit(state: { data: any[]; }, oldName: any, newName: any) {
    //   const names = state.labels.map(item=> item.name);
    //   const index = names.indexOf(oldName);
    //   if (names.indexOf(newName)>=0) {
    //     console.log('执行到这里了');
    //     return 'duplicated';
    //   } else {
    //     state.data[index].name = newName;
    //     store.commit('save');
    //     return 'success';
    //   }
    // },
    // delete(state,name: string) {
    //   const names = state.data.map(item => item.name);
    //   const index = names.indexOf(name);
    //   if( index>=0){
    //     state.data.splice(index, 1);
    //     store.commit('save');
    //     return 'success'
    //   }else{
    //     return 'fail'
    //   }
    //
    // },
    // fetch(state) {
    //   state.data = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]');
    // },
    // save() {
    //   window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data));
    // }
//   }
//
// });
//
// export default store;

