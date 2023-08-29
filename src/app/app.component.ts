import { Component } from '@angular/core';
import {TableData} from "./components/table-data/data_table";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isCollapsed = false;
  title!: "School System";
  index:number = 0
  sideBarList: any[] =  [
    {
      title:"الرئيسية",
      icon:"dashboard",
      submenu: <TableData>[
        {
          title: "المقررات",
          router: "/courses",
          index: 0
        },
        {
          title: "الفصول الدراسية",
          router: "/classes",
          index: 1
        },
        {
          title: "المعلمين",
          router: "/teachers",
          index: 2
        },
        {
          title: "الطلاب",
          router: "/subjects",
          index: 3
        },
      ]
    }
    // {
    //   title:"Settings",
    //   icon:"form",
    //   submenu:[
    //     {
    //       title: "Basic Form",
    //       router: "/settings",
    //       table:"settings",
    //     }
    //   ]
    // },
  ];
  changeIndex(i:number){
    this.index = i
  }
}
