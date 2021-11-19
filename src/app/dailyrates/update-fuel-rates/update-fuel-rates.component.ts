import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiservicesService } from 'src/app/_services/apiservices.service';

@Component({
  selector: 'app-update-fuel-rates',
  templateUrl: './update-fuel-rates.component.html',
  styleUrls: ['./update-fuel-rates.component.css']
})
export class UpdateFuelRatesComponent implements OnInit {

  addfuelrate:FormGroup;
  responsedata:any;
  constructor(private fb:FormBuilder,private apiservice:ApiservicesService,private router:Router,
    private toaster:ToastrService
    ) { 
    this.addfuelrate = this.fb.group({
      id:[''],
      rate:['',Validators.required],
    

    })  
  }
  get f()
  {
  return this.addfuelrate.controls;
  }
  ngOnInit(): void {
    this.responsedata = JSON.parse(sessionStorage.getItem("datilyrate")|| '{}');
    console.log(this.responsedata);
    
    this.addfuelrate.controls['rate'].setValue(this.responsedata['rate'])
    this.addfuelrate.controls['id'].setValue(this.responsedata['_id'])

  }
  submit()
  {

    this.apiservice.doPutRequest("admin/fuelRate/update",this.addfuelrate.value).subscribe(
      data =>{
        this.router.navigate(['/dailyrates'])
        this.toaster.success("Fuel Rate updated successfully")
        
      },
      error =>{
        this.toaster.success("Fuel Rate update successfully")

      }
    )
  }
}