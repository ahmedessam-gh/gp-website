import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';
import { ProdService } from 'src/app/core/services/prod.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  newProds: any;
  constructor(private prod: ProdService) { }
  imgUrl: string = '';
  category: string = '';
  gender: string = '';
  price: string = '';
  favouritItem: object = {};
  ngOnInit(): void {
    this.newProds = this.prod.product;
    Aos.init({});
  }

  function($event) {
    this.imgUrl = $event.target.parentNode.parentNode.childNodes[0].src;
    this.category = $event.target.parentNode.parentNode.parentNode.childNodes[1].innerText;
    this.gender = $event.target.parentNode.parentNode.parentNode.childNodes[2].innerText;
    this.price = $event.target.parentNode.parentNode.parentNode.childNodes[3].innerText;
    this.favouritItem = {
      url: this.imgUrl,
      category: this.category,
      gender: this.gender,
      price: this.price
    }
    console.log(this.favouritItem);
  }
}
