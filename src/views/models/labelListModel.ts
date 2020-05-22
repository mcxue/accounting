const localStorageKeyName = 'labelList';

type labelListModel = {
  data: string[];
  fetch: () => string[];
  create: (name: string) => 'success' | 'duplicated'; // 联合类型
  save: () => void;
}

const labelListModel: labelListModel = {
  data: [],
  create(name) {
    if (this.data.indexOf(name) >= 0) {
      return 'duplicated';
    } else {
      this.data.push(name);
      this.save();
      return 'success';
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

export {labelListModel};