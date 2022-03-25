import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  productForm!: FormGroup;
  successMessage!: string

  constructor(public formBuilder: FormBuilder, public productService: ProductService, public router: Router) { }

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      productId: ['', Validators.required],
      productName: ['', [Validators.required, Validators.minLength(5)]],
      quantityOnHand: ['', [Validators.required, Validators.min(0)]],
      price: ['', [Validators.required, Validators.min(1)]]
    })
  }

  displayProductInfo() {
    console.log(this.productForm.value)
    this.productService.saveProduct(this.productForm.value).subscribe((data: any) => {
      this.successMessage = 'Product with product id ' + this.productForm.value.productId + ' saved successfully';
      //redirect to productlist component

    }, err => this.router.navigate(['productList']))
  }

}
