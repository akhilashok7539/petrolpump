import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ApiservicesService } from '../_services/apiservices.service';
import { UpdateLoadquantityComponent } from './update-loadquantity/update-loadquantity.component';

@Component({
  selector: 'app-loadquantiy',
  templateUrl: './loadquantiy.component.html',
  styleUrls: ['./loadquantiy.component.css']
})
export class LoadquantiyComponent implements OnInit {
  dataSource:any = [];
  
  arryakeyvalue:any = [];
  constructor(private apiservice:ApiservicesService,private router:Router,private dialog:MatDialog) { }

  ngOnInit(): void {
    this.apiservice.doGetRequest("petrolBoy/load/quantity").subscribe(
      data =>{
        console.log(data.response);
        this.dataSource = data.response;
        this.dataSource.map((x: any) =>{
          console.log(x);
          
          // x.active = true;
          // Object.keys(x.quantities).forEach(key=> {
          //   console.log('keys', x.quantities[key]);   
          //   this.arryakeyvalue.push(x.quantities[key]) 
          //   x.quantitieslist= this.arryakeyvalue
          // });
          for (let obj of x.quantities) {
            // console.log("object:", obj);
            for (let key in obj) {
                // console.log("key:", key, "value:", obj[key]);  
                this.arryakeyvalue.push(obj[key])
            }
        }
        x.quantitieslist= this.arryakeyvalue
        this.arryakeyvalue = [];
        })
        console.log(this.dataSource);
       
        
        
      },
      error =>{

      }
    )
  }
  getdata(arr:any)
  {
    for (let obj of arr) {
      console.log("object:", obj);
      for (let key in obj) {
          console.log("key:", key, "value:", obj[key]);
          
      }
  }
  }
  
  delete(s:any)
  {
    console.log(s);
    
    this.apiservice.dodeleteRequest("admin/quantity/delete/"+s._id).subscribe(
      data =>{
        this.ngOnInit();
      },
      error =>{

      }
    )
  }
  
  openDialog(row:any): void {
    const dialogRef = this.dialog.open(UpdateLoadquantityComponent, {
      width: '550px',
      data: row,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    
    });
  }
}
