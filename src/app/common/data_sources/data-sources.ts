import {DashboardComponent} from "../../pages/dashboard/dashboard.component";

class DataSources{
  pagesDataTable: any[] = [
    {
      title: "الرئيسية",
      router: "/dashboard",
      path:"dashboard/:index",
      icon:'home',
      index:0,
      component: DashboardComponent,
      tableData: {
        router: { main:"/dashboard"},
        table:"dashboard",
        headers: [
          { name: "اسم الفئة", type: "" },
          { name: "الحالة", type: "", values:[{name:'نشط',value:'1'}, {name:'معلق',value:'0'}]},
        ],
        model:{
          doc_id: '',
          name: '',
          active: '1',
        }
      }
    },
    {
      title: "الإدارات",
      router: "/managements",
      path:"managements/:index",
      index:0,
      tableData: {
        router: { main:"/managements"},
        table:"managements",
        headers: [
          { name: "اسم الإدارة", type: "" },
          { name: "الحالة", type: "tag", values:[{name:'نشط',value:'1'}, {name:'معلق',value:'0'}]},
        ],
        model:{
          doc_id: '',
          name: '',
          active: '1',
        }
      }
    },
    {
      title: "انوع المركبات",
      router: "/carstypes",
      path:"carstypes/:index",
      index:1,
      tableData: {
        router: { main:"/carstypes"},
        table:"carstypes",
        headers: [
          { name: "النوع", type: "" },
          { name: "الحالة", type: "tag", values:[{name:'نشط',value:'1'}, {name:'معلق',value:'0'}]},
        ],
        model:{
          doc_id: '',
          name: '',
          active: '1',
        }
      }
    },
    {
      title: "المركبات",
      router: "/cars",
      path:"cars/:index",
      index:2,
      tableData: {
        router: { main: "/cars" },
        // table:"cars",
        customApiBody:{
          table:"cars",
          foreignFields:[
            {field:"carTypeId",table:"carstypes"},
            {field:"mgId",table:"managements"}
          ],
        },
        modelAddType:true,
        headers: [
          { name: "السائق", type: "" },
          { name: "رقم العربة", type: "" },
          { name: "نوع العربة", type: "online_list", innerTableName: "carstypes" },
          { name: "الادارة", type: "online_list", innerTableName: "managements" },
          { name: "المخالفات", type: "" },
          { name: "رقم الهاتف", type: "" },
          { name: "ملاحظات", type: "" },
        ],
        model:{
          doc_id: '',
          driverName: '',
          carNo: '',
          carTypeId: '',
          mgId: '',
          irregularities: '',
          phone: '',
          notes: '',
        }
      }
    },
  ]
}

export default DataSources
