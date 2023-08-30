import {Component} from "@angular/core";

export interface SideModel {
  title: string;
  icon: string;
  submenu: SubMenuModel[]
}
export interface SubMenuModel {
  title: string;
  router: string;
  path:string
  index:number,
  tableData: TableData,
  component?:any
}

export interface TableData {
  title?:        string;
  router?:      {main:string,second?:string,docId?:string};
  index?:number
  table?:  string;
  foreignField?:  string;
  customApiBody?:any
  customHeaders?:any
  headers?:any[];
  model?:any
}

