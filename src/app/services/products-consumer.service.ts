import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsConsumerService {
  productUrl = environment.BaseUrl + '/products';
  constructor(private _http: HttpClient) { }
  getProducts() {
    return this._http.get<Product[]>(this.productUrl);
  }
  addProduct(product: Product) {
    return this._http.post<Product>(this.productUrl, product);
  }
  deleteProduct(id: number) {
    return this._http.delete<Product>(this.productUrl + '/' + id);
  }
}
