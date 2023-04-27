import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

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
 
    const userlist:any = localStorage.getItem('userlist');
    const userObj = JSON.parse(userlist);

    // const token = userObj.token;
    // const headers = new HttpHeaders({
    //   Authorization: `Bearer $(token)`,
    // });,{headers:headers}
    return this.http.get('http://localhost:8000/api/getDemandes');
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
  register(name:string, email:string, matricule:number, password:string, role:string,structure_type:string, structure_id:string) {
      
      const data={
        name:name,
        email:email,
        matricule:matricule,
        password:password,
        role:role,
        structure_type:structure_type,
        structure_id:structure_id,

      }
      return this.http.post('http://localhost:8000/api/register', data);
  }


  //accepter refuser la demande de compte:

  modifyStatus(id: number) {
    return this.http.put(`http://localhost:8000/api/acceptDemandeCompte/${id}`, {} );
  }

  centre() {
 
    const centredata:any = localStorage.getItem('centredata');
    const userObj = JSON.parse(centredata);

    // const token = userObj.token;
    // const headers = new HttpHeaders({
    //   Authorization: `Bearer $(token)`,
    // });,{headers:headers}
    return this.http.get('http://localhost:8000/api/getCentersInventoryCountts');
  }
  
}
