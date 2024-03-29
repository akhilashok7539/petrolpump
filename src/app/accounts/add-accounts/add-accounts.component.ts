import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ApiservicesService } from 'src/app/_services/apiservices.service';

@Component({
  selector: 'app-add-accounts',
  templateUrl: './add-accounts.component.html',
  styleUrls: ['./add-accounts.component.css']
})
export class AddAccountsComponent implements OnInit {
  accountantForm:FormGroup;
  submitted = false;
  constructor(private fb:FormBuilder,private apiservice:ApiservicesService,private router:Router, private toaster:ToastrService,
    private spinner: NgxSpinnerService) { 
    this.accountantForm = this.fb.group({
      userId:['',Validators.required],
      role:['1',Validators.required],
      password:['',Validators.required],
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
  }
  submit()
  {
    console.log(this.accountantForm.valid);
    if(this.accountantForm.valid)
    {
      this.apiservice.doPostRequest("admin/users/addUser",this.accountantForm.value).subscribe(
        data =>{
          this.router.navigate(['/account'])
          this.toaster.success("Accountant added successfully");
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
