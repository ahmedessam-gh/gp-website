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

  cartProducts: any[];
  p: any;
  total: number = 0;
  priceOfProduct: number;


  constructor(private cart: CartService) {

  }

  //
  ngOnInit(): void {
    this.cart.viewCart(1, 1).subscribe((cart) => {
      this.cartProducts = cart['carts'];
      console.log(this.cartProducts);
      this.totalPrice();
    });

    
  }

  //
  totalPrice() {
    console.log('works fine');
    this.total = 0;
    this.cartProducts.forEach((product: any) => {
      this.total += product.price - (product.price * product['sale%']);
      console.log(product.price);
    });
    console.log(this.total);
  }
  //
  deleteItem(id: number) {
    this.cart.deleteCart(id).subscribe(() => {
      this.cartProducts = this.cartProducts.filter((prod) => prod.product.productId !== id);
    });
  }
  //
  plus(cartProduct:any,prodId: number, e) {  
    console.log(cartProduct.quantity);
    if(cartProduct.quantity >= 10){
      e.target.previousSibling.value = 10
    }else{
      e.target.previousSibling.value = Number(e.target.previousSibling.value) + 1
      cartProduct.quantity += 1;
      cartProduct.price += cartProduct.product.price;
      const param = new HttpParams().set('productId', prodId);
      this.cart.incrementQuantity(param).subscribe();
      this.totalPrice();
    }  
  }
  //
  minus(cartProduct:any,prodId: number, e) {
    console.log(cartProduct.quantity);
    if(cartProduct.quantity <= 1){
      e.target.nextSibling.value = 1
    }else{
      e.target.nextSibling.value = Number(e.target.nextSibling.value) - 1
      cartProduct.quantity -= 1;
      cartProduct.price -= cartProduct.product.price;
      const param = new HttpParams().set('productId', prodId)
      this.cart.decrementQuantity(param).subscribe();
      this.totalPrice();
    }
  }

  //
  clearCart() {

    this.cartProducts.length = 0;
    // this.totalPrices();
  }

  /*remove clicked item from cart*/
  removeItem(i) {
    this.cartProducts.splice(i, 1);
  }





}
