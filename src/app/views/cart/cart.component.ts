import { Component, OnInit } from '@angular/core';
import { event } from 'jquery';
import { Observable } from 'rxjs';
import { cart } from 'src/app/core/interfaces/cart';
import { CartService } from 'src/app/core/services/cart.service';
import { ProdService } from 'src/app/core/services/prod.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})




export class CartComponent implements OnInit {

  cartProducts: cart[]=[];
  total:number = 0;
  // totalForItem:Number;
  constructor(private cart: CartService) {
    
  }




  ngOnInit(): void {
    this.cartProducts = this.cart.getCart();
    console.log(this.cartProducts);
   
  }
  // minus(obj) {
  //   if (obj.quantity <= 1) {
  //     obj.quantity;
  //   } else {
  //     obj.quantity--;
  //   }
  // }
  // plus(obj) {
  //   if (obj.quantity >= 10) {
  //     obj.quantity;
  //   } else {
  //     obj.quantity++;
  //   }
  // }
  totalPrices(){
    this.total = this.cart.totalPrice();
    console.log(this.total);
  }

  clearCart() {
    this.cartProducts.length = 0;  
    // this.totalPrices();
  }

  /*remove clicked item from cart*/
  removeItem(i) {
    this.cartProducts.splice(i, 1);
  }

  



}
