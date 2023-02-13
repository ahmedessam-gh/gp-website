import { Component, OnInit } from '@angular/core';
import { event } from 'jquery';
import { Observable } from 'rxjs';
import { ProdService } from 'src/app/core/services/prod.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartProds:any;
  selectedQuantity :Number = 1;
  constructor(private prod:ProdService){ }




  ngOnInit(): void {   
    this.cartProds = this.prod.getData();
    console.log(this.cartProds);
    }
  
  // emptyCart() {
  //   if(this.cartProds){

  //   }
  // }
  Quantity(newSelection){
    this.cartProds.forEach(Object => {
        this.selectedQuantity=newSelection 
        Object['quantity']=(this.selectedQuantity); 
    });
    ///el option byt8yr fe kol el selects 
    console.log(newSelection);
    this.prod.setData(this.cartProds);
    console.log(this.cartProds);
  }
}
