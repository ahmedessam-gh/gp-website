import { Injectable } from '@angular/core';
import { cart } from '../interfaces/cart';
import { HttpClient } from '@angular/common/http';
import { Prod } from '../interfaces/Prod';
import { apiEndpoints } from '../api-endpoints';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http:HttpClient) { }
  addToCart(item):Observable<any[]>{
    return this.http.post<any[]>(`${apiEndpoints.baseUrl}${apiEndpoints.customers.addToCart}`,item);
  }
}