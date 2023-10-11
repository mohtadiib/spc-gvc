import {Component, OnChanges, OnInit} from '@angular/core';
import DataSources from "./common/data_sources/data-sources";
import {Router} from "@angular/router";
import {AuthService} from "./services/auth.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  constructor(private router: Router,public authService:AuthService) {
    // console.log(this.router.url)
  }

  isCollapsed = false;
  title!: "SPC VC";
  getRoute = () => this.router.url
  logged = () => this.router.url == '/login'
  checkRoute(){
    // console.log(this.router.url)
    switch (this.router.url) {
      case "/pos/3":
        this.isCollapsed = true;
        break;
      default:
        this.isCollapsed = false;
        break;
    }
  }

  ngOnInit(): void {
  }
}
