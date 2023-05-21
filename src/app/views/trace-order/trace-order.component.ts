import { Component, OnInit, Input } from '@angular/core';
import { OrdersService } from 'src/app/core/services/orders.service';
import { order, orderData } from 'src/app/core/interfaces/order';
import { ActivatedRoute, Router } from '@angular/router';

import * as Aos from 'aos';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-trace-order',
  templateUrl: './trace-order.component.html',
  styleUrls: ['./trace-order.component.css'],
})
export class TraceOrderComponent implements OnInit {
  myOrders: orderData;

  number: any;
  orderId: number;
  constructor(
    private orders: OrdersService,
    private ActivatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const ordersrouting = this.ActivatedRoute.snapshot.paramMap;
    this.orderId = Number(ordersrouting.get('orderNumber'));
    const param = new HttpParams().set('OrderId', this.orderId);
    this.orders.getOrderDetails(param).subscribe((data) => {
      if (data) {
        this.myOrders = data as orderData;

        const dateTime = this.myOrders.dateTime;
        this.myOrders.dateTime = dateTime.substring(0, 10);
      } else {
        this.router.navigate(['/home']);
      }
    });

    Aos.init();
  }
}
