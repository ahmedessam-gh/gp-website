import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, takeWhile } from 'rxjs';
import { apiEndpoints } from "../api-endpoints";

@Injectable({
  providedIn: 'root'
})
export class ProfileDetailsService {
  URL = apiEndpoints.baseUrl
  constructor(private http:HttpClient) { }
  getDetails(){
    return this.http.get(`${this.URL}${apiEndpoints.customers.viewCustomerProfile}`);
  }

  editDetails(userForm:any){
    return this.http.put(`${this.URL}${apiEndpoints.customers.editCustomerProfile}`,userForm);
  }


}
