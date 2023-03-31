import { Prod } from 'src/app/core/interfaces/Prod';
import { Component, OnInit } from '@angular/core';
import { ProdService } from 'src/app/core/services/prod.service';
import { CartService } from 'src/app/core/services/cart.service';
import { Router } from '@angular/router';
import * as Aos from 'aos';
import * as $ from 'jquery';
import 'slick-carousel';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
})
export class ShopComponent implements OnInit {
  newProds: Prod[] = [];
  favouriteList: any = [];
  p: number = 1;

  constructor(
    private prod: ProdService,
    private cart: CartService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.newProds = this.prod.product;
    Aos.init();
    this.favouriteList = this.prod.getFav();
    console.log(this.favouriteList);
    // this.getFavourites();
  }
  addToCart(productItem: Prod) {
    this.cart.addToCart(productItem);
  }
  addToFav(newProd: Prod, event) {
    this.prod.addToFav(newProd, event);
    // this.getFavourites();
  }
  // getFavourites() {
  //   var favs = document.getElementsByClassName('favs');
  //   if (this.favouriteList.length == 0) {
  //     console.log('no items');
  //   } else {
  //     for (var i = 0; i < favs.length; i++) {
  //       for (var j = 0; j < this.favouriteList.length; j++) {
  //         if (Number(favs[i].id) == this.favouriteList[j].id) {
  //           favs[i].classList.add('favIcon');
  //         }
  //       }
  //     }
  //   }
  // }

  clearAllFilters() {
    $(document).ready(() => {
      $('#uncheck').click(() => {
        $('[type=radio]').prop('checked', false);
      });
    });
  }
}
