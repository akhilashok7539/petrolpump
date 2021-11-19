import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiservicesService } from 'src/app/_services/apiservices.service';

@Component({
  selector: 'app-update-stockdetails',
  templateUrl: './update-stockdetails.component.html',
  styleUrls: ['./update-stockdetails.component.css']
})
export class UpdateStockdetailsComponent implements OnInit {

  loadquantityform: FormGroup;
  submitted = false;
  quantitiesarray: any = [];
  quantities!: FormArray;
  arraydetails: any = [];
  stockdetails91: any = [];
  stockdetails95: any = [];
  stockdetailed95!: FormArray;
  dayshiftcahsbalance:any;
  nighshiftcashbalance:any;
  constructor(private fb: FormBuilder, private apiservice: ApiservicesService, private router: Router,
      private toaster:ToastrService,
    ) {
    this.arraydetails = JSON.parse(sessionStorage.getItem("stock")|| '{}');
    this.loadquantityform = this.fb.group({
      date:[''],
      petrolBoyId: [''],
      shiftType:[''],
      // quantities: new FormArray([

      // ])
      quantities: this.fb.array([]),
      stockdetailed95:this.fb.array([]),
      overAllSales:[''],
      totalReading:[''],
      salesQuantity:[''],
      rate:[''],
      totalSales:[''],
      lessPayment:[''],
      bankPayment:[''],
      shortInCollection:[''],
      shortInCollectionVechNo:[''],
      cashBalance:[''],

      totalReading95:[''],
      salesQuantity95:[''],
      rate95:[''],
      totalSales95:[''],
      
    })

    console.log(this.arraydetails);
    this.loadquantityform.controls['bankPayment'].setValue(this.arraydetails.bankPayment);
    this.loadquantityform.controls['cashBalance'].setValue(this.arraydetails.cashBalance);
    this.loadquantityform.controls['lessPayment'].setValue(this.arraydetails.lessPayment);
    this.loadquantityform.controls['overAllSales'].setValue(this.arraydetails.overAllSales);
    this.loadquantityform.controls['shortInCollection'].setValue(this.arraydetails.shortInCollection);
    this.loadquantityform.controls['shortInCollectionVechNo'].setValue(this.arraydetails.shortInCollectionVechNo);

    this.loadquantityform.controls['rate'].setValue(this.arraydetails.petrolType91.rate);
    this.loadquantityform.controls['salesQuantity'].setValue(this.arraydetails.petrolType91.salesQuantity);
    this.loadquantityform.controls['totalReading'].setValue(this.arraydetails.petrolType91.totalReading);
    this.loadquantityform.controls['totalSales'].setValue(this.arraydetails.petrolType91.totalSales);


    this.loadquantityform.controls['rate95'].setValue(this.arraydetails.petrolType95.rate);
    this.loadquantityform.controls['salesQuantity95'].setValue(this.arraydetails.petrolType95.salesQuantity);
    this.loadquantityform.controls['totalReading95'].setValue(this.arraydetails.petrolType95.totalReading);
    this.loadquantityform.controls['totalSales95'].setValue(this.arraydetails.petrolType95.totalSales);
    // this.arraydetails.map((x:any)=>{
    //   console.log(x);
      
    // })

    for (let obj of this.arraydetails.petrolType91.stockDetails) {
      // console.log("object:", obj);
      for (let key in obj) {
          // console.log("key:", key, "value:", obj[key]);  
          if(key === '_id' )
          {

          }
          else
          {
            this.stockdetails91.push(obj[key])

          }
      }
  }
  console.log(this.stockdetails91);
  for (let obj of this.arraydetails.petrolType95.stockDetails) {
    // console.log("object:", obj);
    for (let key in obj) {
        // console.log("key:", key, "value:", obj[key]);  
        if(key === '_id' )
        {

        }
        else
        {
          this.stockdetails95.push(obj[key])

        }
    }

}
console.log(this.stockdetails95);


  }

  ngOnInit(): void {
    // this.loadquantityform.controls['id'].setValue(this.arraydetails["_id"])

      for(let i=0;i<this.stockdetails91.length;i++)
      {
        this.quantities = this.loadquantityform.get('quantities') as FormArray;
        this.quantities.push(this.createItemvalues(this.stockdetails91[i],i));


      }
      for(let i=0;i<this.stockdetails95.length;i++)
      {
        this.stockdetailed95 = this.loadquantityform.get('stockdetailed95') as FormArray;
        this.stockdetailed95.push(this.createItemvaluess(this.stockdetails95[i],i));


      }

    
    this.apiservice.doGetRequest('admin/stocks/getByDate/'+this.arraydetails.date).subscribe(
      (data:any)=>{
        console.log(data);
        let response = data['response']
        this.dayshiftcahsbalance = response[0].cashBalance;
        this.nighshiftcashbalance = response[1].cashBalance;
      },
      error =>{

      }
    )
  }
  get f()
  {
  return this.loadquantityform.controls;
  }
  createItem() {
    return this.fb.group({
      quantity: ['']
    })
  }
  createItemvalues(i:any,index:any)
  {
    return this.fb.group({
      outLet: [i]
    })
  }

  createItemvaluess(i:any,index:any)
  {
   
  
    return this.fb.group({
      outLet: [i]
    })
  }
  // addItem() {
  //   this.quantities = this.loadquantityform.get('quantities') as FormArray;
  //   this.quantities.push(this.createItem());
  // }
  getControls()
  {
    return (this.loadquantityform.get('quantities') as FormArray).controls;
  }
  getControlss()
  {
    return (this.loadquantityform.get('stockdetailed95') as FormArray).controls;
  }
  submit()
  {
    console.log(this.loadquantityform.value);
    let req = 
    {
      "petrolBoyId":this.arraydetails.petrolBoyId,
      "date": this.arraydetails.date,
      "shiftType":this.arraydetails.shiftType,
      lessPayment:this.loadquantityform.value['lessPayment'],
      bankPayment:this.loadquantityform.value['bankPayment'],
      shortInCollection:this.loadquantityform.value['shortInCollection'],
      shortInCollectionVechNo:this.loadquantityform.value['shortInCollectionVechNo'],
      cashBalance:this.loadquantityform.value['cashBalance'],
      overAllSales:this.loadquantityform.value['overAllSales'],
      "petrolType91": {
        petrolType: 91,
        stockDetails:this.loadquantityform.value['quantities'],
        rate:this.loadquantityform.value['rate'],
        salesQuantity:this.loadquantityform.value['salesQuantity'],
        totalReading:this.loadquantityform.value['totalReading'],
        totalSales:this.loadquantityform.value['totalSales'],

       
      },
      "petrolType95": {
        petrolType: 95,
        stockDetails:this.loadquantityform.value['stockdetailed95'],
        rate:this.loadquantityform.value['rate95'],
        salesQuantity:this.loadquantityform.value['salesQuantity95'],
        totalReading:this.loadquantityform.value['totalReading95'],
        totalSales:this.loadquantityform.value['totalSales95'],
        
      },
      "totalCashBalanceOfTheDay":this.dayshiftcahsbalance +this.nighshiftcashbalance
    }
    console.log(req);

    this.apiservice.doPutRequest('admin/stocks/update/'+this.arraydetails._id,req).subscribe(
      data =>{
        this.toaster.success("Updated Stock Details")
        this.router.navigate(['/readings'])
      },
      error =>{
        this.toaster.error("Unable to update Stock Details")

      }
    )
  }
}
