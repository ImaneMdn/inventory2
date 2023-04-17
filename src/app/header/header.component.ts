import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();
  constructor(private router: Router,private auth:AuthenticationService) {}
  ngOnInit(): void {
      
  }
  
  toggleSidebar() {
    this.toggleSidebarForMe.emit();
  }

  logout(){
    this.auth.logout().subscribe((res)=>{
       console.log(res);
       localStorage.removeItem('user');
       //redirect to login
       this.router.navigate(['login']);

    }, (err) => {
      console.log(err);
    })

  }
}
