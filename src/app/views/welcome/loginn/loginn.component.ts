import { ChangeDetectorRef, Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, Validators ,FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { error } from 'console';
import { AuthService } from 'src/app/core/services/auth.service';
@Component({
  selector: 'app-loginn',
  templateUrl: './loginn.component.html',
  styleUrls: ['./loginn.component.css']
})
export class LoginnComponent implements OnInit {


  loginForm:FormGroup;
  submitted:boolean = false;
  loading = false;
  errors:string = '';
  
  constructor(private fb : FormBuilder,private auth:AuthService,private router:Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email :['',Validators.email],
      password : ['',Validators.pattern]
  
    });
  }
  login(){
    this.submitted = true;
    this.loading = true;
    if(this.loginForm.valid){
      
      this.auth.login(this.loginForm.value).subscribe(next => {
        this.loading = false;
        this.router.navigate(['/shop']);
        
      },error => {
        this.loading = false;
        console.log(error.error);
        this.errors = error.error;
      })
    }else{
      this.loading = false;
      this.errors = "Please Fill Your Email or Password";
    }
   
  }
}
