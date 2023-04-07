import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Prod } from 'src/app/core/interfaces/Prod';
import { CartService } from 'src/app/core/services/cart.service';
import { ProdService } from 'src/app/core/services/prod.service';

@Component({
  selector: 'app-productbox',
  templateUrl: './productbox.component.html',
  styleUrls: ['./productbox.component.css'],
})
export class ProductboxComponent implements OnInit {
  @Input() product: Prod;
  public form: FormGroup;
  favouriteList: any = [];

  constructor(private prod: ProdService,private cart :CartService, private fb: FormBuilder) {
    this.form = this.fb.group({
      rating: [5],
    });
    this.favouriteList = this.prod.getFav();
  }

  ngOnInit(): void {
    
  }

  
  addToFav(product: Prod, event) {
    this.prod.addToFav(product, event);
    // this.getFavourites();
  }
  addToCart() {
    this.cart.addToCart({
      items: this.product,
      total: 0
    } );
  }
}
