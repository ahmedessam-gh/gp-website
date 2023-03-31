import { Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import * as Aos from 'aos';
import { once } from 'events';
import { event } from 'jquery';
import { cart } from 'src/app/core/interfaces/cart';
import { Prod } from 'src/app/core/interfaces/Prod';
import { CartService } from 'src/app/core/services/cart.service';
import { ProdService } from 'src/app/core/services/prod.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  newProds: Prod[] = [];
  favouriteList: any = [];
  constructor(private prod: ProdService, private cart: CartService ,private router:Router) {

  }

  ngOnInit(): void {
    this.newProds = this.prod.product;
    Aos.init({});
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
  //   var favs = document.getElementsByClassName("favs");
  //   if(this.favouriteList.length==0){
  //     console.log('no items');
  //   }else{
  //     for(var i=0;i<favs.length;i++){
  //       for(var j=0;j<this.favouriteList.length;j++){
  //         if(Number(favs[i].id)==this.favouriteList[j].id){
  //           favs[i].classList.add('favIcon');
  //         }
  //       }
  //     }
  //   }
  //
  //
  //   // console.log(Number(favs[i].id))
  // //  console.log(this.favouriteList)
  // }




}
