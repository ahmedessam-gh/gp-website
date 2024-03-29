import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { error } from 'console';
import { apiEndpoints } from "../api-endpoints";
import { Observable, map,delay ,tap} from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  URL = apiEndpoints.baseUrl
  user;
  constructor(private http :HttpClient) { }

  login(credentials:any){
    return this.http.post(`${this.URL}${apiEndpoints.auth.login}`,credentials).pipe(
      map((res:any) => {
        console.log(res);
        sessionStorage.setItem('token',res.token);
        this.user = res;
      })
    )
  }
  register(registeration:any){
    return this.http.post(`${this.URL}${apiEndpoints.auth.customerRegister}`,registeration).pipe(
      map((res:any) => {
        console.log(res);
        sessionStorage.setItem('token',res.token);
      })
    )
  }
  vendorRegister(vendorCredetials:any){
    return this.http.post(`${apiEndpoints.baseUrl}${apiEndpoints.auth.vendorRegister}`,vendorCredetials).pipe(
      map((res:any)=>{
        console.log(res);
        sessionStorage.setItem('token',res.token)
      })
    );
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
  return this.http.put(`${this.URL}${apiEndpoints.auth.modifyPhoto}`,img);
 }
 
 deleteImg(img){
  return this.http.delete(`${this.URL}${apiEndpoints.auth.deletePhoto}`,img);
 }
}
