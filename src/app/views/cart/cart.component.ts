import { Component, OnInit } from '@angular/core';
import { event } from 'jquery';
import { Observable } from 'rxjs';
import { CartService } from 'src/app/core/services/cart.service';
import { ProdService } from 'src/app/core/services/prod.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})




export class CartComponent implements OnInit {

  cartProducts: any;
  constructor(private cart: CartService) {

  }




  ngOnInit(): void {
    this.cartProducts = this.cart.getCart();
    console.log(this.cartProducts);
    this.noCartItems();
  }

  minus(obj) {
    if (obj.quantity <= 1) {
      obj.quantity;
    } else {
      obj.quantity--;
    }
  }
  plus(obj) {
    if (obj.quantity >= 10) {
      obj.quantity;
    } else {
      obj.quantity++;
    }
  }
  clearCart() {
    const tableContainer = document.getElementById('tableContainer');
    const noItemsDiv = document.getElementById('noItemsDiv');
    this.cartProducts = []
    tableContainer.classList.add('d-none');
    noItemsDiv.classList.remove('d-none');
  }

  /*remove clicked item from cart*/
  removeItem(i) {
    const tableContainer = document.getElementById('tableContainer');
    const noItemsDiv = document.getElementById('noItemsDiv');
    this.cartProducts.splice(i, 1);
    if (this.cartProducts.length == 0) {
      tableContainer.classList.add('d-none');
      noItemsDiv.classList.remove('d-none');
    }
  }

  noCartItems() {
    const tableContainer = document.getElementById('tableContainer');
    const noItemsDiv = document.getElementById('noItemsDiv');
    if (this.cartProducts.length == 0) {
      tableContainer.classList.add('d-none');
      noItemsDiv.classList.remove('d-none');
    } else {
      tableContainer.classList.remove('d-none');
      noItemsDiv.classList.add('d-none');
    }
  }



}
