import { HttpParams } from '@angular/common/http';
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
  p:any;
  constructor(private cart: CartService) {
    
  }




  ngOnInit(): void {
    this.cart.viewCart(1,2).subscribe((cart)=>{
      this.cartProducts = cart;
      console.log(this.cartProducts);
      
    })

  
  }

  deleteItem(id:number){
    this.cart.deleteCart(id).subscribe(()=>{
      this.cartProducts = this.cartProducts.filter((prod)=>prod.product.productId !== id);
    });
  }

  plus(prodId:number,e) {
    e.target.previousSibling.value = Number(e.target.previousSibling.value)+1
    const param = new HttpParams().set('productId',prodId);
    this.cart.incrementQuantity(param).subscribe();
  }
  minus(prodId:number,e) {
    e.target.nextSibling.value = Number(e.target.nextSibling.value)-1
    const param = new HttpParams().set('productId',prodId)
    this.cart.decrementQuantity(param).subscribe();
  }
  totalPrices(){
    // this.total = this.cart.totalPrice();
    // console.log(this.total);
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
