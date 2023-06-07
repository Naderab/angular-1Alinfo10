import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';
import { ProductsConsumerService } from '../services/products-consumer.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  listProducts:Product[]=[];
  constructor(private _productService:ProductService,private _consumer:ProductsConsumerService) { }

  ngOnInit(): void {
    // this.listProducts=this._productService.listProductsFromService;
    this._consumer.getProducts().subscribe(
      {
        next: (data) => { this.listProducts = data },
        error: (error) => console.log(error),
        complete: () => console.log('done')
      }
    )
  }
  buy(p:Product){
    p.quantity--;
  }

  delete(id: number) {
    this._consumer.deleteProduct(id).subscribe({
      next:()=>this.listProducts=this.listProducts.filter(p=>p.id!=id)
    });
  }

}
