import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';
import { once } from 'events';
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
  id :Number ;
  cartItem: any;
  compareArray: any[]=[];
  ngOnInit(): void {
    this.newProds = this.prod.product;
    Aos.init({});
    this.compareArray =this.prod.getData();
    
  }

  function($event) {
    this.imgUrl = $event.target.parentNode.parentNode.childNodes[0].src;
    this.category = $event.target.parentNode.parentNode.parentNode.childNodes[1].innerText;
    this.gender = $event.target.parentNode.parentNode.parentNode.childNodes[2].innerText;
    this.price = $event.target.parentNode.parentNode.parentNode.childNodes[3].innerText;
    this.id = $event.target.parentNode.parentNode.parentNode.childNodes[4].innerText;
    let index = 0.1;
    this.cartItem = {
      id:this.id,
      url: this.imgUrl,
      category: this.category,
      gender: this.gender,
      price: this.price
    }
    for (var i = 0; i < this.compareArray.length; i++) {
      if (this.compareArray[i]?.id == this.cartItem?.id) {
         index=i;
         this.compareArray.splice(i,1);
         break;  
        } else{
          index=0.1;
       } 
     }
     if(index==0.1){
      this.compareArray.unshift(this.cartItem);
     }else{
      alert('item is removed');
     }
  
    this.prod.setData(this.compareArray);
    // console.log(this.compareArray);
  }
}
