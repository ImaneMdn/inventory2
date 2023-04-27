import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table'
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { MatSelectChange } from '@angular/material/select';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
   
  showIcons = false;
  clicked = false;
  showacceptedFormPopup = false;
  showrefusedFormPopup = false;
  selectedRow: any;
  filterOn: boolean = false;
  userlist:any;
  
  displayedColumns: string[] = ['id', 'name', 'matricule','email','role', 'structure_id', 'status', 'Compte_isActivated', 'edited_by', 'icon'];
  
  
  dataSource = new MatTableDataSource([
    { id: 1, firstname: 'John', matricule: '1234',email: 'djd@gmail.com',role: 'chef centre',structure_id: '1234', status: "pending",Compte_isActivated: 0, edited_by: "imane" },
    { id: 2, firstname: 'Jane', matricule: '1234',email: 'chefunite' ,role: 'chef equipe',structure_id: '5687', status: "pending" ,Compte_isActivated: 1, edited_by: "amina" },
    { id: 3, firstname: 'Bob', matricule: '5687',email: 'ddd@gmail.com' ,role: 'chef equipe',structure_id: '5687', status: "pending" ,Compte_isActivated: "0", edited_by: "amina" },
    { id: 4, firstname: 'John', matricule: '1234',email: 'ds@gmail.com' ,role: 'chef equipe',structure_id: '5687', status:"pending" ,Compte_isActivated: "1", edited_by: "amina" },
    { id: 5, firstname: 'Jane', matricule: '1234',email: 'ddd@gmail.com',role: 'chef equipe' ,structure_id: '5687', status: "refused" ,Compte_isActivated: "1", edited_by: "amina" },
    { id: 6, firstname: 'Bob', matricule: '5687',email: 'ddd@gmail.com' ,role: 'chef unité',structure_id: '5687', status: "accepted" ,Compte_isActivated: "0", edited_by: "amina" },
    { id: 7, firstname: 'John', matricule: '1234',email: 'ds@gmail.com' ,role: 'chef unité',structure_id: '5687', status: "accepted" ,Compte_isActivated: "0", edited_by: "amina"},
    { id: 8, firstname: 'Jane', matricule: '1234',email: 'ddd@gmail.com' ,role: 'chef unité',structure_id: '5687', status: "accepted" ,Compte_isActivated: "1", edited_by: "amina"},
    { id: 9, firstname: 'Bob', matricule: '5687',email: 'ddd@gmail.com' ,role: 'chef unité',structure_id: '5687', status: "accepted" ,Compte_isActivated: "1", edited_by: "amina"},
    
   
  ]);
  
  

  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private paginatorIntl: MatPaginatorIntl, private router: Router, private auth:AuthenticationService) {
    
  }


  ngAfterViewInit() {
    
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    
    
 }

 ngOnInit(): void {
 
 this.paginatorIntl.itemsPerPageLabel = 'Le nombre de page:';
  
 
 }


 
showIconsFor(row: any) {

  this.selectedRow = row; // Set the selected row
  
  
  
}

handleAccepted(user: any) {
  const id = user.id;
  this.showacceptedFormPopup = false;
   
}


handleRefused(user: any) {
  const id = user.id;
  this.showacceptedFormPopup = false;
}

showacceptedForm(row: any) {
  this.showacceptedFormPopup = true;
  this.selectedRow = row;
  
}
showrefusedForm(row: any){
  this.showrefusedFormPopup = true;
  this.selectedRow = row;
}

hideacceptedForm() {
  this.showacceptedFormPopup = false;
}

hiderefusedForm() {
  this.showrefusedFormPopup = false;
}



 
}
  

