import { Injectable } from '@angular/core';
import { cart } from '../interfaces/cart';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { apiEndpoints } from '../api-endpoints';
import { Observable, map } from 'rxjs';
import { orderDetails } from '../interfaces/orderDetails';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  order: any;
  orderTotal: number = 0
  constructor(private http: HttpClient) { }
  viewCart(pNumber: number, pSize: number){
    return this.http.get(`${apiEndpoints.baseUrl}${apiEndpoints.carts.getCustomerCart(pNumber, pSize)}`);
  }
  deleteCart(id) {
    return this.http.delete(`${apiEndpoints.baseUrl}${apiEndpoints.carts.removeFromCart(id)}`);
  }
  incrementQuantity(param: HttpParams) {
    return this.http.put(`${apiEndpoints.baseUrl}${apiEndpoints.carts.incrementQuantity}`, '', { params: param });
  }
  decrementQuantity(param: HttpParams) {
    return this.http.put(`${apiEndpoints.baseUrl}${apiEndpoints.carts.decrementQuantity}`, '', { params: param });
  }
  getOrderDetails(): Observable<orderDetails> {
    return this.http.get<orderDetails>(`${apiEndpoints.baseUrl}${apiEndpoints.carts.getOrderSummary}`);
  }

  async totalPrice(): Promise<number> {
    this.orderTotal = 0;
    this.order = await this.getOrderDetails().toPromise();
    this.order.detailsList.forEach((prod) => {
      this.orderTotal += prod.price;
    });
    return this.orderTotal;
  }

  payWithCash(payUpdates:any){
    return this.http.post(`${apiEndpoints.baseUrl}${apiEndpoints.carts.payWithCash}`,payUpdates);
  }
  payWithCredit(payUpdates:string){
    return this.http.post(`${apiEndpoints.baseUrl}${apiEndpoints.carts.payWithCredit}`,payUpdates,{responseType:'text'});
  }
  sendStripToken(stripeToken){
    return this.http.post(`${apiEndpoints.baseUrl}${apiEndpoints.carts.stripeToken}`,stripeToken);
  }
}
