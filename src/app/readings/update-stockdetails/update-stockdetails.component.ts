import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
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
  constructor(private fb: FormBuilder, private apiservice: ApiservicesService, private router: Router,) {
    this.arraydetails = JSON.parse(sessionStorage.getItem("stock")|| '{}');
    this.loadquantityform = this.fb.group({
      date:[''],
      petrolBoyId: [''],
      shiftType:[''],
      // quantities: new FormArray([

      // ])
      quantities: this.fb.array([]),
      stockdetailed95:this.fb.array([]),

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
      lessPayment95:[''],
      bankPayment95:[''],
      shortInCollection95:[''],
      shortInCollectionVechNo95:[''],
      cashBalance95:[''],
    })

    console.log(this.arraydetails);
    this.loadquantityform.controls['totalReading'].setValue(this.arraydetails.petrolType91.totalReading);
    
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
        this.stockdetailed95.push(this.createItemvaluess(this.stockdetails91[i],i));


      }
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
      quantity: [i]
    })
  }

  createItemvaluess(i:any,index:any)
  {
   
  
    return this.fb.group({
      stockdetailed95: [i]
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
      "petrolType91": {
        petrolType: 91,
        stockDetails:this.loadquantityform.value['quantities'],
        totalReading:this.loadquantityform.value['totalReading'],
        salesQuantity:this.loadquantityform.value['salesQuantity'],
        rate:this.loadquantityform.value['rate'],
        totalSales:this.loadquantityform.value['totalSales'],
        lessPayment:this.loadquantityform.value['lessPayment'],
        bankPayment:this.loadquantityform.value['bankPayment'],
        shortInCollection:this.loadquantityform.value['shortInCollection'],
        shortInCollectionVechNo:this.loadquantityform.value['shortInCollectionVechNo'],
        cashBalance:this.loadquantityform.value['cashBalance'],
      },
      "petrolType95": {
        petrolType: 95,
        stockDetails:this.loadquantityform.value['stockdetailed95'],
        totalReading:this.loadquantityform.value['totalReading95'],
        salesQuantity:this.loadquantityform.value['salesQuantity95'],
        rate:this.loadquantityform.value['rate95'],
        totalSales:this.loadquantityform.value['totalSales95'],
        lessPayment:this.loadquantityform.value['lessPayment95'],
        bankPayment:this.loadquantityform.value['bankPayment95'],
        shortInCollection:this.loadquantityform.value['shortInCollection95'],
        shortInCollectionVechNo:this.loadquantityform.value['shortInCollectionVechNo95'],
        cashBalance:this.loadquantityform.value['cashBalance95'],
      },
      "totalCashBalanceOfTheDay":this.loadquantityform.value['cashBalance95'] +this.loadquantityform.value['cashBalance']
    }
    console.log(req);

  }
}
