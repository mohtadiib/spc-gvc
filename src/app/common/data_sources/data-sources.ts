import {SideModel} from "./side-model";
import {PosComponent} from "../../pages/pos/pos.component";
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
      title: "الفئات",
      router: "/categories",
      path:"categories/:index",
      icon:'border-inner',
      index:1,
      tableData: {
        router: { main:"/categories"},
        table:"categories",
        headers: [
          { name: "اسم الفئة", type: "" },
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
      title: "المنتجات",
      router: "/products",
      path:"products/:index",
      icon:'compress',
      index:2,
      tableData: {
        router: { main:"/products"},
        table:"products",
        customApiBody:{
          table:"products",
          foreignFields: [ { field: "category_id", table:"categories" }],
        },
        headers: [
          { name: "المنتج", type: "" },
          { name: "الفئة", type: "online_list", innerTableName: "categories" },
          { name: "السعر", type: "" },
          { name: "الصورة", type: "image_view" },
          { name: "الحالة", type: "tag", values:[{name:'معلق',value:'0'}, {name:'نشط',value:'1'}]},
        ],
        model:{
          doc_id: '',
          name: '',
          category_id: '',
          price: '',
          product_image: '',
          active: '1',
        }
      }
    },
    {
      title: "POS",
      router: "/pos",
      path:"pos/:index",
      icon:'up-circle',
      component: PosComponent,
      index: 3,
      tableData: {
        table: "products",
        customApiBody:{
          table:"products",
          foreignField: { foreignKeys: ["category_id"]},
          inner_tables:[ "categories" ]
        },
        headers: [
          { name: "المنتج", type: "" },
          { name: "الفئة", type: "online_list", innerTableName: "categories" },
          { name: "السعر", type: "" },
          { name: "الصورة", type: "" },
          { name: "الحالة", type: "tag", values:[{name:'نشط',value:'1'}, {name:'معلق',value:'0'}]},
        ],
        model:{
          doc_id: '',
          product_name: '',
          category_id: '',
          price: '',
          product_image: '',
          active: '1',
        }
      }
    },
    {
      title: "ادارة المبيعات",
      router: "/sales",
      path:"sales/:index",
      icon:'shopping-cart',
      index: 4,
      tableData:{
        router: { main:"/sales"},
        customApiBody:{
          table:"sales",
          foreignFields:[{field:"employee_id",table:"users"}],
          inner_tables:{foreignField:"invoice",tables:["sales_order"]},
          where: {field:"returned",value:"0"}
        },
        customCrud:['return'],
        headers: [
          { name: "رقم الفاتورة", type: "" },
          { name: "الموظف", type: "online_list" },
          { name: "الاجمالي", type: "" },
          { name: "الاصناف", type: "list",
            innerModel: {
              title: "الاصناف",
              router: { main:"/sales_order"},
              customApiBody:{
                table:"sales_order",
                foreignKey: {invoice:""},
                foreignFields: [{field:"product_id",table:"products"}],
              },
              customCrud:[],
              headers: [
                { name: "اسم المنتج", type: "online_list", innerTableName: "products" },
                { name: "الكمية", type: "" },
              ],
              model:{
                doc_id: '',
                product_id: '',
                qty: '',
              }
            }
          },
          { name: "الدفع", type: "fill_tag", values:[{name:'بنكك',value:'0',color:""}, {name:'كاش',value:'1',color:""}] },
        ],
        model:{
          doc_id: '',
          invoice: '',
          employee_id: '',
          full_total_price: '',
          sales_order: undefined,
          pay_type: '0',
        }
      }
    },
    {
      title: "المستخدمين",
      router: "/users",
      path:"users/:index",
      icon:'usergroup-add',
      index: 5,
      tableData: {
        router: { main:"/users"},
        table: "users",
        headers: [
          { name: "الاسم", type: "" },
          { name: "رقم الهاتف", type: "" },
          { name: "كلمةالمرور", type: "" },
        ],
        model:{
          doc_id: '',
          name: '',
          phone: '',
          password: '',
        }
      }
    },
    {
      title: "بنود الصرف",
      router: "/items",
      path:"items/:index",
      icon:'rotate-right',
      index:6,
      tableData: {
        router: { main:"/items"},
        table:"items",
        headers: [
          { name: "اسم البند", type: "" },
          { name: "الحالة", type: "tag", values:[{name:'معلق',value:'0'}, {name:'نشط',value:'1'}]},
        ],
        model:{
          doc_id: '',
          name: '',
          active: '1',
        }
      }
    },
    {
      title: "المنصرفات",
      router: "/outputs",
      path:"outputs/:index",
      icon:'switcher',
      index:7,
      tableData: {
        router: { main:"/outputs"},
        table:"outputs",
        customApiBody:{
          table:"outputs",
          foreignFields:[{field:"item_id",table:"items"},{field:"employee_id",table:"users"}],
        },
        headers: [
          { name: "البند", type: "online_list", innerTableName: "items" },
          { name: "التكلفة", type: "" },
          { name: "الزمن", type: "" },
          { name: "الموظف", type: "online_list", innerTableName: "users" },
          { name: "الحالة", type: "tag", values:[{name:'معلق',value:'0'}, {name:'نشط',value:'1'}]},
        ],
        model:{
          doc_id: '',
          item_id: '',
          moneyValue: '',
          timestamp: undefined,
          employee_id: undefined,
          active: '1',
        }
      }
    },
    {
      title: "التقارير",
      router: "/report",
      path:"report/:index",
      icon:'snippets',
      index:8,
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
    // {
    //   title: "الطلبات",
    //   router: "/orders",
    //   path:"orders/:index",
    //   icon:'shopping-cart',
    //   index: 0,
    //   tableData:{
    //     router: { main:"/orders"},
    //     table:"orders",
    //     // customApiBody:{
    //     //   table:"orders",
    //     //   foreignField:{foreignKeys: ["employee_id"]},
    //     //   inner_tables:["employees"],
    //     //   where: {field:"returned",value:"0"}
    //     // },
    //     customCrud:[''],
    //     headers: [
    //       { name: "تاريخ الحجز", type: "" },
    //       { name: "نوع الحجز", type: "" },
    //       { name: "جنسية العاملات", type: "" },
    //       { name: "عدد الساعات", type: "" },
    //       { name: "مواد النظافة", type: "tag", values:[{name:'لا يحتاج',value:'0'}, {name:'يحتاج',value:'1'}] },
    //       { name: "عدد العاملات", type: "" },
    //       { name: "اسم العميل", type: "" },
    //       { name: "رقم الهاتف", type: "" },
    //       { name: "المدينة", type: "" },
    //       { name: "العنوان", type: "" },
    //     ],
    //     model:{
    //       doc_id: '',
    //       booked_date: '',
    //       service_type: '',
    //       worker_nation: '',
    //       hour_count: '',
    //       cleaning_tools: '',
    //       workers_count: '',
    //       username: '',
    //       userphone: '',
    //       address: '',
    //     }
    //   }
    // },
    // {
    //   title: "الشكاوي",
    //   router: "/shaqawi",
    //   path:"shaqawi/:index",
    //   icon:'exclamation',
    //   index: 1,
    //   tableData:{
    //     router: { main:"/orders"},
    //     table:"shaqawi",
    //     // customApiBody:{
    //     //   table:"orders",
    //     //   foreignField:{foreignKeys: ["employee_id"]},
    //     //   inner_tables:["employees"],
    //     //   where: {field:"returned",value:"0"}
    //     // },
    //     customCrud:[''],
    //     headers: [
    //       { name: "اسم العميل", type: "" },
    //       { name: "رقم الهاتف", type: "" },
    //       { name: "العنوان", type: "" },
    //       { name: "الاستفسار", type: "" },
    //     ],
    //     model:{
    //       doc_id: '',
    //       name: '',
    //       phone: '',
    //       subject: '',
    //       message: '',
    //     }
    //   }
    // },

  ]
}

export default DataSources
