import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

const productURL = "http://localhost:3000/product"

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(public httpClient: HttpClient) { }

  //Getting all the products
  getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(productURL);
  }

  //Getting a single product
  getProduct(productId: number): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`${productURL}/${productId}`);
  }

  //Deleting a single product
  deleteProduct(productId: number): Observable<Product[]> {
    return this.httpClient.delete<Product[]>(`${productURL}/${productId}`);
  }

  //Saving a single product
  saveProduct(product: Product): Observable<Product[]> {
    return this.httpClient.post<Product[]>(productURL, product, this.httpOptions);
  }

  //Edit/Update a single product
  updateProduct(productId: number, product: Product): Observable<Product> {
    return this.httpClient.put<Product>(`${productURL}/${productId}`, product, this.httpOptions);
  }
}
