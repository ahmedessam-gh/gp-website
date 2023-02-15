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
  cartProducts:any;
  constructor(private cart:CartService){ }




  ngOnInit(): void {   
    this.cartProducts=this.cart.getCart();
    console.log(this.cartProducts);
    this.noCartItems();
    }
  
    removeItem(i){
      const tableContainer = document.getElementById('tableContainer');
      const noItemsDiv = document.getElementById('noItemsDiv');

    this.cartProducts.splice(i,1);
    if(this.cartProducts.length==0){
      tableContainer.classList.add('d-none');
      noItemsDiv.classList.remove('d-none');
    }
  }


  noCartItems(){
    const noItemsDiv = document.getElementById('noItemsDiv');
    const tableContainer = document.getElementById('tableContainer');
    if(this.cartProducts.length==0){
      tableContainer.classList.add('d-none');
      noItemsDiv.classList.remove('d-none');
    }else{
      tableContainer.classList.remove('d-none');
      noItemsDiv.classList.add('d-none');
    }
  }
  // Quantity(newSelection){
  //   this.cartProds.forEach(Object => {
  //       this.selectedQuantity=newSelection 
  //       Object['quantity']=(this.selectedQuantity); 
  //   });
  //   ///el option byt8yr fe kol el selects 
  //   console.log(newSelection);
  //   this.prod.setData(this.cartProds);
  //   console.log(this.cartProds);
  // }
}
