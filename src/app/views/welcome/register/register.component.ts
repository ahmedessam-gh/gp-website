import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  login(form:any){

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

}
