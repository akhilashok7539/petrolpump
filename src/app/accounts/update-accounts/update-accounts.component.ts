import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiservicesService } from 'src/app/_services/apiservices.service';
@Component({
  selector: 'app-update-accounts',
  templateUrl: './update-accounts.component.html',
  styleUrls: ['./update-accounts.component.css']
})
export class UpdateAccountsComponent implements OnInit {

  accountantForm:FormGroup;
  submitted = false;
  dataresponse:any=[];
  constructor(private fb:FormBuilder,private apiservice:ApiservicesService,private router:Router,
    private toaster:ToastrService) { 
    this.accountantForm = this.fb.group({
      userId:['',Validators.required],
      role:['1',Validators.required],
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
    // console.log(this.accountantForm.value['userId']);
    if(this.accountantForm.value['password'] === "")
    {
    delete this.accountantForm.value['password']
    return
    }

    if(this.accountantForm.valid)
    {
      
      this.apiservice.doPutRequest("admin/users/update/"+this.dataresponse._id,this.accountantForm.value).subscribe(
        data =>{
          this.router.navigate(['/account'])
          this.toaster.success("Accountant updated successfully")
        },
        error =>{
          this.toaster.error("Unable to add accountant successfully")
  
        }
      )
    }
    else
    {
      
    }
   
  }
}
