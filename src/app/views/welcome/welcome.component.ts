import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {


  constructor() {

  }

  ngOnInit(): void {

  }



  // login(form: any) {

  //   if (!form.valid) {
  //     form.stopPropagation();
  //   }
  //   console.log(form.value);

  // }


  // showRegister(){
  //   const registerDiv = document.getElementById('registerForm');
  //   const loginDiv = document.getElementById('loginFrom');
  //   registerDiv?.classList.remove('d-none');
  //   registerDiv?.classList.add('d-block');  
  //   loginDiv?.classList.add('d-none')

  // }
  // showLogin(){
  //   const registerDiv = document.getElementById('registerForm');
  //   const loginDiv = document.getElementById('loginFrom');
  //   registerDiv?.classList.add('d-none');  
  //   loginDiv?.classList.add('d-block');
  //   loginDiv?.classList.remove('d-none');

  // }

}
