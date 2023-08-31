import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {GlobalVariable} from "../../common/consts";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TableDataService {
  focusField:boolean = false
  constructor(private http:HttpClient) { }
  getData(body:any,method:string = ""): Observable<any[]>{
    console.log(JSON.stringify(body))
    return this.http.post<any[]>(GlobalVariable.BASE_API_URL+method,body);
  }
  saveData(table:any,adding:boolean,data:any){
    let method = 'update/';
    if(adding){
      data.doc_id = `${Date.now()}`
      method = 'insert/';
    }
    let body = {
      table:typeof table != "string"? table.table:table,
      id:data.id,
      data:data,
      foreignField:table.foreignField!
    };
    console.log(JSON.stringify(body))
    return  this.http.post<any[]>(GlobalVariable.BASE_API_URL+method,body);
  }
  deleteRecord(table:string,recordId:string){
    return  this.http.post<any[]>(GlobalVariable.BASE_API_URL+"delete/",{table:table,id:recordId});
  }
}
