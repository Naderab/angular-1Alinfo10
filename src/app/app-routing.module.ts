import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { OffresEmploiComponent } from './offres-emploi/offres-emploi.component';
import { NotFoundComponent } from './models/not-found/not-found.component';
import { DetailsProductComponent } from './models/details-product/details-product.component';
import { AddProductComponent } from './add-product/add-product.component';

const routes: Routes = [
  {path:"",redirectTo:"products",pathMatch:"full"},
  {path:"products",component:ProductsComponent},
  {path:"product/:id",component:DetailsProductComponent},
  {path:"offres",component:OffresEmploiComponent},
  {path:"addProduct",component:AddProductComponent},
  {path:"**",component:NotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
