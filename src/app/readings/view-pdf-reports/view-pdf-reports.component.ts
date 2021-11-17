import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { jsPDF } from 'jspdf';

@Component({
  selector: 'app-view-pdf-reports',
  templateUrl: './view-pdf-reports.component.html',
  styleUrls: ['./view-pdf-reports.component.css']
})
export class ViewPdfReportsComponent implements OnInit {
  @ViewChild('pdfTable', { static: false })pdfTable: ElementRef;
 
  responsedata: any = [];
  petrolType91: any = [];
  petrolType95: any = [];

  constructor() { }

  ngOnInit(): void {
    // console.log(data);

    this.responsedata = JSON.parse(sessionStorage.getItem("pdfdata")|| '{}');
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
  download()
  {
    console.log("s");
    let date = new Date();
    // console.log(date.getDate());
    // console.log(date.getMonth());
    // console.log(date.getFullYear());
    let currentDate = this.responsedata.date;
    console.log(currentDate);
    
    
    const doc = new jsPDF();

    const pdfTable = this.pdfTable.nativeElement;

    doc.html(pdfTable, {
      callback: function (doc) {
        doc.save('Salesreport-'+currentDate+'.pdf');
      },
      margin: [0,0, 0,0],
      html2canvas: { scale: .15 },
    });

  }

}
