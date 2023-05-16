import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/core/services/orders.service';
import { order, orderData } from 'src/app/core/interfaces/order';
import { HttpParams } from '@angular/common/http';
@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css'],
})
export class MyOrdersComponent implements OnInit {
  myOrders?: orderData[];
  count: number;
  p: any;
  pageNumber: number = 1;
  pageSize: number = 5;
  constructor(private orders: OrdersService) {}

  ngOnInit(): void {
    this.getOrders(this.pageNumber);
  }
  //noFavItems() {
  // const tableContainer2 = document.getElementById('ordersContainer');
  //  const noFavsDiv = document.getElementById('noOrdersid');
  //   if (this.myOrders.length == 0) {
  //    tableContainer2.classList.add('d-none');
  //    noFavsDiv.classList.remove('d-none');
  // //   } else {
  //   tableContainer2.classList.remove('d-none');
  //     noFavsDiv.classList.add('d-none');
  //   }
  // }
  getOrders(pageNum) {
    this.pageNumber = pageNum;
    const param = new HttpParams()
      .set('PageNumber', this.pageNumber)
      .set('PageSize', this.pageSize);
    this.orders.getOrders(param).subscribe((data) => {
      this.myOrders = (data as order).productsWithAvgRates;
      this.count = (data as order).count;
      for (let i = 0; i < this.myOrders.length; i++) {
        const dateTime = this.myOrders[i].dateTime;
        this.myOrders[i].dateTime = dateTime.substring(0, 10);
      }
    });
  }
}
