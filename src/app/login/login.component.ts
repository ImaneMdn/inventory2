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
  
  loginError: boolean = false;
  
  constructor(private router: Router, private auth:AuthenticationService
            
              ) {}
  ngOnInit(): void {
      
  }
  
  onSubmit(form: NgForm) {
    const matricule = form.value.matricule;
    const password = form.value.password;
    this.auth.login(matricule, password).subscribe((res: any) => {
      localStorage.setItem('user', JSON.stringify(res));
      this.router.navigate(['home']);
    }, err => {
      console.log(err);
      if (err.status === 401) {
        if (err.error === 'Incorrect Password') {
          this.loginError = true;
        } else if (err.error === 'Incorrect Matricule') {
          this.loginError = true;
        }
      }
    });
  }


    
  }


