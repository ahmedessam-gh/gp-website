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
      Price: 100,
     img: "../../../assets/images/kids.jpeg"
    },
     {
      id: 2,
      ProdName: "jeans",
      Price: 100,
     img: "../../../assets/images/kids.jpeg"
    },
   {
      id: 3,
      ProdName: "Dress",
      Price: 100,
     img: "../../../assets/images/kids.jpeg"
    },
   {
      id: 4,
      ProdName: "Drssess",
      Price: 100,
     img: "../../../assets/images/kids.jpeg"
    },
     {
      id: 5,
      ProdName: "Dreaaaass",
      Price: 100,
     img: "../../../assets/images/kids.jpeg"
    }
    ]
  }
}
