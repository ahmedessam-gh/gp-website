import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, takeWhile } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileDetailsService {
  URL = 'https://localhost:7115/api/'
  constructor(private http:HttpClient) { }
  getDetails(){
    return this.http.get(`${this.URL}Customers/ViewCustomerProfile`);
  }

  editDetails(userForm:any){
    return this.http.put(`${this.URL}Customers/EditCustomerProfile`,userForm).pipe(
      map((res:any) => {
        console.log(res);
      })
    );
  }

  
}
