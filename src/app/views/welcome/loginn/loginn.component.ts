import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators ,FormGroup} from '@angular/forms';
@Component({
  selector: 'app-loginn',
  templateUrl: './loginn.component.html',
  styleUrls: ['./loginn.component.css']
})
export class LoginnComponent implements OnInit {


  loginForm:FormGroup;
  submitted:boolean = false;
  constructor(private fb : FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email :['',Validators.email],
      password : ['',Validators.pattern]
  
    });
  }
  login(){
    this.submitted = true;
    console.log(this.loginForm);
  }
}
