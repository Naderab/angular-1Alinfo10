import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsComponent } from './products/products.component';
import { OffresEmploiComponent } from './offres-emploi/offres-emploi.component';
import { NotFoundComponent } from './models/not-found/not-found.component';
import { DetailsProductComponent } from './models/details-product/details-product.component';

 
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ProductsComponent,
    OffresEmploiComponent,
    NotFoundComponent,
    DetailsProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
