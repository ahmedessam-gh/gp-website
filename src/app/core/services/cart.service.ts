import { Injectable } from '@angular/core';
import { cart } from '../interfaces/cart';
import { HttpClient, HttpParams } from '@angular/common/http';
import { apiEndpoints } from '../api-endpoints';
import { Observable, map } from 'rxjs';
import { orderDetails } from '../interfaces/orderDetails';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private http:HttpClient) {}
  viewCart(pNumber:number,pSize:number):Observable<any[]>{
    return this.http.get<any[]>(`${apiEndpoints.baseUrl}${apiEndpoints.carts.getCustomerCart(pNumber,pSize)}`);
  }
  
  deleteCart(id){
    return this.http.delete(`${apiEndpoints.baseUrl}${apiEndpoints.carts.removeFromCart(id)}`);
  }
  incrementQuantity(param:HttpParams){ 
    return this.http.put(`${apiEndpoints.baseUrl}${apiEndpoints.carts.incrementQuantity}`,'',{params:param});
  }
  decrementQuantity(param:HttpParams){
    return this.http.put(`${apiEndpoints.baseUrl}${apiEndpoints.carts.decrementQuantity}`,'',{params:param});
  }
  getOrderDetails():Observable<orderDetails[]>{
    return this.http.get<orderDetails[]>(`${apiEndpoints.baseUrl}${apiEndpoints.carts.getOrderSummary}`);
  }
}
