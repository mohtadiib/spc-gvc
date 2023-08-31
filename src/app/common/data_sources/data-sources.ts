import {SideModel} from "./side-model";
import {PosComponent} from "../../pages/pos/pos.component";

class DataSources{
  pagesDataTable: SideModel[] = [
    {
      title:"الرئيسية",
      icon:"dashboard",
      submenu: [
        {
          title: "الفئات",
          router: "/categories",
          path:"categories/:index",
          index:0,
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
          index:1,
          tableData: {
            router: { main:"/products"},
            table:"products",
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
          title: "POS",
          router: "/pos",
          path:"pos/:index",
          component: PosComponent,
          index: 2,
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
      ]
    }
  ]
}

export default DataSources



// pagesDataTable: SideModel[] = [
//   {
//     title:"الرئيسية",
//     icon:"dashboard",
//     submenu: [
//       {
//         title: "المقررات",
//         router: "/courses",
//         path:"courses/:index",
//         index:0,
//         tableData: {
//           router: { main:"/courses"},
//           table:"courses",
//           headers: [
//             { name: "اسم الكورس", type: "" },
//             { name: "التفاصيل", type: "" },
//             { name: "درجة الكورس", type: ""},
//             { name: "الحالة", type: "tag", values:[{name:'نشط',value:'1'}, {name:'معلق',value:'0'}]},
//           ],
//           model:{
//             doc_id: '',
//             name: '',
//             details: '',
//             grade: 100,
//             active: '1',
//           }
//         }
//       },
//       {
//         title: "الفصول الدراسية",
//         router: "/classes",
//         path:"classes/:index",
//         index: 1,
//         tableData:{
//           router: { main:"/classes"},
//           customApiBody:{table:"classes",
//             foreignField:{class_id:""},
//             inner_tables:["class_sections","class_courses"]},
//           headers: [
//             { name: "اسم الفصل", type: "" },
//             { name: "الحالة", type: "tag", values:[{name:'نشط',value:'1'}, {name:'معلق',value:'0'}] },
//             { name: "الكورسات", type: "list",
//               innerModel: {
//                 title: "كورسات",
//                 router: { main:"/class_courses"},
//                 customApiBody:{
//                   table:"class_courses",
//                   foreignField: { class_id: "", foreignKeys: ["course_id"]},
//                   inner_tables:["courses"]
//                 },
//                 headers: [
//                   { name: "اسم الفصل", type: "online_list", innerTableName: "courses" },
//                 ],
//                 model:{
//                   doc_id: '',
//                   course_id: '',
//                 }
//               }
//             },
//             { name: "الاقسام", type: "list",
//               innerModel: {
//                 title: "الاقسام",
//                 router: { main:"/class_sections"},
//                 customApiBody:{table:"class_sections",foreignField: { class_id: ""}},
//                 headers: [
//                   { name: "اسم القسم", type: "" },
//                   { name: "عدد المقاعد", type: "" },
//                   { name: "الحالة", type: "tag"},
//                 ],
//                 model:{
//                   doc_id: '',
//                   name: '',
//                   seats_no: '',
//                   active: '1',
//                 }
//               }
//             },
//           ],
//           model:{
//             doc_id: '',
//             name: '',
//             active: '1',
//             class_courses: undefined,
//             class_sections: undefined,
//           }
//         }
//       },
//       {
//         title: "المعلمين",
//         router: "/teachers",
//         path:"teachers/:index",
//         index: 2,
//         tableData:{
//           router: { main:"/teachers",second:"/view_teacher",docId:""},
//           table:"users",
//           headers: [
//             { name: "الاسم", type: "" },
//             { name: "رقم الهاتف", type: "" },
//             { name: "الجنس", type: "fill_tag", values:[{name:'ذكر',value:'1'}, {name:'انثى',value:'2'}]},
//             { name: "اخر دخول", type: ""},
//             { name: "الحالة", type: "tag", values:[{name:'نشط',value:'1'}, {name:'معلق',value:'0'}]},
//           ],
//           model:{
//             doc_id: '',
//             name: '',
//             phone: '',
//             gender: '1',
//             last_login: undefined,
//             status: '1',
//           }
//         },
//       },
//       {
//         title: "الطلاب",
//         router: "/students",
//         path:"students/:index",
//         index: 3,
//         tableData:{
//           router: { main:"/students",second:"/view_teacher",docId:""},
//           table:"users",
//           headers: [
//             { name: "الاسم", type: "" },
//             { name: "رقم الهاتف", type: "" },
//             { name: "الجنس", type: "fill_tag", values:[{name:'ذكر',value:'1'}, {name:'انثى',value:'2'}]},
//             { name: "اخر دخول", type: ""},
//             { name: "الحالة", type: "tag", values:[{name:'نشط',value:'1'}, {name:'معلق',value:'0'}]},
//           ],
//           model:{
//             doc_id: '',
//             name: '',
//             phone: '',
//             gender: '1',
//             last_login: undefined,
//             status: '1',
//           }
//         },
//       },
//       {
//         title: "تفاصيل الاستاذ",
//         router: "/view_teacher",
//         path:"view_teacher/:index",
//         index: 4,
//         component: ViewTeacherComponent,
//         tableData:{
//           title: "المقررات",
//           router: { main:"/teacher_courses"},
//           customApiBody: {
//             table:"teacher_courses",
//             foreignField: { teacher_id:"", foreignKeys: ["course_id","class_id"] },
//             inner_tables:["courses","classes"]
//           },
//           headers: [
//             { name: "اسم الكورس", type: "online_list", innerTableName: "courses" },
//             { name: "اسم الفصل", type: "online_list", innerTableName: "classes" },
//           ],
//           model:{
//             doc_id: '',
//             course_id: {
//               name: "",
//               doc_id: ""
//             },
//             class_id: {
//               name: "",
//               doc_id: ""
//             },
//           }
//         },
//       }
//     ]
//   }
//   // {
//   //   title:"Settings",
//   //   icon:"form",
//   //   submenu:[
//   //     {
//   //       title: "Basic Form",
//   //       router: "/settings",
//   //       table:"settings",
//   //     }
//   //   ]
//   // },
// ]
