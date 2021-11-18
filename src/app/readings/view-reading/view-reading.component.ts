import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiservicesService } from 'src/app/_services/apiservices.service';
import { jsPDF } from 'jspdf';

@Component({
  selector: 'app-view-reading',
  templateUrl: './view-reading.component.html',
  styleUrls: ['./view-reading.component.css']
})
export class ViewReadingComponent implements OnInit {
  @ViewChild('pdfTable', { static: false }) pdfTable: ElementRef;

  responsedata: any = [];
  petrolType91: any = [];
  petrolType95: any = [];
  load91:any;
  load95:any;
  resposenarrayload:any=[];
  resposenarrayload2:any=[];
  openingstockfor91:any;
  openingstockfor95:any;
  salesstock91:any;
  salesstock95:any;
  constructor(private apiservicer:ApiservicesService,
    public dialogRef: MatDialogRef<ViewReadingComponent>,
    @Inject(MAT_DIALOG_DATA) data: any) {
    console.log(data);
    this.responsedata = data;
    this.salesstock91 = this.responsedata['petrolType91'].salesQuantity;
    this.salesstock95 = this.responsedata['petrolType95'].salesQuantity;
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
    // let req = {
    //   "date":this.responsedata.date,
    //   "shiftType":this.responsedata.shiftType
    // }
    // this.apiservicer.doPostRequest('petrolBoy/stocks/viewPreviousShiftSales',req).subscribe(
    //   data =>{
    //     console.log(data);
        
    //   },
    //   error =>{

    //   }
    // )
    this.loaddata();
  }
  loaddata()
  {

    // get load for 91
    let req = {
        "dateAndTime":this.responsedata.date,
        "petrolType":91
    }
    this.apiservicer.doPostRequest('petrolBoy/load/viewByDate',req).subscribe(
      data =>{
        console.log(data);
        this.resposenarrayload = data;
        this.load91 = this.resposenarrayload['response'].quantity;
      },
      error =>{

      }
    )
     // get load for 95
     let req2 = {
      "dateAndTime":this.responsedata.date,
      "petrolType":95
  }
  this.apiservicer.doPostRequest('petrolBoy/load/viewByDate',req2).subscribe(
    data =>{
      console.log(data);
      this.resposenarrayload2 = data;
      this.load95 = this.resposenarrayload['response'].quantity;
    },
    error =>{

    }
  )
  }
  download() {
    console.log("s");

    let currentDate = this.responsedata.date;
    // const doc = new jsPDF('p', 'mm', [210, 200]);
    const doc = new jsPDF('p', 'mm', 'a4');

    const pdfTable = this.pdfTable.nativeElement;
    // doc.addPage();
    // doc.text(20, 20, 'Do you like that?');

    doc.html(pdfTable, {
    
      callback: function (doc) {
      
        doc.save('Salesreport-' + currentDate + '.pdf');
      },
      margin: [20, 20,20,20],
      html2canvas: { scale: .17 },

    });
    

  }
}
