import { Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
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
  newProds: Prod[] = [];
  cartproducts: any;
  selectedCartItem: Prod;
  status: boolean;
  constructor(private prod: ProdService, private cart: CartService) {
 
  }

  ngOnInit(): void {
    this.newProds = this.prod.product;
    Aos.init({});
    console.log(this.newProds);
    this.cartproducts = this.cart.getCart();

    
  }
  addToCart(newProd: Prod) {
    this.cart.addToCart(newProd);
    console.log(this.cartproducts);
  }

  cartClicked(event) {
    
      event.target.classList.toggle("cartIcon");
    
    // for(var i=0;i<this.cartproducts.length;i++){
    //   if(this.cartproducts[i]?.id==id){
    //     event.target.classList.remove("cartIcon");
    //   }
    //   else{
    //     event.target.classList.add("cartIcon");
    //   }
    // }
    // console.log(event.target)
  
  }



}
