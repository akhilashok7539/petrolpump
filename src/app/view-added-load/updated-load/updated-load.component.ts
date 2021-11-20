import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiservicesService } from 'src/app/_services/apiservices.service';

@Component({
  selector: 'app-updated-load',
  templateUrl: './updated-load.component.html',
  styleUrls: ['./updated-load.component.css']
})
export class UpdatedLoadComponent implements OnInit {
  loaddetailsresponse: any = [];
  submitted = false;
  loadform: FormGroup;
  today:any;
  constructor(private fb: FormBuilder, private router: Router,private apiservice:ApiservicesService,
     private toaster: ToastrService) { }

  ngOnInit(): void {
    this.loaddetailsresponse = JSON.parse(sessionStorage.getItem("loaddetails") || '{}')
    this.loadform = this.fb.group({
      amount: [''],
      balance: [''],
      cptNumber: [''],
      dateAndTime: [],
      deliveryNotNumber: [''],
      driverDetails: [''],
      empResponsible: [''],
      // loadPdfUrl: [''],
      modelNumber: [''],
      petrolType: [''],
      quantity: [''],
      rate: [''],
      total: [''],
     
      vehicleDetails: [''],
    })
    
    
    // this.loadform = this.loaddetailsresponse;
    this.loadform.controls['amount'].setValue(this.loaddetailsresponse.amount);
    this.loadform.controls['balance'].setValue(this.loaddetailsresponse.balance);
    this.loadform.controls['cptNumber'].setValue(this.loaddetailsresponse.cptNumber);
    // this.loadform.controls['dateAndTime'].setValue(this.loaddetailsresponse.dateAndTime);
    this.loadform.controls['deliveryNotNumber'].setValue(this.loaddetailsresponse.deliveryNotNumber);
    this.loadform.controls['driverDetails'].setValue(this.loaddetailsresponse.driverDetails);
    this.loadform.controls['modelNumber'].setValue(this.loaddetailsresponse.modelNumber);
    this.loadform.controls['petrolType'].setValue(this.loaddetailsresponse.petrolType);
    this.loadform.controls['quantity'].setValue(this.loaddetailsresponse.quantity);
    this.loadform.controls['rate'].setValue(this.loaddetailsresponse.rate);
    this.loadform.controls['total'].setValue(this.loaddetailsresponse.total);
    this.loadform.controls['vehicleDetails'].setValue(this.loaddetailsresponse.vehicleDetails);
    this.loadform.controls['empResponsible'].setValue(this.loaddetailsresponse.empResponsible);

    let currentdates = this.loaddetailsresponse.createdAt.split('T')[0];
    console.log(currentdates);
    
    let currentdate = this.loaddetailsresponse.dateAndTime;
    console.log(currentdate.split('-'));
    this.today = currentdate.split('-')[0]+'-'+currentdate.split('-')[1]+'-'+currentdate.split('-')[2]
    console.log(this.today);
    // this.today =this.loaddetailsresponse.createdAt.split('T')[0]
    // console.log(this.today);

  }
  get f()
  {
  return this.loadform.controls;
  }
  submit()
  {
    // this.loadform.controls['dateAndTime'].setValue(changeddate);
    console.log(this.today);
    let dateformated = this.today.split('-')[2]+'-'+this.today.split('-')[1]+'-'+this.today.split('-')[0];
    console.log(dateformated);
    this.loadform.controls['dateAndTime'].setValue(dateformated);
    console.log(this.loadform.value);

    this.apiservice.doPutRequest("admin/load/update/"+this.loaddetailsresponse._id,this.loadform.value).subscribe(
      data =>{
        this.toaster.success("Load Details Updated Successfully")
        this.router.navigate(['/view-added-load'])
      },
      error =>{
        this.toaster.error("Unable to update Load Details Successfully")

      }
    )
  }
  selcteddate(s:any)
  {
    // console.log(s);
    let changeddate = s.split('-')[2]+'-'+s.split('-')[1]+'-'+s.split('-')[0];
    console.log(changeddate);
    // this.loadform.controls['dateAndTime'].setValue(changeddate);
    this.today = s;
    // console.log(this.today);
    
  }
}
