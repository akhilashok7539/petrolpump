import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiservicesService } from '../_services/apiservices.service';

@Component({
  selector: 'app-dailyrates',
  templateUrl: './dailyrates.component.html',
  styleUrls: ['./dailyrates.component.css']
})
export class DailyratesComponent implements OnInit {
  dataSource :any;
  displayedColumns = ['id', 'categoryname'];
  fuelType = "91";
  activeButton =1;
  constructor(private apiservice:ApiservicesService,private router:Router) { }

  ngOnInit(): void {
    this.apiservice.doGetRequest("petrolBoy/fuelRate/"+this.fuelType).subscribe(
      data =>{
        this.dataSource = data['response']
      },
      error =>{
        
      }
    )
  }

  selectedtype(s:any)
  {
    console.log(s);
    this.apiservice.doGetRequest("petrolBoy/fuelRate/"+s).subscribe(
      data =>{
        this.dataSource = data['response']
      },
      error =>{

      }
    )
  }
  showPhase(event:any){
    console.log(event);
    
    this.activeButton = event;
    if(event === 1)
    {
      this.apiservice.doGetRequest("petrolBoy/fuelRate/"+91).subscribe(
        data =>{
          this.dataSource = data['response']
        },
        error =>{
  
        }
      )
    }
    else  if(event === 2){
      this.apiservice.doGetRequest("petrolBoy/fuelRate/"+95).subscribe(
        data =>{
          this.dataSource = data['response']
        },
        error =>{
  
        }
      )
    }
  }
  edit(s:any)
  {
    console.log(s);
    this.router.navigate(['/update-dailyrates']);
    sessionStorage.setItem("datilyrate",JSON.stringify(s))
  }
}
