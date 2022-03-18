import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductData } from 'src/app/ProductData';
import { OutdatedproductsService } from 'src/app/services/outdatedproducts.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent implements OnInit {

  products: Product[] = [];
  productData = new ProductData();

  constructor(public productService: ProductService,
    public outdatedService: OutdatedproductsService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data: any) => {
      this.products = data;
    })

    // this.products = this.outdatedService.getOutdatedProducts();
    // this.products = this.productData.getProducts();
    // { 'productId': 1001, productName: 'Lakme', quantityOnHand: 200, price: 99 },
    // { 'productId': 1002, productName: 'Aroma', quantityOnHand: 382, price: 89 },
    // { 'productId': 1003, productName: 'Pendrive', quantityOnHand: 191, price: 199 },
    // { 'productId': 1004, productName: 'Mouse', quantityOnHand: 519, price: 29 },
    // { 'productId': 1005, productName: 'Laptop', quantityOnHand: 129, price: 399 },

  }

}
