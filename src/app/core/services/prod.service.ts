import { Injectable } from '@angular/core';
import { Prod } from '../interfaces/Prod';

@Injectable({
  providedIn: 'root'
})
export class ProdService {
product:Prod[]

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
      id: 6,
      ProdName: "Casual Wear",
      Price: 100,
      Category: 'Women',
     img: "assets/images/casual.jpg"
    },
    {
      id: 7,
      ProdName: "Kids Wear",
      Price: 100,
      Category: 'Women',
     img: "assets/images/kids.jpeg"
    },
    {
      id: 8,
      ProdName: "accessory",
      Category: 'Women',
      Price: 100,
     img: "assets/images/accessory.jpg"
    },

    ]
  }




  
  
}
