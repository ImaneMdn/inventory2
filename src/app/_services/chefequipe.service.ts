import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChefequipeService {
  PATH_OF_API = "/inventory/src/app/home/home.component.html"

  constructor(private httpclient: HttpClient) { }
   // here we start the authentication of role based 
   //login function will take loginData user and password 
  public login(loginData:any) {
    //in post we will have to post the url to the api 
    //from post mapping we will get the endpoints
    return this.httpclient.post(this.PATH_OF_API  , loginData, );//here it compares if the data provided and the one in the backend are the same 
    //jwt requestfilter to use security and jwt we will find request.getHeader
    //so for each request it will try to find the authorizaition header
    //to access /authenticate
  }
}
