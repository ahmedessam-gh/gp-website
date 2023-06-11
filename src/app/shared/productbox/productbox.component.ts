import { HttpParams } from '@angular/common/http';
import { product } from './../../core/interfaces/product';
import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Prod } from 'src/app/core/interfaces/Prod';
import { CartService } from 'src/app/core/services/cart.service';
import { CustomerService } from 'src/app/core/services/customer.service';
import { ProdService } from 'src/app/core/services/prod.service';

@Component({
  selector: 'app-productbox',
  templateUrl: './productbox.component.html',
  styleUrls: ['./productbox.component.css'],
})
export class ProductboxComponent implements OnInit {
  @Input() product: any;
  @Input() rating: any;

  public form: FormGroup;
  favouriteList: any = [];
  discountedprice: number;
  param: HttpParams;
  constructor(
    private prod: ProdService,
    private cart: CartService,
    private fb: FormBuilder,
    private customer: CustomerService
  ) {}

  ngOnInit(): void {
    this.param = new HttpParams().set('productId', this.product.productId);
    this.customer.getWishList(this.param).subscribe((data) => {
      this.favouriteList = data['productList'];
      console.log(this.favouriteList);
    });
  }
  //
  isValidImage(imageUrl: string): boolean {
    // Check if the imageUrl is empty or does not load a valid image
    // For example, you can use an Image object to check if it's a valid image
    if (imageUrl) {
      const image = new Image();
      image.src = imageUrl;
      return image.complete && image.naturalWidth !== 0;
    }
    return false;
  }
  addToFav(productId: any, e) {
    this.customer.addToWishList(productId).subscribe();
    this.customer.getWishList(this.param).subscribe((data) => {
      this.favouriteList = data['productList'];
      console.log(this.favouriteList);
    });
    this.disableLink(e);
  }
  // addToFav(product: product, event) {
  //   this.disableLink(event);
  //   this.prod.addToFav(product, event);
  //   // this.getFavourites();
  // }

  disableLink(event: MouseEvent) {
    event.stopPropagation();

    event.preventDefault();
  }
}
