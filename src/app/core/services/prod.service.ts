import { Injectable } from '@angular/core';
import { Prod } from '../interfaces/Prod';

@Injectable({
  providedIn: 'root'
})
export class ProdService {
product:Prod[]
cartArray:any[]=[];
  constructor() {
    this.product = [{
      id: 1,
      ProdName: "Dress",
      Category: 'Women',
      Price: 100,
     img: "assets/images/kids.jpeg"
    },
     {
      id: 2,
      ProdName: "jeans",
      Category: 'Women',
      Price: 100,
     img: "assets/images/kids.jpeg"
    },
   {
      id: 3,
      ProdName: "Dress",
      Category: 'Women',
      Price: 100,
     img: "assets/images/kids.jpeg"
    },
   {
      id: 4,
      ProdName: "Dress Kids",
      Category: 'Women',
      Price: 100,
     img: "assets/images/kids.jpeg"
    },
     {
      id: 5,
      ProdName: "Dress",
      Category: 'Women',
      Price: 100,
     img: "assets/images/dressify-logo-zip-file (1)/png/logo-black.png"
    },
    {
      id: 4,
      ProdName: "Casual Wear",
      Price: 100,
      Category: 'Women',
     img: "assets/images/casual.jpg"
    },
    {
      id: 4,
      ProdName: "Kids Wear",
      Price: 100,
      Category: 'Women',
     img: "assets/images/kids.jpeg"
    },
    {
      id: 4,
      ProdName: "accessory",
      Category: 'Women',
      Price: 100,
     img: "assets/images/accessory.jpg"
    },

    ]
  }


  setData(obj){
    this.cartArray = obj;
  }
  getData(){
    return this.cartArray;
  }
  
}
