import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UniteAuthService {
  //we added this file so that user can communicate with the local storage
  //here we save the role and the token


  constructor() { }

 /* public setRoles(roles:[]) {
    localStorage.setItem("roles" , JSON.stringify(roles))
  }
  public getRoles(): [] {
   return JSON.parse(localStorage.getItem('roles') || '[]')
}
//the token we will receive we will store it in the local storage
public setToken(jwtToken:string) {
  localStorage.setItem('jwtToken' , jwtToken)
}
public getToken(): string {
  return localStorage.getItem('jwtToken') || '[]';

}
public clear() {
  localStorage.clear;
}
//if he is login return true else return false
//if roles and jwt are present than its true
public isLoggedIn() {
  return this.getRoles() && this.getToken();

}*/
}