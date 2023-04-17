import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
 
errors:any;
  //here we will inject the service chef unite chef equipe chef equipe
  constructor(private router: Router,private auth:AuthenticationService
             /*private chefunite: ChefuniteService, 
              private userAuthService:UniteAuthService,*/
              
              ) {}


  ngOnInit(): void {
      
  }
  selectedStructure: string = '';
  onSelectStructure(event:Event){
  const target = event.target as HTMLSelectElement;
  this.selectedStructure = target.value;
  }


  
/*the old one 

signup(signupForm:NgForm){
  
    // TODO: Send login request to server and check for success
    const loginSuccess = true;
    
    if (loginSuccess) {
      // Navigate to the home page only if login is successful
      this.router.navigate(['home']);
    }
  } 

*/ 

onSubmit(form:NgForm){
  
  const name = form.value.name;
  const matricule = form.value.matricule;
  const password = form.value.password;
  const email = form.value.email;
  const structure_id = form.value.structure_id;
  const role = form.value.role;
  const structure_type = form.value.structure_type;
 
  this.auth.register(name,email,matricule,password,role,structure_type,structure_id).subscribe((res)=>{
    this.router.navigate(['login'])
  },
  (err)=>{
    this.errors =err.error.errors
    
  }
  )
  
  
    
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

}

