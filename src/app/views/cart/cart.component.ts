import { Component, OnInit } from '@angular/core';
import { event } from 'jquery';
import { Observable } from 'rxjs';
import { Prod } from 'src/app/core/interfaces/Prod';
import { cart } from 'src/app/core/interfaces/cart';
import { product } from 'src/app/core/interfaces/product';
import { CartService } from 'src/app/core/services/cart.service';
import { ProdService } from 'src/app/core/services/prod.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})




export class CartComponent implements OnInit {

  cartProducts :any;
  cartss:any[];
  noItemsError:string;
  total:number = 0;
  // totalForItem:Number;
  constructor(private cart: CartService) {
    
  }




  ngOnInit(): void {
    this.cart.viewCart().subscribe((cart)=>{
      // console.log(cart);
      this.cartProducts = cart;
      this.cartss = Object.values(this.cartProducts);
      console.log(this.cartss.length);
      console.log(typeof(this.cartss));
      console.log(this.cartProducts.length);
      console.log(typeof(this.cartProducts));
    })

  //  this.totalPrices();
  }

  deleteItem(id:number){
    this.cart.deleteCart(id).subscribe(()=>{
      this.cartProducts = this.cartProducts.filter((prod)=>prod.product.productId !== id);
    },error=>{
      this.noItemsError = error.error;
    });
  }

  minus(obj) {
    if (obj.quantity <= 1) {
      obj.quantity;
    } else {
      obj.quantity--;
      this.totalPrices();
    }
  }
  plus(obj) {
    if (obj.quantity >= 10) {
      obj.quantity;
    } else {
      obj.quantity++;
      this.totalPrices();
    }
  }
  totalPrices(){
    // this.total = this.cart.totalPrice();
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
