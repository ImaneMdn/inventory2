import { HomeComponent } from './../home/home.component';
import { ChefequipeService } from './../_services/chefequipe.service';
import { UniteAuthService } from './../_services/unite-auth.service';
import { ChefuniteService } from './../_services/chefunite.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import { AuthenticationService } from '../services/authentication.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  implements OnInit {
  //here we will inject the service chef unite chef equipe chef equipe
  constructor(private router: Router, private auth:AuthenticationService
             /*private chefunite: ChefuniteService, 
              private userAuthService:UniteAuthService,*/
              
              ) {}
  ngOnInit(): void {
      
  }
  
  
  onSubmit(form:NgForm){
  
    // TODO: Send login request to server and check for success
    const matricule = form.value.matricule;
    const password = form.value.password;
    this.auth.login(matricule, password).subscribe((res:any)=>{
      localStorage.setItem('user', JSON.stringify(res))
      //redirect to dashboard

      this.router.navigate(['home'])
    },
    err=>{
      console.log(err);
    })
    
    
    
  }














  /*the first one 
  
  login(form:NgForm){
  
    // TODO: Send login request to server and check for success
    const loginSuccess = true;
    
    if (loginSuccess) {
      // Navigate to the home page only if login is successful
      this.router.navigate(['home']);
    }
    
  
  */ 

  
  
    
    //we pass in the login data which is in the loginform
   /*this.chefequipe.login(loginForm.value).subscribe(
    (response:any) => {
      //we have to set jwt and user data in the local storage so we inject the new service unite_auth
      //re-check the .user i didnt write that one
      //well its because in the backend all users are named user and are assigned to roles
      //check wps angular naftal
     this.userAuthService.setRoles(response.user.role)
      this.userAuthService.setToken(response.jwtToken)

      //after log in we have to redirect either the user or the admin to their particular dashboard so 
      //to access the roles 
      const role = response.user.role[0].roleName
      ///the name of the role depends on the role_id in backend if its capitale lettter than we write Chefunite
      if(role === 'chefunite'){
        // we will direct him to the chefunite dashboard we need to inject the router
        //we will need to find the path in app-routing-module.ts
        this.router.navigate(['/chefunite']);

      }else if(role === 'chefcentre') {
        this.router.navigate(['/chefcentre']);
      }else {
        this.router.navigate(['/chefequipe']);

      }
    },
    (error) => {
      console.log(error);
    }
   );*/
    
  }


