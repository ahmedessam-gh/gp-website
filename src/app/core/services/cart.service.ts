import { Injectable } from '@angular/core';
import { cart } from '../interfaces/cart';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() {}

  cartProduct: cart[] = [];

  addToCart(cart: cart) {
    let index = 0.1;
    for (var i = 0; i < this.cartProduct.length; i++) {
      if (this.cartProduct[i]?.items.id == cart.items.id) {
        index = i;
        // this.cartProduct.splice(i, 1);
        break;
      } else {
        index = 0.1;
      }
    }
    if (index == 0.1) {
      this.cartProduct.unshift(cart);
    }
  }

  totalPrice() {
    let total = 0;
    for (var i = 0; i < this.cartProduct.length; i++) {
      total +=
        this.cartProduct[i].items.quantity * this.cartProduct[i].items.Price;
    }
    return total;
  }

  getCart() {
    return this.cartProduct;
  }
  clearCart() {
    this.cartProduct = [];
  }
}
