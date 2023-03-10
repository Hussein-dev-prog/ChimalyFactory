import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
const routes: Routes = [
  // {path:"",pathMatch:"full",redirectTo:"home"},
  {path:"home", component:HomeComponent},
  {path:"products", component:ProductsComponent},
  {path:"product-create", component:ProductCreateComponent},
  {path:"edit/:id", component:ProductEditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
