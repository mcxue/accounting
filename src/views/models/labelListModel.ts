import '@/lib/generatorId.ts';
import generatorId from '@/lib/generatorId';

const localStorageKeyName = 'labelList';

const labelListModel: labelListModel = {
  data: [],
  create(name) {
    const names = this.data.map(item => item.name);
    if (names.indexOf(name) >= 0) {
      return 'duplicated';
    } else {
      const id = generatorId().toString();
      this.data.push({id, name: name});
      this.save();
      return 'success';
    }
  },
  edit(oldName, newName) {
    const names = this.data.map(item => item.name);
    const index = names.indexOf(oldName);
    if (names.indexOf(newName)>=0) {
      console.log('执行到这里了');
      return 'duplicated';
    } else {
      this.data[index].name = newName;
      this.save();
      return 'success';
    }
    
  },
  delete(name: string) {
    const names = this.data.map(item => item.name);
    const index = names.indexOf(name);
    if( index>=0){
      this.data.splice(index, 1);
      this.save();
      return 'success'
    }else{
      return 'fail'
    }
    
  },
  fetch() {
    this.data = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]');
    return this.data;
  },
  save() {
    window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data));
  }
};

labelListModel.fetch();

export {labelListModel};