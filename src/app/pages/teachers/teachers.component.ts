import { Component } from '@angular/core';
import {TableData} from "../../components/table-data/data_table";

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent {
  tableData: TableData = {
    title: "المعلمين",
    router: { main:"/teachers",second:"/view_teacher",docId:""},
    table:"users",
    headers: [
      { name: "الاسم", type: "" },
      { name: "رقم الهاتف", type: "" },
      { name: "الجنس", type: "fill_tag", values:[{name:'ذكر',value:'1'}, {name:'انثى',value:'2'}]},
      { name: "اخر دخول", type: ""},
      { name: "الحالة", type: "tag", values:[{name:'نشط',value:'1'}, {name:'معلق',value:'0'}]},
    ],
    customHeaders:["name","phone","gender","last_login","status"],
    model:{
      doc_id: '',
      name: '',
      phone: '',
      gender: '1',
      last_login: undefined,
      status: '1',
    }
  }
}
