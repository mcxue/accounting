const localStorageKeyName = 'recordList';

const model = {
  clone(data: RecordList[] | RecordList){
    return JSON.parse(JSON.stringify(data))
  },
  fetch() {
    return JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]') as RecordList[];
  },
  save(data: RecordList[]) {
    window.localStorage.setItem(localStorageKeyName, JSON.stringify(data));
  }
};

export {model};