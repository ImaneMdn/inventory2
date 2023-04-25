import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http:HttpClient) { }

  login(matricule:string, password:string) {
   return this.http.post('http://localhost:8000/api/login', {
      matricule:matricule,
      password:password
    });
  }

  //user info

  user() {
    const user:any = localStorage.getItem('user');
    const userObj = JSON.parse(user);

    const token = userObj.token;
    const headers = new HttpHeaders({
      Authorization: `Bearer $(token)`,
    });
    return this.http.get('http://localhost:8000/api/user',{headers:headers});
  }


admin() {
    const admin:any = localStorage.getItem('admin');
    const userObj = JSON.parse(admin);

    const token = userObj.token;
    const headers = new HttpHeaders({
      Authorization: `Bearer $(token)`,
    });
    return this.http.get('http://localhost:8000/api/admin',{headers:headers});
  }

  
  logout(){
    const user:any = localStorage.getItem('user');
    const userObj = JSON.parse(user);

    const token = userObj.token;
    const headers = new HttpHeaders({
      Authorization: `Bearer $(token)`,
    });

     return this.http.post('http://localhost:8000/api/logout', {headers:headers})

  }


  //register 
  register(name:string, email:string, matricule:number, password:string, role:string,structure_type:string, structure_id:number) {
      
      const data={
        name:name,
        email:email,
        matricule:matricule,
        password:password,
        role:role,
        structure_type:structure_type,
        structure_id:structure_id,

      }
      return this.http.post('http://192.168.43.251:8000/api/register', data);
  }
}
