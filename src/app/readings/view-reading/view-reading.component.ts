import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-view-reading',
  templateUrl: './view-reading.component.html',
  styleUrls: ['./view-reading.component.css']
})
export class ViewReadingComponent implements OnInit {
  responsedata: any = [];
  petrolType91: any = [];
  petrolType95: any = [];

  constructor(
    public dialogRef: MatDialogRef<ViewReadingComponent>,
    @Inject(MAT_DIALOG_DATA) data: any) {
    console.log(data);
    this.responsedata = data;
    for (let obj of this.responsedata.petrolType91.stockDetails) {
      // console.log("object:", obj);
      for (let key in obj) {
        // console.log("key:", key, "value:", obj[key]);  
        if (key != "_id") {
          this.petrolType91.push(obj[key])

        }
      }
    }
    for (let obj of this.responsedata.petrolType95.stockDetails) {
      // console.log("object:", obj);
      for (let key in obj) {
        // console.log("key:", key, "value:", obj[key]);  
        if (key != "_id") {
          this.petrolType95.push(obj[key])

        }
      }
    }

  }

  ngOnInit(): void {
  }

}
