declare module "*.svg" {
  const content: string;
  export default content;
}

type RecordList = {
  type: string;
  choice: string;
  note: string;
  amount: number;
  createdAt?: Date;
}

type OneLabel = {
  id: string;
  name: string;
}

type labelListModel = {
  data: OneLabel[];
  fetch: () => OneLabel[];
  create: (name: string) => 'success' | 'duplicated'; // 联合类型
  edit: (oldName: string, newName: string) => 'success' | 'duplicated';
  delete: (name: string) => 'success' | 'fail';
  save: () => void;
}