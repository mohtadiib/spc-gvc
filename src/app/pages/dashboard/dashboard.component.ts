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
    dashboard:[
      {table:"carstypes"},
    ]
  }
  totals:any = {
    carstypes: [],
  }
  reportPage:boolean = this.router.url === '/report/8'
  constructor(private dataService:TableDataService,
              private modal: NzModalService,
              public authService:AuthService,
              private router: Router) {}
  getData(){
    this.dataService.getData(this.body).subscribe((value:any) => {
      // console.log(value.session)
      this.totals = value
    })
  }
  getRole = (value:string) => value === '1'
  // reportPage = () => this.router.url == '/report/8'
  ngOnInit(): void {
    this.getData()
  }

}
