const localStorageKeyName = 'recordList';

const modelListModel = {
  data:[] as RecordList[],
  clone(data: RecordList[] | RecordList){
    return JSON.parse(JSON.stringify(data))
  },
  fetch() {
    return JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]') as RecordList[];
  },
  save() {
    window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data));
  }
};

export {modelListModel};