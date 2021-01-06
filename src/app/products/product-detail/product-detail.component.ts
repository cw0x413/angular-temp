import { Component, OnInit } from '@angular/core';
import { IProduct } from '../product';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor() { }
  pageTitle: string = "yes"
  product: IProduct
  ngOnInit(): void {
  }

}
