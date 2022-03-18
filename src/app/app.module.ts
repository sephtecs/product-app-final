import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductInfoComponent } from './components/product-info/product-info.component';
import { ProductService } from './services/product.service';
import { OutdatedproductsService } from './services/outdatedproducts.service';
import { HttpClientModule } from '@angular/common/http';
import { PatientService } from './services/patient.service';
import { PatientComponent } from './components/patient/patient.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductInfoComponent,
    PatientComponent,
    ContactusComponent,
    AboutusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ProductService, PatientService, OutdatedproductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
