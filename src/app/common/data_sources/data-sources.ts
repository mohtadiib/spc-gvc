import {TableData} from "../../components/table-data/data_table";

class DataSources{
  pagesDataTable: TableData[] = [
    {
      title: "المقررات",
      router: { main:"/courses"},
      table:"courses",
      headers: [
        { name: "اسم الكورس", type: "" },
        { name: "التفاصيل", type: "" },
        { name: "درجة الكورس", type: ""},
        { name: "الحالة", type: "tag", values:[{name:'نشط',value:'1'}, {name:'معلق',value:'0'}]},
      ],
      model:{
        doc_id: '',
        name: '',
        details: '',
        grade: 100,
        active: '1',
      }
    },
    {
      title: "الفصول الدراسية",
      router: { main:"/classes"},
      customApiBody:{table:"classes",
        foreignField:{class_id:""},
        inner_tables:["class_sections","class_courses"]},
      headers: [
        { name: "اسم الفصل", type: "" },
        { name: "الحالة", type: "tag", values:[{name:'نشط',value:'1'}, {name:'معلق',value:'0'}] },
        { name: "الكورسات", type: "list",
          innerModel: {
            title: "كورسات",
            router: { main:"/class_courses"},
            customApiBody:{
              table:"class_courses",
              foreignField: { class_id: "", foreignKeys: ["course_id"]},
              inner_tables:["courses"]
            },
            headers: [
              { name: "اسم الفصل", type: "online_list", innerTableName: "courses" },
            ],
            model:{
              doc_id: '',
              course_id: '',
            }
          }
        },
        { name: "الاقسام", type: "list",
          innerModel: {
            title: "الاقسام",
            router: { main:"/class_sections"},
            customApiBody:{table:"class_sections",foreignField: { class_id: ""}},
            headers: [
              { name: "اسم القسم", type: "" },
              { name: "عدد المقاعد", type: "" },
              { name: "الحالة", type: "tag"},
            ],
            model:{
              doc_id: '',
              name: '',
              seats_no: '',
              active: '1',
            }
          }
        },
      ],
      model:{
        doc_id: '',
        name: '',
        active: '1',
        class_courses: undefined,
        class_sections: undefined,
      }
    },
    {
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
    },
    {
      title: "الطلاب",
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
  ]
}

export default DataSources
