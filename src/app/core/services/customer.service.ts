import { Injectable } from '@angular/core';
import { cart } from '../interfaces/cart';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Prod } from '../interfaces/Prod';
import { apiEndpoints } from '../api-endpoints';
import { Observable, Subject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private refetch$ = new Subject<void>();
  constructor(private http: HttpClient) { }
  refetchData$() {
    return this.refetch$;
  }
  addToCart(item): Observable<any[]> {
    return this.http.post<any[]>(`${apiEndpoints.baseUrl}${apiEndpoints.customers.addToCart}`, item)
      .pipe(
        tap(() => {
          this.refetch$.next();
        })
      );
  }
  addToWishList(id: number): Observable<any[]> {
    return this.http.post<any[]>(`${apiEndpoints.baseUrl}${apiEndpoints.customers.addToWishList}`, id);
  }
  getWishList(param: HttpParams): Observable<any[]> {
    return this.http.get<any[]>(`${apiEndpoints.baseUrl}${apiEndpoints.wishesLists.getCustomerWishList}`, { params: param });
  }
  deleteWishList(param: HttpParams): Observable<any[]> {
    return this.http.delete<any[]>(`${apiEndpoints.baseUrl}${apiEndpoints.customers.deleteFromWishList}`, { params: param });
  }
  deleteCustomerCart() {
    return this.http.delete(`${apiEndpoints.baseUrl}${apiEndpoints.customers.deletCustomerCart}`)
  }
}
