import { Component, OnInit, QueryList, ViewChild } from '@angular/core';
import * as Aos from 'aos';
import { once } from 'events';
import { event } from 'jquery';
import { Prod } from 'src/app/core/interfaces/Prod';
import { CartService } from 'src/app/core/services/cart.service';
import { ProdService } from 'src/app/core/services/prod.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  newProds: any;
  
  constructor(private prod: ProdService ,private cart:CartService) {

   }
  
  ngOnInit(): void {
    this.newProds = this.prod.product;
    Aos.init({});
    console.log(this.newProds);
  }

  addToCart(newProd :Prod) {
    this.cart.addToCart(newProd);
  }
  
  
}
