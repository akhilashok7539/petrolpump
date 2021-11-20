import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiservicesService } from '../_services/apiservices.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {
  dataSource :any= [];
  displayedColumns = ['id', 'categoryname','mobileNumber','createdAt','cuurentstatus','status'];
  adminrole:any;
  constructor(private apiservice:ApiservicesService,private router:Router) { }

  ngOnInit(): void {
    sessionStorage.clear();
    let responsedata = JSON.parse(localStorage.getItem("loggedinuserdetails") || '{}')
    this.adminrole = responsedata['role'];
    this.apiservice.doGetRequest("admin/users/1").subscribe(
      data =>{
        console.log(data.response);
        this.dataSource = data.response;
      },
      error =>{

      }
    )
  }
  updatestatus(row:any)
  {
    let status;
    if(row.isActive === true)
    {
      status= false;
    }
    else{

      status= true;
    }
    console.log(row);
    let req ={
      "id":row._id,
      "isActive":status
  }
    this.apiservice.doPutRequest('admin/users/deactivate',req).subscribe(
      data =>{
          this.ngOnInit();
      },
      error =>{

      }
    )
  }
  updated(s:any)
  {
    sessionStorage.setItem("Accountant",JSON.stringify(s))
    this.router.navigate(['/update-account'])
  }
}
