import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiservicesService } from 'src/app/_services/apiservices.service';

@Component({
  selector: 'app-add-load-quantity',
  templateUrl: './add-load-quantity.component.html',
  styleUrls: ['./add-load-quantity.component.css']
})
export class AddLoadQuantityComponent implements OnInit {
  loadquantityform:FormGroup;
  submitted = false;
  quantitiesarray:any = [];
  quantities!: FormArray;
  constructor(private fb:FormBuilder,private apiservice:ApiservicesService,private router:Router) { 
    this.loadquantityform = this.fb.group({
      fuelType:[''],
      // quantities: new FormArray([

      // ])
      quantities: this.fb.array([this.createItem()])
    })  
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
  addItem() {
    this.quantities = this.loadquantityform.get('quantities') as FormArray;
    this.quantities.push(this.createItem());
  }
  getControls()
  {
    return (this.loadquantityform.get('quantities') as FormArray).controls;
  }
  ngOnInit(): void {

  }
  submit()
  {
    console.log(this.loadquantityform.value);
    
    this.apiservice.doPostRequest("admin/quantity/add",this.loadquantityform.value).subscribe(
      data =>{
        this.router.navigate(['/load-quantity'])
      },
      error =>{

      }
    )

    
  }
  add()
  {
    //  this.t.push(this.fb.group({
    //   quantity: ['', Validators.required],
      
    //  }));
    this.quantitiesarray.push(this.loadquantityform.value['quantities'])
  }
}
