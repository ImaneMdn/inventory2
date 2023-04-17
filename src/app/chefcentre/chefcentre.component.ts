import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table'
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { MatPaginatorIntl } from '@angular/material/paginator';
@Component({
  selector: 'app-chefcentre',
  templateUrl: './chefcentre.component.html',
  styleUrls: ['./chefcentre.component.css']
})
export class ChefcentreComponent  implements OnInit {
 
  displayedColumns: string[] = ['id', 'firstname', 'lastname', 'here','now','there','mdp' , 'email' , 'text'];

  dataSource = new MatTableDataSource([
    { id: 1, firstname: 'John', lastname: 'Doe', here: true , now: 'dd' , there: false , mdp: true , email: 'skdfs' , text: 'ldfsjk'},
    { id: 2, firstname: 'Jane', lastname: 'Doe', here: false , now: 'dd' , there: true , mdp: true , email: 'skdfs' , text: 'ldfsjk' },
    { id: 3, firstname: 'Bob', lastname: 'Smith', here: true , now: 'dd' , there: false , mdp: true , email: 'skdfs' , text: 'ldfsjk' },
    { id: 1, firstname: 'John', lastname: 'Doe', here: true , now: 'dd' , there: false , mdp: true , email: 'skdfs' , text: 'ldfsjk'},
    { id: 2, firstname: 'Jane', lastname: 'Doe', here: false , now: 'dd' , there: true , mdp: true , email: 'skdfs' , text: 'ldfsjk' },
    { id: 3, firstname: 'Bob', lastname: 'Smith', here: true , now: 'dd' , there: false , mdp: true , email: 'skdfs' , text: 'ldfsjk' },
    { id: 1, firstname: 'John', lastname: 'Doe', here: true , now: 'dd' , there: false , mdp: true , email: 'skdfs' , text: 'ldfsjk'},
    { id: 2, firstname: 'Jane', lastname: 'Doe', here: false , now: 'dd' , there: true , mdp: true , email: 'skdfs' , text: 'ldfsjk' },
    { id: 3, firstname: 'Bob', lastname: 'Smith', here: true , now: 'dd' , there: false , mdp: true , email: 'skdfs' , text: 'ldfsjk' },
    
   
  ]);
 
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private paginatorIntl: MatPaginatorIntl) {
    
  }

  ngAfterViewInit() {
     this.dataSource.paginator = this.paginator;
     this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    this.paginatorIntl.itemsPerPageLabel = 'Le nombre de page:';
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


 
}
  


