import {Component, OnInit} from '@angular/core';
import {NzMarks} from "ng-zorro-antd/slider";
import {TableDataService} from "../../components/table-data/table-data.service";
import {NzModalService} from "ng-zorro-antd/modal";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  body:any = {
    foreignKey:{
      employee_id: this.authService.getToken()
    },
    dashboard:[
      {table:"sales",field:"total_price",user:true},
      {table:"products"},
      {table:"categories"},
      {table:"outputs",field:"manyValue",user:true},
    ]
  }
  totals:any = {
    sales: { count:0, total:0 },
    outputs: { count:0, total:0 },
    products: 0,
    categories: 0,
    role:""
  }
  reportPage:boolean = this.router.url === '/report/8'
  constructor(private dataService:TableDataService,
              private modal: NzModalService,
              public authService:AuthService,
              private router: Router) {}
  getData(){
    this.dataService.getData(this.body).subscribe((value:any) => {
      this.authService.isAdmin = this.getRole(value.role)
      this.totals = value
    })
  }
  getRole = (value:string) => value === '1'
  // reportPage = () => this.router.url == '/report/8'
  ngOnInit(): void {
    this.getData()
  }
  showConfirm(): void {
    this.modal.confirm({
      nzTitle: '<i>اغلاق الوردية؟</i>',
      nzContent: '<b>يستم اغلاق الوردية واضافة سجل اجمالي في نافذة الايرادات</b>',
      nzOnOk: () => console.log('OK'),
    });
  }

}
