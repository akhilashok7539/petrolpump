import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiservicesService } from 'src/app/_services/apiservices.service';

@Component({
  selector: 'app-add-accounts',
  templateUrl: './add-accounts.component.html',
  styleUrls: ['./add-accounts.component.css']
})
export class AddAccountsComponent implements OnInit {
  accountantForm:FormGroup;
  submitted = false;
  constructor(private fb:FormBuilder,private apiservice:ApiservicesService,private router:Router) { 
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
    this.apiservice.doPostRequest("admin/users/addUser",this.accountantForm.value).subscribe(
      data =>{
        this.router.navigate(['/account'])
      },
      error =>{

      }
    )
  }
}
