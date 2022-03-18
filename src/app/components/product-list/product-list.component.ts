import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/models/patient';
import { Product } from 'src/app/models/product';
import { ProductData } from 'src/app/ProductData';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];
  patients: Patient[] = [];
  public productAvailable = true;
  public color = "blue";
  public errorMessage!: string;
  productData = new ProductData();

  successMessage!: string;

  public guestName: string = "Isha";

  //DI(Dependcy Injection)
  constructor(public productService: ProductService) {
    // this.products = productService.getProducts();
  }

  // constructor() {
  //   this.products = this.productData.getProducts();
  // this.products = [
  //   { 'productId': 1001, productName: 'Lakme', quantityOnHand: 200, price: 99 },
  //   { 'productId': 1002, productName: 'Aroma', quantityOnHand: 382, price: 89 },
  //   { 'productId': 1003, productName: 'Pendrive', quantityOnHand: 191, price: 199 },
  //   { 'productId': 1004, productName: 'Mouse', quantityOnHand: 519, price: 29 },
  //   { 'productId': 1005, productName: 'Laptop', quantityOnHand: 129, price: 399 },
  // ]

  //   this.patients = [ //when doing it this way, you must change ?: in patient.ts (Models) to --> patientSymptom: string = "";
  //     { 'patientId': 101, patientName: 'A', patientSymptom: 'cold', patientTotalBill: 82, patientDoctorName: 'Dr. Lakme' },
  //     { 'patientId': 102, patientName: 'B', patientSymptom: 'cough', patientTotalBill: 12, patientDoctorName: 'Dr. Aroma' },
  //     { 'patientId': 103, patientName: 'C', patientSymptom: 'fever', patientTotalBill: 91, patientDoctorName: 'Dr. Pendrive' },
  //     { 'patientId': 104, patientName: 'D', patientSymptom: 'cold', patientTotalBill: 109, patientDoctorName: 'Dr. Mouse' },
  //     { 'patientId': 105, patientName: 'E', patientSymptom: 'other', patientTotalBill: 39, patientDoctorName: 'Dr. Laptop' },
  //   ]

  ngOnInit(): void {
    this.refreshProducts();
  }

  removeProduct(productId: number) {
    this.productService.deleteProduct(productId).subscribe((data: any) => {
      this.successMessage = 'Product with product id ' + productId + ' deleted successfully';
      this.refreshProducts();
    }, err => this.errorMessage = err)
  }

  refreshProducts() {
    this.productService.getProducts().subscribe((data: any) => {
      this.products = data;
    }, err => this.errorMessage = err)
  }

  getColor(country: string) {
    switch (country) {
      case 'UK':
        return 'green';
      case 'USA':
        return 'blue';
      case 'IN':
        return 'red';
      default:
        return 'yellow'
    }
  }

  getColor2(patientSymptom: string) {
    switch (patientSymptom) {
      case 'cold':
        return 'red';
      case 'cough':
        return 'blue';
      case 'fever':
        return 'green';
      default:
        return 'lime'
    }
  }
  people: any[] = [
    {
      "name": "Tufail Ahmed",
      "country": 'IN'
    },
    {
      "name": "Neha Sharma",
      "country": 'UK'
    },
    {
      "name": "Ravi Kiran",
      "country": 'IN'
    },
    {
      "name": "Tarun Sharma",
      "country": 'IN'
    },
    {
      "name": "Cook Tyson",
      "country": 'USA'
    }
  ];


  // when doing it this way, you don't have to change ?: in patient.ts to... [[ patientSymptom: string = ""; ]]
  // sickPeople: any[] = [
  //   {
  //     "patientId": 123,
  //     "patientName": 'A',
  //     "patientSymptom": 'cold',
  //     "patientTotalBill": 100,
  //     "patientDoctorName": 'Dr. Lakme'
  //   },
  //   {
  //     "patientId": 126,
  //     "patientName": 'B',
  //     "patientSymptom": 'fever',
  //     "patientTotalBill": 200,
  //     "patientDoctorName": 'Dr. Aroma'
  //   },
  //   {
  //     "patientId": 18,
  //     "patientName": 'C',
  //     "patientSymptom": 'cough',
  //     "patientTotalBill": 300,
  //     "patientDoctorName": 'Dr. Pendrive'
  //   },
  //   {
  //     "patientId": 14,
  //     "patientName": 'D',
  //     "patientSymptom": 'cold',
  //     "patientTotalBill": 400,
  //     "patientDoctorName": 'Dr. Mouse'
  //   },
  //   {
  //     "patientId": 99,
  //     "patientName": 'E',
  //     "patientSymptom": 'other',
  //     "patientTotalBill": 500,
  //     "patientDoctorName": 'Dr. Laptop'
  //   }
  // ];
}
