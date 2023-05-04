import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, map } from 'rxjs';
// import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  URL = 'https://localhost:7115/api/'

  constructor(private http :HttpClient) { }

  login(credentials:any){
    return this.http.post(`${this.URL}Auth/Login`,credentials).pipe(
      map((res:any) => {
        console.log(res);
        sessionStorage.setItem('token',res.token);
      })
    )
  }
  secured(): Observable<any>{
    return this.http.get(this.URL+ 'Secured')
  }

  logOut(){
    sessionStorage.removeItem('token');
  }
  getUser(){
    return sessionStorage.getItem('token');
  }
}
