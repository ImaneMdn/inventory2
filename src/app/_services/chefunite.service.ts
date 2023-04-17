import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
//there is no need in services to do all users we will only do one file named user
@Injectable({
  providedIn: 'root'
})
export class ChefuniteService {
  //to get the api we will have to write the variable path_of_api
  //this path is the path of all endpoints to not repeat it all over again
  PATH_OF_API = "http://localhost:9090";
  requestHeader = new HttpHeaders(
    //it means auth endpoint doesnt require authentication
    {"No-Auth":"True"}
  );

  constructor(private httpclient: HttpClient) { }
   // here we start the authentication of role based 
   //login function will take loginData user and password 
  public login(loginData:any) {
    //in post we will have to post the url to the api 
    //from post mapping we will get the endpoints
    return this.httpclient.post(this.PATH_OF_API + "/authenticate" , loginData, {headers: this.requestHeader});//here it compares if the data provided and the one in the backend are the same 
    //jwt requestfilter to use security and jwt we will find request.getHeader
    //so for each request it will try to find the authorizaition header
    //to access /authenticate
  }
}
