import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, map,delay ,tap} from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  URL = 'https://localhost:7115/api/'
  
  constructor(private http :HttpClient) { }

  login(credentials:any){
    return this.http.post(`${this.URL}Auth/Login`,credentials).pipe(
      delay(1000),
      map((res:any) => {
        console.log(res);
        sessionStorage.setItem('token',res.token);
      })
    )
  }
  register(registeration:any){
    return this.http.post(`${this.URL}Auth/register`,registeration).pipe(
      delay(1000),
      map((res:any) => {
        console.log(res);
        sessionStorage.setItem('token',res.token);
      })
    )
  }
  // secured(): Observable<any>{
  //   return this.http.get(this.URL+ 'Secured')
  // }

  logOut(){
    sessionStorage.removeItem('token');
  }
  getUser(){
    return sessionStorage.getItem('token');
  }

 
}
