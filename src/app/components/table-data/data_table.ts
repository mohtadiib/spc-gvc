export interface TableData {
  title?:        string;
  router?:      {main:string,second?:string,docId?:string};
  table?:  string;
  foreignField?:  string;
  customApiBody?:any
  customHeaders?:any
  headers?:any[];
  model?:any
}
