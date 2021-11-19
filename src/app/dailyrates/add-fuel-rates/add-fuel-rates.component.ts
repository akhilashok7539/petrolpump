import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiservicesService } from 'src/app/_services/apiservices.service';
@Component({
  selector: 'app-add-fuel-rates',
  templateUrl: './add-fuel-rates.component.html',
  styleUrls: ['./add-fuel-rates.component.css']
})
export class AddFuelRatesComponent implements OnInit {
  addfuelrate:FormGroup
  constructor(private fb:FormBuilder,private apiservice:ApiservicesService,private router:Router,
    private toaster:ToastrService) { 
    this.addfuelrate = this.fb.group({
      fuelType:['',Validators.required],
      rate:['',Validators.required],
    

    })  
  }
  get f()
  {
  return this.addfuelrate.controls;
  }
  ngOnInit(): void {
  }
  submit()
  {
    this.apiservice.doPostRequest("admin/fuelRate/add",this.addfuelrate.value).subscribe(
      data =>{
        this.router.navigate(['/dailyrates'])
        this.toaster.success("Fuel Rate added successfully")
      },
      error =>{
        this.toaster.success("unable to added Fuel Rate")
      }
    )
  }
}

