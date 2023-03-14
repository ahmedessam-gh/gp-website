import { Injectable } from '@angular/core';
import { order } from '../interfaces/order';
@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  orders: order[] = [];
  constructor() {
    this.orders = [
      {
        orderNumber: 1,
        orderDate: '1st Jan 2001',
        totalPrice: 1000,
        status: 'delivered',
      },

      {
        orderNumber: 2,
        orderDate: '1st Jan 2001',
        totalPrice: 1000,
        status: 'delivered',
      },
    ];
  }
}
