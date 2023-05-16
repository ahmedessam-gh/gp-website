import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { order, orderData } from '../interfaces/order';
import { apiEndpoints } from '../api-endpoints';
@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  URL = apiEndpoints.baseUrl;
  constructor(private http: HttpClient) {}

  getOrders(params: HttpParams): Observable<any> {
    return this.http.get(
      `${this.URL}${apiEndpoints.customers.getCustomerOrders}`,
      { params }
    );
  }

  getOrderDetails(params: HttpParams): Observable<any> {
    return this.http.get(
      `${this.URL}${apiEndpoints.customers.getOrderDetails}`,
      { params }
    );
  }
}
