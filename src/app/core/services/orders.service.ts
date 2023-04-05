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
        orderDate: '15th Jan. 2022',
        totalPrice: 1000,
        status: 'Order Placed',
        orderArrival: '15th Jan. 2022',
        paymentMethod: 'Online Payment',
        quantity: 10,
      },

      {
        orderNumber: 2,
        orderDate: '1st Jan 2001',
        totalPrice: 1000,
        status: 'delivered',
        orderArrival: '10st Jan 2001',
        paymentMethod: 'Online Payment',
        quantity: 10,
      },
      {
        orderNumber: 3,
        orderDate: '1st Jan 2001',
        totalPrice: 2000,
        status: 'out for delivery',
        orderArrival: '10st Jan 2001',
        paymentMethod: 'Cash on Delivery',
        quantity: 10,
      },
      {
        orderNumber: 4,
        orderDate: '1st Jan 2001',
        totalPrice: 1000,
        status: 'preparing order',
        orderArrival: '10st Jan 2001',
        paymentMethod: 'Cash on Delivery',
        quantity: 10,
      },
      {
        orderNumber: 5,
        orderDate: '1st Jan 2001',
        totalPrice: 1000,
        status: 'failed',
        orderArrival: '10st Jan 2001',
        paymentMethod: 'Cash on Delivery',
        quantity: 10,
      },
    ];
  }
}
