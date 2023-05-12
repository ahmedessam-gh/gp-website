import { Injectable } from '@angular/core';
import { cart } from '../interfaces/cart';
import { HttpClient } from '@angular/common/http';
import { apiEndpoints } from '../api-endpoints';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private http:HttpClient) {}
  viewCart(){
    return this.http.get(`${apiEndpoints.baseUrl}${apiEndpoints.carts.getCustomerCart}`);
  }
  
  deleteCart(id){
    return this.http.delete(`${apiEndpoints.baseUrl}${apiEndpoints.carts.removeFromCart(id)}`);
  }
  
}
