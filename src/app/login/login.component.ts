import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiservicesService } from '../_services/apiservices.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  password:any;
  userName:any;
  resposne:any;
  loginform : FormGroup;
  constructor(private fb:FormBuilder,private apiservice:ApiservicesService,private router:Router,private toaster:ToastrService) {
    this.loginform = this.fb.group({
      userId:['',Validators.required],
      password:['',Validators.required]

    }
    )
   }
   get f() { return this.loginform.controls; }
  ngOnInit(): void {
  }
  Masteradminlogin()
  {
    console.log(this.loginform.value);
    this.apiservice.doPostRequest("admin/users/login",this.loginform.value).subscribe(
      data =>{
        console.log(data);
        let res:any = [];
        res = data;
        localStorage.setItem("loggedinuserdetails",JSON.stringify(res['response']))
        this.router.navigate(['/account'])
      },
      error =>{
        console.log(error);
        this.toaster.error("Invalid Details")
      }
    )
  }
}
