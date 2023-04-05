import { Component, OnInit, Input } from '@angular/core';
import { OrdersService } from 'src/app/core/services/orders.service';
import { order } from 'src/app/core/interfaces/order';
import { ActivatedRoute } from '@angular/router';
declare var $: any;
import 'slick-carousel';
import 'owl.carousel';
import * as Aos from 'aos';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

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

    $('.owl-carousel').owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 3,
        },
        1000: {
          items: 5,
        },
      },
    });
  }
}
