import { Component, OnInit } from '@angular/core';
import { IProduct } from '../product';
import { ProductService } from '../product.service'
@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  errorMsg: string
  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) => product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }
  fliteredProducts;
  constructor(private productService: ProductService) {

  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: products => {
        this.products = products
        this.fliteredProducts = this.products;
      },
      error: err => this.errorMsg = err
    });
    this.listFilter = ''
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

  products: IProduct[] = [];
  toggleImage() {
    this.showImage = !this.showImage;
    this.imageTitle = this.showImage ? "Hide Image" : "Show Image";
  }
  onRatingClicked(message: string) {
    this.pageTitle = 'Product List ' + message
  }
}
