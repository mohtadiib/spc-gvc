import {Component, HostListener, Input, OnChanges, OnInit } from '@angular/core';
import {TableDataService} from "./table-data.service";
import {TableData} from "../../common/data_sources/side-model";
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-table-data',
  templateUrl: './table-data.component.html',
  styleUrls: ['./table-data.component.css']
})
export class TableDataComponent implements OnInit, OnChanges{
  form = new FormGroup({});
  index:number = 0
  @Input() inputTableData!: TableData;
  @Input() foreignId!: string;
  tableData!:TableData
  editCache: { [key: string]: { edit: boolean; data: any } } = {};
  listOfData: any[] = [];
  keysEditModel: any[] = [];
  editingObject: { recordId: string, adding: boolean } = { recordId: "",adding: false };
  constructor(public tableApiService:TableDataService) {}
  // modelData = () => this.tableData2[this.index];
  ngOnInit(): void {
    // this.getData()
  }
  ngOnChanges(): void {
    this.getData()
  }

  //Tables Functions *****************************
  startEdit(doc_id: string): void {
    if (!this.editingObject.recordId){
      this.editingObject.recordId = doc_id;
      this.editCache[doc_id].edit = true;
    }
  }
  cancelEdit(doc_id: string): void {
    //close focusing input
    this.tableApiService.focusField = false
    const index = this.listOfData.findIndex(item => item.doc_id === doc_id);
    this.editCache[doc_id] = {
      data: { ...this.listOfData[index] },
      edit: false
    };
    if (this.editingObject.adding){
      this.listOfData.splice(index,1)
      this.editingObject.adding = false
    }
    this.editingObject.recordId = ''
    if (this.listOfData.length == 0){
      this.listOfData = []
    }
  }
  updateEditCache(): void {
    this.listOfData.forEach(item => {
      this.editCache[item.doc_id!] = {
        edit: false,
        data: { ...item }
      };
    });
  }
  addRow(): void {
    this.editingObject.adding = true;
    this.listOfData = [
      this.tableData.model,
      ...this.listOfData
    ];
    this.updateEditCache();
    this.startEdit('');
  }
  checkCustomApi(unput:boolean){
    let body = {table:this.tableData.table}
    if (this.tableData.customApiBody?.foreignField && this.foreignId){
      let apiBody = this.tableData.customApiBody
      apiBody.foreignField[Object.keys(apiBody.foreignField)[0]] = this.foreignId
      // apiBody.innerTable = innerTableName
      body = apiBody
    }else if(this.tableData.customApiBody){
      body = unput?this.tableData.customApiBody.table:this.tableData.customApiBody
    }
    return body
  }
  //keyboard shortcuts *****************************
  @HostListener('window:keydown.control.n', ['$event'])
  public handleKeyboardEvent (event: any) {
    event.preventDefault();
    if (!this.editingObject.adding){
      this.addRow()
    }
  }
  @HostListener('window:keydown.Escape', ['$event'])
  public escape (event: any) {
    event.preventDefault();
    this.cancelEdit(this.editingObject.recordId)
  }
  //Check Editing for change add button
  checkEditing = () => this.editingObject.recordId || this.editingObject.adding


  //model
  isVisible = false;
  showModal(add:boolean = true): void {
    this.editingObject.adding = add
    this.isVisible = true;
  }

  handleOk(): void {
    this.submitForm()
    this.isVisible = false;
    this.editingObject.adding = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
    this.editingObject.adding = false;
  }

  submitForm(): void {
    // console.log('submit', this.form.value);
    const data = this.form.value
    this.storeData(data,()=> {})
  }


  //Api Functions *****************************
  public getData(){
    this.tableData = this.inputTableData
    this.listOfData = []
    this.keysEditModel = Object.keys(this.tableData.model);
    this.keysEditModel.splice(0,1)
    let body = this.checkCustomApi(false)
    // console.log(JSON.stringify(body))
    this.tableApiService.getData(body).subscribe(res=>{
      this.listOfData = res;
      this.updateEditCache();
    })
  }
  saveEdit(doc_id: string = ''): void {
    const index = this.listOfData.findIndex(item => item.doc_id === doc_id);
    Object.assign(this.listOfData[index], this.editCache[doc_id].data);
    //get inner Table name from headers
    let data: any = this.form.value
    data.id = this.listOfData[index].id
    this.storeData(data,()=> {
      this.editCache[doc_id].edit = false;
    })
  }
  storeData(data:any,call:any){
    let body = this.checkCustomApi(true)
    this.tableApiService.saveData(
      body!,
      this.editingObject.adding,
      data
    ).subscribe((res)=>{
      console.log(res)
      //close focusing input
      this.tableApiService.focusField = false
      this.editingObject.adding = false;
      this.editingObject.recordId = ''
      this.getData()
      call()
    })
  }
  deleteRow(doc_id: string): void {
    let tableName = this.tableData.table
    if(this.tableData.customApiBody){
      tableName = this.tableData.customApiBody.table
    }
    this.tableApiService.deleteRecord(tableName!,doc_id).subscribe((res)=>{
      this.listOfData = this.listOfData.filter(d => d.doc_id !== doc_id);
      console.log(res)
    })
  }
}

