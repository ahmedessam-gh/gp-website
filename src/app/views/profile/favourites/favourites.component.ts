import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/core/services/customer.service';
import { ProdService } from 'src/app/core/services/prod.service';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouriteComponent implements OnInit {
  favouriteList: any[];
  constructor(private prod: ProdService, private customer: CustomerService) { }

  ngOnInit(): void {
    const param = new HttpParams()
      .set('PageNumber', 1)
      .set('PageSize', 1);
      this.customer.getWishList(param).subscribe((data)=>{
        this.favouriteList = data['productList'];
        console.log(this.favouriteList);
      })
    console.log(this.favouriteList);
  }
  removeItem(product){
    // const param = new HttpParams().set('ProductId',product)
    // return this.customer.deleteWishList(param).subscribe();
  }
  clearCart() {
    this.favouriteList = []
  }

}