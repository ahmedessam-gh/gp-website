import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProdService } from 'src/app/core/services/prod.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartProds:any;
  constructor(private prod:ProdService){ }




  ngOnInit(): void {   
    this.cartProds = this.prod.getData();
    // for(var i= 1;i<this.cartProds.length;i++){
    //   if(this.cartProds[i].category != this.cartProds[0].category){
    //     console.log('no duplicates');
    //   }else{
    //     console.log('there is duplicates');
    //   }
    // }
  }

}
