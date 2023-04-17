import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit{
  constructor(private auth:AuthenticationService){
    
  }
  user:any;
  ngOnInit(): void {
     
      this.auth.user().subscribe((res)=>{
        this.user = res;
      }, (err) =>{
        console.log(err);
      })
  }

}
