import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  productForm !: FormGroup;

  constructor() {
    this.productForm = new FormGroup({
      productId: new FormControl('', Validators.required),
      productName: new FormControl('', Validators.required),
      quantityOnHand: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
    })
  }

  ngOnInit(): void {
  }

}
