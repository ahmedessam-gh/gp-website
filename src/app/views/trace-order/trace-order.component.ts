import { Component, OnInit, Input } from '@angular/core';
import { OrdersService } from 'src/app/core/services/orders.service';
import { order } from 'src/app/core/interfaces/order';
import { ActivatedRoute } from '@angular/router';
import * as $ from 'jquery';
import 'slick-carousel';

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

    $('.my-slider').slick({
      slidesToShow: 3, // Number of slides to show at once
      slidesToScroll: 1, // Number of slides to scroll at once
      prevArrow: null,
      nextArrow: null,
    });
  }
}
