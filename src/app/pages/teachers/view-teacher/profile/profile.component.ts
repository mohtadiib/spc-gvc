import {Component, Input } from '@angular/core';
import {User} from "../../teacher";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent{
  loading = true;
  @Input() user!:User

}
