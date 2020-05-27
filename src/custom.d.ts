declare module "*.svg" {
  const content: string;
  export default content;
}
type RecordList = {
  type: string;
  choice: string;
  note: string;
  amount: string;
  date?: string;
}

type RootState = {
  labels: string[];
  writeNumber: string;
  records: RecordList[];
}
type ChangeName ={
  oldName: string;
  newName: string;
}