import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/core/services/orders.service';
import { order } from 'src/app/core/interfaces/order';
@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css'],
})
export class MyOrdersComponent implements OnInit {
  myOrders: order[] = [];
  constructor(private orders: OrdersService) {}

  ngOnInit(): void {
    this.myOrders = this.orders.orders;

    this.noFavItems;
  }
  noFavItems() {
    const tableContainer2 = document.getElementById('tableContainer2');
    const noFavsDiv = document.getElementById('noFavsDiv');
    if (this.myOrders.length == 0) {
      tableContainer2.classList.add('d-none');
      noFavsDiv.classList.remove('d-none');
    } else {
      tableContainer2.classList.remove('d-none');
      noFavsDiv.classList.add('d-none');
    }
  }
}
