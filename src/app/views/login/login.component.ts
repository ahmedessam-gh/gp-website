import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { 
   
  }

  ngOnInit(): void {
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
