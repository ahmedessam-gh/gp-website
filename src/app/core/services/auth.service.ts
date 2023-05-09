import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { error } from 'console';
import { Observable, map,delay ,tap} from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  URL = 'https://localhost:7115/api/'
  user;
  constructor(private http :HttpClient) { }

  login(credentials:any){
    return this.http.post(`${this.URL}Auth/Login`,credentials).pipe(
      delay(1000),
      map((res:any) => {
        console.log(res);
        sessionStorage.setItem('token',res.token);
        this.user = res;
      })
    )
  }
  register(registeration:any){
    return this.http.post(`${this.URL}Auth/CustRegister`,registeration).pipe(
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

 changeImg(img){
  
  return this.http.put(`${this.URL}Auth/ModifyPhoto`,img);
 }
}
