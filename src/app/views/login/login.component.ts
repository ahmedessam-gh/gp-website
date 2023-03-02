import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('name') name : ElementRef<HTMLInputElement>;
  @ViewChild('email') email : ElementRef<HTMLInputElement>;
  @ViewChild('password') password : ElementRef<HTMLInputElement>;

  constructor() { 
    
  }
  fullName:string ='';
  form:NgForm;
  errorName :boolean;
  errorEmail :boolean;
  errorPass :boolean;
  ngOnInit(): void {
    
  }



login(form:any){
  this.errorName = !this.name.nativeElement.validity.valid;
  this.errorEmail = !this.email.nativeElement.validity.valid;
  this.errorPass = !this.password.nativeElement.validity.valid;

  if(!form.valid){
    form.stopPropagation();
  }
  console.log(form.value);
  
}



  addShake(form:NgForm){
    const btn = document.getElementById('app-button');
    if(!form.valid){
      btn.classList.add('app-button');
      setTimeout(()=>{
        btn.classList.remove('app-button');
      },500)
    } 
  }
 

  showRegister(){
    const registerDiv = document.getElementById('registerForm');
    const loginDiv = document.getElementById('loginFrom');
    registerDiv?.classList.remove('d-none');
    registerDiv?.classList.add('d-block');  
    loginDiv?.classList.add('d-none')
      
  }
  showLogin(){
    const registerDiv = document.getElementById('registerForm');
    const loginDiv = document.getElementById('loginFrom');
    registerDiv?.classList.add('d-none');  
    loginDiv?.classList.add('d-block');
    loginDiv?.classList.remove('d-none');
      
  }

}
