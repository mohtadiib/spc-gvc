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
          { name: "الحالة", type: "", values:[{name:'نشط',value:'0'}, {name:'معلق',value:'1'}]},
        ],
        model:{
          doc_id: '',
          name: '',
          active: '1',
        }
      },
    },
    {
      title: "الإدارات",
      icon:"block",
      router: "/managements",
      path:"managements/:index",
      index:1,
      tableData: {
        router: { main:"/managements"},
        table:"managements",
        headers: [
          { name: "اسم الإدارة", type: "" },
          { name: "الحالة", type: "tag", values:[{name:'معلق',value:'0'}, {name:'نشط',value:'1'}]},
        ],
        model:{
          doc_id: '',
          name: '',
          active: '1',
        }
      },
      isAdmin:true
    },
    {
      title: "انوع المركبات",
      icon:"pie-chart",
      router: "/carstypes",
      path:"carstypes/:index",
      index:2,
      tableData: {
        router: { main:"/carstypes"},
        table:"carstypes",
        headers: [
          { name: "النوع", type: "" },
          { name: "الحالة", type: "tag", values:[{name:'معلق',value:'0'}, {name:'نشط',value:'1'}]},
        ],
        model:{
          doc_id: '',
          name: '',
          active: '1',
        }
      },
      isAdmin:true
    },
    {
      title: "المركبات",
      icon:"car",
      router: "/cars",
      path:"cars/:index",
      index:3,
      tableData: {
        router: { main: "/cars" },
        customApiBody:{
          table:"cars",
          foreignFields:[
            {field:"carTypeId",table:"carstypes"},
            {field:"mgId",table:"managements"},
            {field:"user_id",table:"users"}
          ],
          withAdmin:true
        },
        modelAddType:true,
        headers: [
          { name: "السائق", type: "" },
          { name: "رقم العربة", type: "" },
          { name: "نوع العربة", type: "online_list", innerTableName: "carstypes" },
          { name: "الادارة", type: "online_list", innerTableName: "managements" },
          { name: "المخالفات", type: "" },
          { name: "رقم الهاتف", type: "" },
          { name: "الموظف", type: "online_list", innerTableName: "users", disabled:true },
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
          user_id: "",
          notes: '',
        }
      },
    },
    {
      title: "المستخدمين",
      icon:"user",
      router: "/users",
      path:"users/:index",
      index:4,
      tableData: {
        router: { main: "/users" },
        customApiBody:{
          table:"users",
          where: {field:"role",value:"1"}
        },
        headers: [
          { name: "الاسم", type: "" },
          { name: "رقم الهاتف", type: "" },
          { name: "كلمة المرور", type: "" },
          { name: "الصلاحيات", type: "fill_tag", values:[{name:'مستخدم',value:'0'}, {name:'مدير',value:'1'}]},
          { name: "الحالة", type: "tag", values:[{name:'معلق',value:'0'}, {name:'نشط',value:'1'}]},
        ],
        model:{
          doc_id: '',
          name: '',
          phone: '',
          password: '',
          role: '',
          active: '',
        }
      },
      isAdmin:true
    },
  ]
}

export default DataSources
