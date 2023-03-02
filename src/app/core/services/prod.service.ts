import { Injectable } from '@angular/core';
import { Prod } from '../interfaces/Prod';

@Injectable({
  providedIn: 'root'
})
export class ProdService {
product:Prod[]
favourites:any=[]
  constructor() {
    this.product = [{
      id: 1,
      ProdName: "Dress",
      Category: 'Women',
      Price: 100,
     img: "assets/images/kids.jpeg",
     quantity:1
    },
     {
      id: 2,
      ProdName: "jeans",
      Category: 'Women',
      Price: 100,
     img: "assets/images/kids.jpeg",
     quantity:1
    },
   {
      id: 3,
      ProdName: "Dress",
      Category: 'Women',
      Price: 100,
     img: "assets/images/kids.jpeg",
     quantity:1
    },
   {
      id: 4,
      ProdName: "Dress Kids",
      Category: 'Women',
      Price: 100,
     img: "assets/images/kids.jpeg",
     quantity:1
    },
     {
      id: 5,
      ProdName: "Dress",
      Category: 'Women',
      Price: 100,
     img: "assets/images/dressify-logo-zip-file (1)/png/logo-black.png",
     quantity:1
    },
    {
      id: 6,
      ProdName: "Casual Wear",
      Price: 100,
      Category: 'Women',
     img: "assets/images/casual.jpg",
     quantity:1
    },
    {
      id: 7,
      ProdName: "Kids Wear",
      Price: 100,
      Category: 'Women',
     img: "assets/images/kids.jpeg",
     quantity:1
    },
    {
      id: 8,
      ProdName: "accessory",
      Category: 'Women',
      Price: 100,
     img: "assets/images/accessory.jpg",
     quantity:1
    },

    ]
  }



  addToFav(obj,$event){
      let index = 0.1;
      for (var i = 0; i < this.favourites.length; i++) {
        if (this.favourites[i]?.id == obj.id) {
           index=i;
           this.favourites.splice(i,1);
           $event.currentTarget.classList.remove('favIcon');
           break;  
          }else{
            index=0.1;
         } 
       }
       if(index==0.1){
        this.favourites.unshift(obj);
        $event.currentTarget.classList.add('favIcon');
    }
  }

 


  getFav(){
    return this.favourites;
  }
  
}