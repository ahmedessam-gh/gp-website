import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { 
    
  }
  fullName:string ='';
  form:NgForm;
  ngOnInit(): void {
    // const btn = document.getElementById('app-button');
    // const child = btn.children[0];
    // if(this.form?.invalid){
    //   child.classList.add("disabled");
      
    // }else
    // if(this.form?.valid && (child.classList.contains('disabled'))){
    //   child.classList.remove('disabled');
    // }
    

  }



  login(form: NgForm){
    // const disabled = document.createAttribute('disabled');
    
    
    console.log(form);
    
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

  disabledBtn(){
    
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
