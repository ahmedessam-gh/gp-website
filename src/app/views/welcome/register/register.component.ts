import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormBuilder, Validators ,FormGroup} from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  submitted:boolean = false;
  registerForm :FormGroup;
  constructor(private fb :FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      fname :['',Validators.required],
      lname :['',Validators.required],
      email :['',[Validators.email,Validators.required]],
      password :['',Validators.compose([
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9]*$/),
        Validators.minLength(6),
      ])],
      confirmPassword :['',Validators.required],
      user:['',Validators.required],

    });
   
  }



  register(){
    this.submitted = true;
    const pass = this.registerForm.get('password');
    const confirm = this.registerForm.get('confirmPassword');
    if(pass.value !== confirm.value){
      confirm.setErrors({'passNotMatching':true})
    }
    console.log(this.registerForm);
  }

  // addShake(form:NgForm){
  //   const btn = document.getElementById('app-button');
  //   if(!form.valid){
  //     btn.classList.add('app-button');
  //     setTimeout(()=>{
  //       btn.classList.remove('app-button');
  //     },500)
  //   } 
  // }

}
