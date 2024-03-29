import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiservicesService } from 'src/app/_services/apiservices.service';
import { ToastrService } from 'ngx-toastr';
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
    private toaster:ToastrService,
    public dialogRef: MatDialogRef<UpdateLoadquantityComponent>,
    @Inject(MAT_DIALOG_DATA) data: any) {
      this.arraydetails = data;
      console.log(this.arraydetails);
      
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
    
    this.apiservice.doPutRequest("admin/quantity/update",this.loadquantityform.value).subscribe(
      data =>{
        this.dialogRef.close();
        this.toaster.success("Quantities updated successfully")
      },
      error =>{
        this.toaster.error("unable to update quantities")

      }
    )
    // for(let i =0;i<this.loadquantityform.value['quantities'].length;i++)
    // {
    //   if(this.loadquantityform.value['quantities'][i].quantity === null || this.loadquantityform.value['quantities'][i].quantity === "null" )
    //   {
    //     delete this.loadquantityform.value['quantities'][i].quantity
    //   }
    // }
    console.log(this.loadquantityform.value);

    
  }
  add()
  {
    //  this.t.push(this.fb.group({
    //   quantity: ['', Validators.required],
      
    //  }));
    this.quantitiesarray.push(this.loadquantityform.value['quantities'])
  }
  Close()
  {
    this.dialogRef.close();

  }
  removeGroup(i: number) {
    // remove address from the list
    const control = <FormArray>this.loadquantityform.controls['quantities'];
    control.removeAt(i);
    this.toaster.success("Removed")
  }
}
