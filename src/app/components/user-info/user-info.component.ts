import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../pages/teachers/teacher";

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit{
  @Input() user!:User

  divValue:string = ''

  ngOnInit(): void {
    this.divValue = '<div>'+this.user!.name!+'</div>'
  }

  getValue(value:any){
    return value?value:'لم يحدد'
  }



}
