import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OutdatedproductsService {

  constructor() { }
  getOutdatedProducts() {
    return [
      { 'productId': 3003, productName: 'Pendrive', quantityOnHand: 191, price: 199 },
      { 'productId': 4004, productName: 'Mouse', quantityOnHand: 519, price: 29 },
      { 'productId': 5005, productName: 'Laptop', quantityOnHand: 129, price: 399 },
    ]
  }
}
