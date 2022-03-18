import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  productForm !: FormGroup;
  successMessage!: string

  constructor() {
    this.productForm = new FormGroup({
      productId: new FormControl('', Validators.required),
      productName: new FormControl('', [Validators.required, Validators.minLength(5)]),
      quantityOnHand: new FormControl('', [Validators.required, Validators.min(0)]),
      price: new FormControl('', [Validators.required, Validators.min(1)]),
    })
  }

  ngOnInit(): void {
  }

  displayCreateComponent() {
    console.log(this.productForm.value)
  }

}
