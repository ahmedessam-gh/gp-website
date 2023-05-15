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
  @Input() product: product;
  @Input() rating: product;
  public form: FormGroup;
  favouriteList: any = [];
  constructor(
    private prod: ProdService,
    private cart: CartService,
    private fb: FormBuilder,
    private customer: CustomerService
  ) { }

  ngOnInit(): void {
    const param = new HttpParams().set('productId', this.product.productId)
    this.customer.getWishList(param).subscribe((data) => {
      this.favouriteList = data['productList'];
      console.log(this.favouriteList);
    });
  }
  //
 
  addToFav(productId: any, e) {
    this.customer.addToWishList(productId).subscribe();
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
