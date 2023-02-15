import { Injectable } from '@angular/core';
import { Prod } from '../interfaces/Prod';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor() { }

  cartProduct:Prod[]=[];



  addToCart(product:Prod){
    let index = 0.1;
    for (var i = 0; i < this.cartProduct.length; i++) {
      if (this.cartProduct[i]?.id == product.id) {
         index=i;
         this.cartProduct.splice(i,1);
         break;  
        } else{
          index=0.1;
       } 
     }
     if(index==0.1){
      this.cartProduct.unshift(product);
      
     }
     
  }
  
  getCart(){
    return this.cartProduct;
  }
  clearCart(){
    this.cartProduct=[];
  }
}
