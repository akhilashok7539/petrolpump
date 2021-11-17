import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { jsPDF } from 'jspdf';
import { ApiservicesService } from 'src/app/_services/apiservices.service';
import * as html2canvas from 'html2canvas';
@Component({
  selector: 'app-view-pdf-reports',
  templateUrl: './view-pdf-reports.component.html',
  styleUrls: ['./view-pdf-reports.component.css']
})
export class ViewPdfReportsComponent implements OnInit {
  @ViewChild('pdfTable', { static: false }) pdfTable: ElementRef;

  responsedata: any = [];
  petrolType91: any = [];
  petrolType95: any = [];
  dataSource = [];
  img1: any;
  img2: any;
  img3: any;
  constructor(private apiservice: ApiservicesService) { }

  ngOnInit(): void {
    // console.log(data);

    this.responsedata = JSON.parse(sessionStorage.getItem("pdfdata") || '{}');
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

    this.apiservice.doGetRequest("admin/stocks/getByDate/" + this.responsedata.date).subscribe(
      data => {
        this.dataSource = data['response'];
        console.log(this.dataSource);

      },
      error => {

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
      margin: [0, 0, 0, 0],
      html2canvas: { scale: .15 },

    });
    

  }



}
