import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-admin-page-delete-product',
  templateUrl: './admin-page-delete-product.component.html',
  styleUrls: ['./admin-page-delete-product.component.css']
})
export class AdminPageDeleteProductComponent implements OnInit {
  deleteProductFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {


    this.deleteProductFormGroup=this.formBuilder.group({
      deleteproduct:this.formBuilder.group({
        id:['']
      })
    });
  }

  addProduct(){
    console.log("Handling the Submit Button");
    console.log(this.deleteProductFormGroup.get('deleteproduct').value);
  }

}
