import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ApiservicesService } from '../_services/apiservices.service';
import { ViewLoadDetailsComponent } from './view-load-details/view-load-details.component';

@Component({
  selector: 'app-view-added-load',
  templateUrl: './view-added-load.component.html',
  styleUrls: ['./view-added-load.component.css']
})
export class ViewAddedLoadComponent implements OnInit {
  dataSource :any= [];
  displayedColumns = ['id', 'categoryname','mobileNumber','createdAt','model','status','pdf'];
  constructor(private router:Router,private apiservice:ApiservicesService,public dialog: MatDialog) { }

  ngOnInit(): void {

    this.apiservice.doGetRequest("/admin/load/getAll").subscribe(
      data =>{
        console.log(data);
        this.dataSource = data['response']
      },
      error =>{
        console.log(error);

      }
    )
  }
  updated(row:any)
  {
    sessionStorage.setItem("loaddetails",JSON.stringify(row))
    this.router.navigate(['/updated-load'])
  }
  openDialog(row:any): void {
    const dialogRef = this.dialog.open(ViewLoadDetailsComponent, {
      width: '950px',
      height:'400px',
      data: row,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    
    });
  }
  viewpdf(row:any)
  {
    window.open("https://petrol-pump-server.herokuapp.com/"+row.loadPdfUrl,"_blank")
  }
}
