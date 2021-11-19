import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ApiservicesService } from 'src/app/_services/apiservices.service';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  dataresponse:any=[];

  accountantForm:FormGroup;
  submitted = false;
  constructor(private fb:FormBuilder,private apiservice:ApiservicesService,private router:Router, 
    private toaster:ToastrService,
     private spinner: NgxSpinnerService) { 
    this.accountantForm = this.fb.group({
      userId:['',Validators.required],
      role:['2',Validators.required],
      password:[''],
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      mobileNumber:['',Validators.required],

    })  
  }
  get f()
  {
  return this.accountantForm.controls;
  }
  ngOnInit(): void {
    this.dataresponse= JSON.parse(sessionStorage.getItem("Accountant") || '{}')
    this.accountantForm.controls['userId'].setValue(this.dataresponse.userId);
    this.accountantForm.controls['role'].setValue(this.dataresponse.role);
    this.accountantForm.controls['firstName'].setValue(this.dataresponse.firstName);
    this.accountantForm.controls['lastName'].setValue(this.dataresponse.lastName);
    this.accountantForm.controls['mobileNumber'].setValue(this.dataresponse.mobileNumber);

  }
  submit()
  {
    if(this.accountantForm.value['password'] === "")
    {
    delete this.accountantForm.value['password']
    return
    }

    if(this.accountantForm.valid)
    {
      this.apiservice.doPutRequest("admin/users/update/"+this.dataresponse._id,this.accountantForm.value).subscribe(
        data =>{
          this.router.navigate(['/petrol-pump-boy'])
          this.toaster.success("Pump boy updated successfully")
        },
        error =>{
          console.log(error.error.response);
          
          this.toaster.error(error.error.response)
          this.spinner.hide();
        }
      )
    }
    else
    {
      
    }
   
  }
}