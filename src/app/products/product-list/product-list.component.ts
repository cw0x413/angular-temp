import { Component, OnInit } from '@angular/core';
import { IProduct } from '../product';
@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) => product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }
  fliteredProducts;
  constructor() {
    this.fliteredProducts = this.products;
    this.listFilter = 'cart'
  }

  ngOnInit(): void {
    console.log('on init')
  }
  imageWidth = 50;
  imageMargin = 2;
  showImage = false;
  pageTitle: string = 'Product list'
  imageTitle = this.showImage ? "Hide Image" : "Show Image";
  _listFilter = 'cart';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.fliteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }

  products: IProduct[] = [{
    "productId": 1,
    "productName": "Leaf Rake",
    "productCode": "GDN-0011",
    "releaseDate": "March 19, 2019",
    "description": "Leaf rake with 48-inch wooden handle.",
    "price": 19.95,
    "starRating": 3.2,
    "imageUrl": "assets/images/leaf_rake.png"
  },
  {
    "productId": 2,
    "productName": "Garden Cart",
    "productCode": "GDN-0023",
    "releaseDate": "March 18, 2019",
    "description": "15 gallon capacity rolling garden cart",
    "price": 32.99,
    "starRating": 4.2,
    "imageUrl": "assets/images/garden_cart.png"
  }];
  toggleImage() {
    this.showImage = !this.showImage;
    this.imageTitle = this.showImage ? "Hide Image" : "Show Image";
  }
}
