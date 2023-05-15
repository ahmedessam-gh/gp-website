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
  pageNumber:number=1;
  pageSize:number = 2; 
  count:number;
  favouriteList: any;
  constructor(private prod: ProdService, private customer: CustomerService) { }

  ngOnInit(): void {
    this.changePage(this.pageNumber);
  }
  changePage(pageNum){
    const param = new HttpParams()
      .set('PageNumber', this.pageNumber)
      .set('PageSize', this.pageSize);
      this.customer.getWishList(param).subscribe((data)=>{
        this.favouriteList = data['productList'];
        console.log(this.favouriteList);
      })
      this.pageNumber = pageNum;
  }
  removeItem(product:number){
    const param = new HttpParams().set('ProductId',product)
    this.customer.deleteWishList(param).subscribe(()=>{
      this.favouriteList = this.favouriteList.filter((fav) => fav.productId !== product);
      if(this.favouriteList.length == 0){
        this.favouriteList = false;
      }

    });
  }
  clearCart() {
    this.favouriteList = []
  }

}