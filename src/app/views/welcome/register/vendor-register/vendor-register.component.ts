import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-vendor-register',
  templateUrl: './vendor-register.component.html',
  styleUrls: ['./vendor-register.component.css']
})
export class VendorRegisterComponent implements OnInit {
  submitted: boolean = false;
  vendorRegisterForm: FormGroup;
  // loading = false;
  emailError = '';
  userError = '';
  passError = '';
  storeError :string = '';
  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.vendorRegisterForm = this.fb.group({
      userName: ['',Validators.required],
      email: ['',[Validators.required,Validators.email]],
      fName: ['',Validators.required],
      lName: ['',Validators.required],
      nId: ['',Validators.required],
      password: ['',Validators.required],
      phone: ['',Validators.required],
      address: ['',Validators.required],
      storeName: ['',Validators.required]

    });

  }



  vendorRegister() {
    this.emailError = '';
  this.userError = '';
  this.passError = '';
  this.storeError = '';
    this.submitted = true;
    // this.loading = true;
    if (this.vendorRegisterForm.valid) {
      console.log(this.vendorRegisterForm.value);
      this.auth.vendorRegister(this.vendorRegisterForm.value).subscribe(response => {
        console.log(response);
        // this.loading = false;
        
      }, error => {
        // this.loading = false;
        for (let i = 0; i < error.error.length; i++) {
          if (error.error[i] === "Email is already registered!") {
            this.emailError = error.error[i];
          } else if (error.error[i] === "Username is already registered!") {
            this.userError = error.error[i];
          } else if (error.error[i] === "Passwords must be at least 6 characters." || error.error[i] == "Passwords must have at least one non alphanumeric character." || error.error[i] == "Passwords must have at least one digit ('0'-'9')." || error.error[i] == "Passwords must have at least one uppercase ('A'-'Z').") {
            this.passError = "Passwords must be at least 6 characters,Passwords must have at least one non alphanumeric character,Passwords must have at least one digit ('0'-'9') and Passwords must have at least one uppercase ('A'-'Z')."
          }else if (error.error[i] === "Store Name is already registered!") {
            this.storeError = error.error[i];
          } 
          
          console.log(error.error[i]);
        }
      })
    } else {
      // this.loading = false;
      this.emailError = 'enter a valid email address';
      this.userError = 'enter a valid username';
      this.passError = 'enter a valid password';
      this.storeError = "The field StoreName must be a string or array type with a minimum length of '4'"
    }
  }

}
