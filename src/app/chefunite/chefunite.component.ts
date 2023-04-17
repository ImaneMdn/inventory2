import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table'
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { MatSelectChange } from '@angular/material/select';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-chefunite',
  templateUrl: './chefunite.component.html',
  styleUrls: ['./chefunite.component.css']
})
export class ChefuniteComponent  implements OnInit {
 
  displayedColumns: string[] = ['id', 'firstname', 'lastname', 'here','scanned','there','mdp' , 'email' , 'text', 'action'];

  dataSource = new MatTableDataSource([
    { id: 1, firstname: 'John', lastname: 'Doe', here: true , scanned: 'true' , there: false , mdp: true , email: 'skdfs' , text: 'ldfsjk'},
    { id: 2, firstname: 'Jane', lastname: 'Doe', here: false , scanned: 'false' , there: true , mdp: true , email: 'skdfs' , text: 'ldfsjk' },
    { id: 3, firstname: 'Bob', lastname: 'Smith', here: true , scanned: 'false' , there: false , mdp: true , email: 'skdfs' , text: 'ldfsjk' },
    { id: 1, firstname: 'John', lastname: 'Doe', here: true , scanned: 'true' , there: false , mdp: true , email: 'skdfs' , text: 'ldfsjk'},
    { id: 2, firstname: 'Jane', lastname: 'Doe', here: false , scanned: 'true' , there: true , mdp: true , email: 'skdfs' , text: 'ldfsjk' },
    { id: 3, firstname: 'Bob', lastname: 'Smith', here: true , scanned: 'false' , there: false , mdp: true , email: 'skdfs' , text: 'ldfsjk' },
    { id: 1, firstname: 'John', lastname: 'Doe', here: true , scanned: 'false' , there: false , mdp: true , email: 'skdfs' , text: 'ldfsjk'},
    { id: 2, firstname: 'Jane', lastname: 'Doe', here: false , scanned: 'true' , there: true , mdp: true , email: 'skdfs' , text: 'ldfsjk' },
    { id: 3, firstname: 'Bob', lastname: 'Smith', here: true , scanned: 'false' , there: false , mdp: true , email: 'skdfs' , text: 'ldfsjk' },
    
   
  ]);
//this is for filtering scanned and not scanned
  selectedFilterValue = 'all';
  filterOn: boolean = false;
  form = new FormGroup({
    id: new FormControl(''),
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    here: new FormControl(''),
    scanned: new FormControl(''),
    there: new FormControl(''),
    mdp: new FormControl(''),
    email: new FormControl(''),
    text: new FormControl(''),
    
    filterOn: new FormControl(false),
  })
 
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private paginatorIntl: MatPaginatorIntl) {
    
  }

  ngAfterViewInit() {
     this.dataSource.paginator = this.paginator;
     this.dataSource.sort = this.sort;
     this.dataSource.filterPredicate = this.customFilter;
     this.form.valueChanges.subscribe((res: any) => {
      res.firstname = res.name.toUpperCase();
      res.lastname = res.symbol.toUpperCase();
      res.here = res.symbol.toUpperCase();
      res.scanned = res.symbol.toUpperCase();
      res.there = res.symbol.toUpperCase();
      res.mdp = res.symbol.toUpperCase();
      res.email = res.symbol.toUpperCase();
      res.text = res.symbol.toUpperCase();
      this.dataSource.filter = JSON.stringify(res);
    });
    this.paginatorIntl.itemsPerPageLabel = 'Le nombre de page:';
    
  }
  ngOnInit(): void {
   
  }

  filterToggle() {
    this.filterOn = !this.filterOn;
    this.form.controls.filterOn.setValue(this.filterOn);

  }
  customFilter  = (data:any , filter: string) => {
    const filterData = JSON.parse(filter);
    let ok: boolean = true;
    if (!filterData.filterOn) return true;
    if (filterData.id) ok = data.id == filterData.id;
    if (filterData.firstname)
      ok = ok && data.firstname.toUpperCase().indexOf(filterData.firstname) >= 0;
    
    if (filterData.lastname)
      ok = ok && data.lastname.toUpperCase().indexOf(filterData.lastname) >= 0;
    if (filterData.here)
      ok = ok && data.here.toUpperCase().indexOf(filterData.here) >= 0;
    if (filterData.scanned)
      ok = ok && data.scanned.toUpperCase().indexOf(filterData.scanned) >= 0;
      if (filterData.there)
      ok = ok && data.there.toUpperCase().indexOf(filterData.there) >= 0;
      if (filterData.mdp)
      ok = ok && data.mdp.toUpperCase().indexOf(filterData.mdp) >= 0;
      if (filterData.email)
      ok = ok && data.email.toUpperCase().indexOf(filterData.email) >= 0;  
      if (filterData.text)
      ok = ok && data.text.toUpperCase().indexOf(filterData.text) >= 0;
    return ok;
  };

 

  

  
  applyFilter(event?: Event | MatSelectChange) {
    if(event instanceof MatSelectChange) {
      const filterValue = event.value;
      this.dataSource.filter = filterValue.trim().toLowerCase();

      this.dataSource.filterPredicate = (data, filter) => {
        const scannedValue = data.scanned.toLowerCase();
        return filter === 'all' ? true : scannedValue === filter;
        
      }
    }else if (event instanceof Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    }
    
     if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
    
  }

  
 
}
  

