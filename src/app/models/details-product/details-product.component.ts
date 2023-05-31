import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details-product',
  templateUrl: './details-product.component.html',
  styleUrls: ['./details-product.component.css']
})
export class DetailsProductComponent implements OnInit {

  id:string="";
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.route)
    this.id = this.route.snapshot.params['id'];
  }

}
