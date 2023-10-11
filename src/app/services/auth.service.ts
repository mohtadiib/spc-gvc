import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {GlobalVariable} from "../common/consts";
import {HttpClient} from "@angular/common/http";
import DataSources from "../common/data_sources/data-sources";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private tokenKey = 'token';
  username = 'Admin';
  isAdmin:boolean = false
  sideBarList: any[] = [];
  constructor(
    private http:HttpClient,
    private router: Router
  ) {
    this.getSessionStatus()
  }
  getAuthStatus(){
    return this.isLoggedIn()
  }
  //
  public login(body:any) {
    return  this.http.post<any[]>(GlobalVariable.BASE_API_URL+"auth/",body);
  }
  public getSessionStatus() {
    const body = {sessionId:this.getToken()}
    // console.log(JSON.stringify(body))
    return  this.http.post<any[]>(GlobalVariable.BASE_API_URL+"auth/sessions/",body)
      .subscribe((value:any) => {
        // console.log(value)
        if (value.running){
          this.sidePushing(value.session)
        }else{
          this.logout()
        }
    });
  }

  public logout() {
    localStorage.removeItem(this.tokenKey);
    this.router.navigate(['/login']);
  }

  public isLoggedIn(): boolean {
    let token = localStorage.getItem(this.tokenKey);
    return token != null && token.length > 0;
  }

  public getToken(): string | null {
    return this.isLoggedIn() ? localStorage.getItem(this.tokenKey) : null;
  }
  public setToken(session:any) {
      return localStorage.setItem(this.tokenKey,session.sessionId);
  }

  sidePushing(session:any){
    this.isAdmin = session.isAdmin
    this.username = session.name
    this.sideBarList = []
    if (session.isAdmin){
      this.sideBarList =  new DataSources().pagesDataTable
    }else {
      new DataSources().pagesDataTable.forEach(value => {
        if (!value.isAdmin){
          this.sideBarList.push(value)
        }
      })
    }
  }
}



// setCookie(name:string,value:string,exp_days:number) {
//   let d = new Date();
//   d.setTime(d.getTime() + (exp_days*24*60*60*1000));
//   let expires = "expires=" + d;
//   document.cookie = name + "=" + value + ";" + expires + ";path=/";
// }
// getCookie(name:string) {
//   var cname = name + "=";
//   var decodedCookie = decodeURIComponent(document.cookie);
//   var ca = decodedCookie.split(';');
//   for(var i = 0; i < ca.length; i++){
//     var c = ca[i];
//     while(c.charAt(0) == ' '){
//       c = c.substring(1);
//     }
//     if(c.indexOf(cname) == 0){
//       return c.substring(cname.length, c.length);
//     }
//   }
//   return "";
// }
