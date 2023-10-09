import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {GlobalVariable} from "../common/consts";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private tokenKey = 'token';
  isAdmin:boolean = false
  constructor(
    private http:HttpClient,
    // private authenticationClient: AuthenticationClient,
    private router: Router
  ) {}
  getAuthStatus(){
    return this.isLoggedIn()
  }
  //
  public login(body:any) {
    return  this.http.post<any[]>(GlobalVariable.BASE_API_URL+"auth/",body);
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
  public setToken(userId:string) {
    return localStorage.setItem(this.tokenKey,userId);
  }
}
