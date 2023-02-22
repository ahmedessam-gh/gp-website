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
    this.noFavItems();
  }
  removeItem(i) {
    const tableContainer2 = document.getElementById('tableContainer2');
    const noFavsDiv = document.getElementById('noFavsDiv');
    this.favouriteList.splice(i, 1);
    if (this.favouriteList.length == 0) {
      tableContainer2.classList.add('d-none');
      noFavsDiv.classList.remove('d-none');
    }
  }
  clearCart() {
    const tableContainer2 = document.getElementById('tableContainer2');
    const noFavsDiv = document.getElementById('noFavsDiv');
    this.favouriteList = []
    tableContainer2.classList.add('d-none');
    noFavsDiv.classList.remove('d-none');
  }
  noFavItems() {
    const tableContainer2 = document.getElementById('tableContainer2');
    const noFavsDiv = document.getElementById('noFavsDiv');
    if (this.favouriteList.length == 0) {
      tableContainer2.classList.add('d-none');
      noFavsDiv.classList.remove('d-none');
    } else {
      tableContainer2.classList.remove('d-none');
      noFavsDiv.classList.add('d-none');
    }
  }
}