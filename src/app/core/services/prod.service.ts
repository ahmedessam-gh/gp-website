import { Injectable } from '@angular/core';
import { Prod } from '../interfaces/Prod';

@Injectable({
  providedIn: 'root',
})
export class ProdService {
  product: Prod[];
  favourites: any = [];
  constructor() {
    this.product = [
      {
        id: 1,
        ProdName: ' White Fashioned Dress',
        Category: 'Women',
        Price: 100,
        img: 'assets/images/01.jpg',
        size: 's ',
        discount: 30,
        isStock: true,
        rent: true,
        color: [
          {
            value: 'black',
            label: 'black',
            imgUrl: 's',
          },

          {
            value: 'blue',
            label: 'blue',
            imgUrl: 's',
          },
        ],
        colorChosen: ' ',
        status: 'Sale',
        note: 'Solid Polo Collar T-shirt',
        rating: 5,
        quantity: 1,
        details:
          'Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo.',
      },

      {
        id: 2,
        ProdName: 'jeans',
        Category: 'Women',
        Price: 100,
        img: 'assets/images/02.jpg',
        rent: true,
        isStock: true,

        color: [
          {
            value: '',
            label: '',
            imgUrl: '',
          },
          {
            value: '',
            label: '',
            imgUrl: '',
          },
        ],
        colorChosen: ' ',

        size: ' ',

        discount: 30,
        status: 'Sale',
        note: 'Solid Polo Collar T-shirt',
        rating: 5,
        quantity: 1,
        details:
          'Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo.',
      },
      {
        id: 3,
        ProdName: 'Dress',
        Category: 'Women',
        Price: 100,
        img: 'assets/images/04.jpg',
        discount: 50,
        note: 'Solid Polo Collar T-shirt',
        rating: 5,
        size: ' ',
        color: [
          {
            value: 'black',
            label: '',
            imgUrl: '',
          },
          {
            value: 'blue',
            label: '',
            imgUrl: '',
          },
        ],
        colorChosen: ' ',
        status: 'Sale',
        rent: false,
        isStock: true,
        quantity: 1,
        details:
          'Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo.',
      },
      {
        id: 4,
        ProdName: 'Dress Kids',
        Category: 'Women',
        Price: 100,
        img: 'assets/images/08.jpg',
        size: ' ',
        discount: 50,
        note: 'Solid Polo Collar T-shirt',
        rating: 5,
        rent: false,
        isStock: false,
        color: [
          {
            value: 'black',
            label: '',
            imgUrl: '',
          },
          {
            value: 'blue',
            label: '',
            imgUrl: '',
          },
        ],
        colorChosen: ' ',
        status: 'Sale',

        quantity: 1,
        details:
          'Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo.',
      },
      {
        id: 5,
        ProdName: 'Dress',
        Category: 'Women',
        Price: 100,
        img: 'assets/images/01.jpg',
        size: ' ',
        discount: 50,
        note: 'Solid Polo Collar T-shirt',
        rating: 5,
        rent: true,
        isStock: true,
        color: [
          {
            value: 'blue',
            label: '',
            imgUrl: '',
          },
          {
            value: 'black',
            label: '',
            imgUrl: '',
          },
        ],
        colorChosen: ' ',
        status: 'Sale',

        quantity: 1,
        details:
          'Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo.',
      },
      {
        id: 6,
        ProdName: 'Casual Wear',
        Price: 100,
        Category: 'Women',
        img: 'assets/images/04.jpg',
        size: ' ',
        discount: 50,
        status: 'Sale',
        note: 'Solid Polo Collar T-shirt',
        rating: 5,
        rent: true,
        isStock: false,
        color: [
          {
            value: 'black',
            label: '',
            imgUrl: '',
          },
          {
            value: 'blue',
            label: '',
            imgUrl: '',
          },
        ],
        colorChosen: ' ',

        quantity: 1,
        details:
          'Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo.',
      },
      {
        id: 7,
        ProdName: 'Kids Wear',
        Price: 100,
        Category: 'Women',
        img: 'assets/images/01.jpg',
        size: ' ',
        discount: 50,
        status: 'Sale',
        note: 'Solid Polo Collar T-shirt',
        rating: 5,
        rent: true,
        isStock: false,
        color: [
          {
            value: 'black',
            label: '',
            imgUrl: '',
          },
          {
            value: 'blue',
            label: '',
            imgUrl: '',
          },
        ],
        colorChosen: ' ',

        quantity: 1,
        details:
          'Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo.',
      },
      {
        id: 8,
        ProdName: 'accessory',
        Category: 'Women',
        Price: 100,
        img: 'assets/images/08.jpg',
        size: ' s',
        discount: 0,
        status: 'Sale',
        note: 'Solid Polo Collar T-shirt',
        rating: 5,
        rent: false,
        isStock: false,

        color: [
          {
            value: 'green',
            label: 's',
            imgUrl: '',
          },
          {
            value: 'brown',
            label: 's',
            imgUrl: '',
          },
        ],
        colorChosen: ' ',

        quantity: 1,
        details:
          'Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo.',
      },
    ];
  }

  addToFav(obj, $event) {
    let index = 0.1;
    for (var i = 0; i < this.favourites.length; i++) {
      if (this.favourites[i]?.id == obj.id) {
        index = i;
        this.favourites.splice(i, 1);
        $event.currentTarget.classList.remove('favIcon');
        break;
      } else {
        index = 0.1;
      }
    }
    if (index == 0.1) {
      this.favourites.unshift(obj);
      $event.currentTarget.classList.add('favIcon');
    }
  }

  getFav() {
    return this.favourites;
  }
}
