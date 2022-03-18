import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { PatientComponent } from './components/patient/patient.component';
import { ProductInfoComponent } from './components/product-info/product-info.component';
import { ProductListComponent } from './components/product-list/product-list.component';

const routes: Routes = [
  { path: 'productList', component: ProductListComponent },
  { path: 'productInfo', component: ProductInfoComponent },
  { path: 'patientDetails', component: PatientComponent },
  { path: 'contactUs', component: ContactusComponent },
  { path: 'aboutUs', component: AboutusComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
