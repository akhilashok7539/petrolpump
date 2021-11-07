import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiservicesService } from 'src/app/_services/apiservices.service';
@Component({
  selector: 'app-update-loadquantity',
  templateUrl: './update-loadquantity.component.html',
  styleUrls: ['./update-loadquantity.component.css']
})
export class UpdateLoadquantityComponent implements OnInit {
  loadquantityform:FormGroup;
  submitted = false;
  quantitiesarray:any = [];
  quantities!: FormArray;
  arraydetails:any = [];
  constructor(private fb:FormBuilder,private apiservice:ApiservicesService,private router:Router,
    public dialogRef: MatDialogRef<UpdateLoadquantityComponent>,
    @Inject(MAT_DIALOG_DATA) data: any) {
      this.arraydetails = data;
    this.loadquantityform = this.fb.group({
      // fuelType:[''],
      id:[''],
      // quantities: new FormArray([

      // ])
      quantities: this.fb.array([])
    })  
     }

  ngOnInit(): void {
    // this.loadquantityform.controls['fuelType'].setValue(this.arraydetails["fuelType"])
    this.loadquantityform.controls['id'].setValue(this.arraydetails["_id"])

      for(let i=0;i<this.arraydetails.quantitieslist.length;i++)
      {
        this.quantities = this.loadquantityform.get('quantities') as FormArray;
        // console.log(this.quantities);
        this.quantities.push(this.createItemvalues(this.arraydetails.quantitieslist[i]));
      
        // for (let key in element) {
        // }
      //  console.log( this.loadquantityform.controls['quantities'].setValue(i));
       
        // this.quantities.controls["quantities"].setValue("a")
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
  createItemvalues(i:any)
  {
    return this.fb.group({
      quantity: [i]
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

  submit()
  {
    console.log(this.loadquantityform.value);
    
    this.apiservice.doPutRequest("admin/quantity/update",this.loadquantityform.value).subscribe(
      data =>{
        this.dialogRef.close();
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
