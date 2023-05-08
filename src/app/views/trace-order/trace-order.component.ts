import { Component, OnInit, Input } from '@angular/core';
import { OrdersService } from 'src/app/core/services/orders.service';
import { order } from 'src/app/core/interfaces/order';
import { ActivatedRoute } from '@angular/router';

import * as Aos from 'aos';

@Component({
  selector: 'app-trace-order',
  templateUrl: './trace-order.component.html',
  styleUrls: ['./trace-order.component.css'],
})
export class TraceOrderComponent implements OnInit {
  myOrders: any;

  number: any;
  constructor(
    private orders: OrdersService,
    private ActivatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const ordersrouting = this.ActivatedRoute.snapshot.paramMap;
    const orderid = Number(ordersrouting.get('orderNumber'));
    this.myOrders = this.orders.orders.find(
      (order) => order.orderNumber === orderid
    );
    Aos.init();
  }
}
