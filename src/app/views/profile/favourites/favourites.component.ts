import { Component, OnInit } from '@angular/core';
import { ProdService } from 'src/app/core/services/prod.service';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouriteComponent implements OnInit {
  favouriteList:any;
  constructor(private prod:ProdService) { }

  ngOnInit(): void {
    this.favouriteList = this.prod.getFav();
    console.log(this.favouriteList);
  }
  removeItem(i) {
    this.favouriteList.splice(i, 1); 
  }
  clearCart() {   
    this.favouriteList = []
  }
  
}