import { Injectable } from '@angular/core';
import { cart } from '../interfaces/cart';
import { Prod } from '../interfaces/Prod';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor() { }

  cartProduct:cart[]=[];
  total = 1;

  addToCart(cart:cart){
    let index = 0.1;
    for (var i = 0; i < this.cartProduct.length; i++) {
      if (this.cartProduct[i]?.id ==cart.id) {
         index=i;
         this.cartProduct.splice(i,1);
         break;  
        } else{
          index=0.1;
       } 
     }
     if(index==0.1){
      this.cartProduct.unshift(cart);
     }
  }
  
  getCart(){
    return this.cartProduct;
  }
  clearCart(){
    this.cartProduct=[];
  }
}
