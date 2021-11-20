import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiservicesService } from 'src/app/_services/apiservices.service';
@Component({
  selector: 'app-view-load-details',
  templateUrl: './view-load-details.component.html',
  styleUrls: ['./view-load-details.component.css']
})
export class ViewLoadDetailsComponent implements OnInit {
  dataReposne:any=[];
  constructor(private apiservicer: ApiservicesService,
    public dialogRef: MatDialogRef<ViewLoadDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) data: any) {
    console.log(data);
    this.dataReposne = data;
     }

  ngOnInit(): void {
    
  }

}
