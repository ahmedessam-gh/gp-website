import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-customer-register',
  templateUrl: './customer-register.component.html',
  styleUrls: ['./customer-register.component.css']
})
export class CustomerRegisterComponent implements OnInit {

  submitted: boolean = false;
  registerForm: FormGroup;
  // loading = false;
  emailError: string = '';
  userError: string = '';
  passError: string = '';
  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      // fname :['',Validators.required],
      // lname :['',Validators.required],
      email: ['', [Validators.email, Validators.required]],
      password: ['', Validators.required],
      username: ['', Validators.required],
      // role:['',Validators.required],

    });

  }



  register() {
    this.userError = '';
    this.passError = '';
    this.emailError = '';
    this.submitted = true;
    // this.loading = true;
    if (this.registerForm.valid) {
      console.log(this.registerForm.value);
      this.auth.register(this.registerForm.value).subscribe(response => {
        console.log(response);
        // this.loading = false;
        this.router.navigate(['/shop']);
      }, error => {
        // this.loading = false;
        for (let i = 0; i < error.error.length; i++) {
          if (error.error[i] === 'Email is already registered!') {
            this.emailError = error.error[i];
          } else if (error.error[i] === 'Username is already registered!') {
            // this.userError = 'Username is already registered!';
            this.userError = error.error[i];
          } else if (error.error[i] === 'Passwords must have at least one non alphanumeric character.' || error.error[i] == "Passwords must have at least one digit ('0'-'9')." || error.error[i] == "Passwords must have at least one uppercase ('A'-'Z').") {
            this.passError = "Passwords must have at least one non alphanumeric character,Passwords must have at least one digit ('0'-'9'),Passwords must have at least one uppercase ('A'-'Z')."
          }
          console.log(error.error[i]);
        }
        // ["Passwords must have at least one non alphanumeric character.","Passwords must have at least one digit ('0'-'9').","Passwords must have at least one uppercase ('A'-'Z')."]
        // console.log(error.error);
      })
    } else {
      // this.loading = false;
      this.emailError = 'enter a valid email address';
      this.userError = 'enter a valid username';
      this.passError = 'enter a valid password';
    }
  }
}
