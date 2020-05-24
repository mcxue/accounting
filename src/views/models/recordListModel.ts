import clone from '@/lib/clone';

const localStorageKeyName = 'recordList';
const recordListModel = {
  data:[] as RecordList[],
  create(record: RecordList){
    this.data = this.fetch();
    const record2 = clone(record);
    recordListModel.data.push(record2);
    this.save();
  },
  
  fetch() {
    return JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]') as RecordList[];
  },
  save() {
    window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data));
  }
};

export {recordListModel};