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