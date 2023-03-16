import { Component, OnInit, Input } from '@angular/core';
import { OrdersService } from 'src/app/core/services/orders.service';
import { order } from 'src/app/core/interfaces/order';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-trace-order',
  templateUrl: './trace-order.component.html',
  styleUrls: ['./trace-order.component.css'],
})
export class TraceOrderComponent implements OnInit {
  @Input() myOrders: order[];
  number: any;
  constructor(
    private orders: OrdersService,
    private ActivatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.myOrders = this.orders.orders;
  }
}
