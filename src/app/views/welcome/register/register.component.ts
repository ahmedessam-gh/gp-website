import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormBuilder, Validators ,FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { error } from 'console';
import { AuthService } from 'src/app/core/services/auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  submitted:boolean = false;
  registerForm :FormGroup;
  loading = false;
  constructor(private fb :FormBuilder,private auth:AuthService,private router:Router) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      fname :['',Validators.required],
      lname :['',Validators.required],
      email :['',[Validators.email,Validators.required]],
      password :['',Validators.required],
      username :['',Validators.required],
      role:['',Validators.required],

    });
   
  }



  register(){
    this.submitted = true;
    this.loading = true;
    if(this.registerForm.valid){
      console.log(this.registerForm.value);
      this.auth.register(this.registerForm.value).subscribe(response =>{
        console.log(response);
        this.loading = false;
        this.router.navigate(['/shop']);
      },error => {
        this.loading = false;
        console.log(error);
      })
    }else{
      this.loading = false;
    }
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
