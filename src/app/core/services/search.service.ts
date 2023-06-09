import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { apiEndpoints } from '../api-endpoints';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  URL = apiEndpoints.baseUrl;

  constructor(private http: HttpClient) {}

  getSearchProds(params: HttpParams): Observable<any> {
    return this.http.get(`${this.URL}${apiEndpoints.products.searchProducts}`, {
      params,
    });
  }
}
