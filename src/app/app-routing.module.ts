import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { PatientAddComponent } from './components/patient-add/patient-add.component';
import { PatientComponent } from './components/patient/patient.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { ProductCreateComponent } from './components/product-create/product-create.component';
import { ProductInfoComponent } from './components/product-info/product-info.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
  { path: '', redirectTo: 'productInfo', pathMatch: 'full' },
  { path: 'productList', component: ProductListComponent },
  { path: 'productInfo', component: ProductInfoComponent },
  { path: 'patientList', component: PatientComponent },
  { path: 'addPatient', component: PatientAddComponent },
  { path: 'contactUs', component: ContactusComponent },
  { path: 'aboutUs', component: AboutusComponent },
  { path: 'user', component: UserComponent },
  { path: 'addProduct', component: ProductAddComponent },
  { path: 'createProduct', component: ProductCreateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
