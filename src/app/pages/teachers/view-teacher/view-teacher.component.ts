import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {TableDataService} from "../../../components/table-data/table-data.service";
import {SideModel, TableData} from "../../../common/data_sources/side-model";
import DataSources from "../../../common/data_sources/data-sources";

@Component({
  selector: 'app-view-teacher',
  templateUrl: './view-teacher.component.html',
  styleUrls: ['./view-teacher.component.css']
})
export class ViewTeacherComponent implements OnInit{
  docId!:string
  user:any = {}
  tableData: TableData = {}
  sideBarList: SideModel[] = new DataSources().pagesDataTable;
  constructor(private activatedRoute: ActivatedRoute, public tableDataService:TableDataService) {
    activatedRoute.paramMap.subscribe((params:any) => {
      let index = params.get('index');
      this.tableData = this.sideBarList[0].submenu[index].tableData
    });
  }

  tabs = [
    {
      name: 'المعلومات الاساسية',
      icon: 'home',
      component: 'user_info'
    },
    {
      name: 'الكورسات',
      icon: 'database',
      component: 'courses'
    }
  ];

  // tableData: TableData = {
  //   title: "المقررات",
  //   router: { main:"/teacher_courses"},
  //
  //   customApiBody: {
  //     table:"teacher_courses",
  //     foreignField: { teacher_id:"", foreignKeys: ["course_id","class_id"] },
  //     inner_tables:["courses","classes"]
  //   },
  //   headers: [
  //     { name: "اسم الكورس", type: "online_list", innerTableName: "courses" },
  //     { name: "اسم الفصل", type: "online_list", innerTableName: "classes" },
  //   ],
  //   model:{
  //     doc_id: '',
  //     course_id: {
  //       name: "",
  //       doc_id: ""
  //     },
  //     class_id: {
  //       name: "",
  //       doc_id: ""
  //     },
  //   }
  // }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params:any) => {
      this.docId = params.get('id');
    });
    this.getData()
  }

  getData(){
    let body = {table:"users",field:"doc_id",value:this.docId}
    this.tableDataService.getData(body,"select_by/").subscribe(res=>{
      console.log(res)
      this.user = res[0];
    })
  }
}
