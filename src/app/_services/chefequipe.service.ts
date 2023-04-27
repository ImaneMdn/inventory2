import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChefequipeService {
  PATH_OF_API = "/inventory/src/app/home/home.component.html"

  constructor(private httpclient: HttpClient) { }
   
}
