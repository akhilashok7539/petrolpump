import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ApiservicesService } from '../_services/apiservices.service';
import { ViewReadingComponent } from './view-reading/view-reading.component';

@Component({
  selector: 'app-readings',
  templateUrl: './readings.component.html',
  styleUrls: ['./readings.component.css']
})
export class ReadingsComponent implements OnInit {
  dataSource = [];
  displayedColumns = ['id', 'shifttype','date','view'];

  constructor(private apiservice:ApiservicesService,private router:Router,public dialog: MatDialog) { }


  ngOnInit(): void {
    this.apiservice.doGetRequest("admin/stocks/getAll").subscribe(
      data =>{
        this.dataSource = data['response'];
        console.log(this.dataSource);
        
      },
      error =>{

      }
    )
  }
  getchangeevent(e:any)
  {
    console.log(e);
    
    console.log(e.target.value);
    if(e.target.value)
    {
      console.log(e.target.value.split("-"));
      const datares = e.target.value.split("-");
      let data = datares[2]+"-"+datares[1]+"-"+datares[0]
      this.apiservice.doGetRequest("admin/stocks/getByDate/"+data).subscribe(
        data =>{
          this.dataSource = data['response'];
          console.log(this.dataSource);
          
        },
        error =>{
  
        }
      )
    }
    else
    {
      this.ngOnInit();
    }

   
  }

  
  openDialog(row:any): void {
    const dialogRef = this.dialog.open(ViewReadingComponent, {
      width: '850px',
      height:'650px',
      data: row,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    
    });
  }
  openPdf(s:any)
  {
    sessionStorage.setItem("pdfdata",JSON.stringify(s));
    this.router.navigate(['/view-pdfreports'])
  }
}
