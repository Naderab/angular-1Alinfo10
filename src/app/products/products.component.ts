import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  listProducts:Product[]=[];
  constructor(private _productService:ProductService) { }

  ngOnInit(): void {
    this.listProducts=this._productService.listProductsFromService;
  }
  buy(p:Product){
    p.quantity--;
  }

}
