import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError, catchError, retry } from 'rxjs';
import { Product } from '../models/product';

const productURL = "http://localhost:5050/product"

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
    return this.httpClient.get<Product[]>(productURL)
      .pipe(
        retry(0),
        catchError(this.errorHandler)
      );
  }

  //Getting a single product
  getProduct(productId: number): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`${productURL}/${productId}`)
      .pipe(
        retry(0),
        catchError(this.errorHandler)
      );
  }

  //Deleting a single product
  deleteProduct(productId: number): Observable<Product[]> {
    return this.httpClient.delete<Product[]>(`${productURL}/${productId}`)
      .pipe(
        retry(0),
        catchError(this.errorHandler)
      );
  }

  //Saving a single product
  saveProduct(product: Product): Observable<Product[]> {
    return this.httpClient.post<Product[]>(productURL, product, this.httpOptions)
      .pipe(
        retry(0),
        catchError(this.errorHandler)
      );
  }

  //Edit/Update a single product
  updateProduct(productId: number, product: Product): Observable<Product> {
    return this.httpClient.put<Product>(`${productURL}/${productId}`, product, this.httpOptions)
      .pipe(
        retry(0),
        catchError(this.errorHandler)
      );
  }

  //Error Handler
  errorHandler(error: { error: { message: string; }; status: any; message: any; }) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `REVError Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }



}
