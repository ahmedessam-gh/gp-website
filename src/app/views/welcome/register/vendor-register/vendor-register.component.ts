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
  loading = false;
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
    this.submitted = true;
    this.loading = true;
    if (this.vendorRegisterForm.valid) {
      console.log(this.vendorRegisterForm.value);
      this.auth.vendorRegister(this.vendorRegisterForm.value).subscribe(response => {
        console.log(response);
        this.loading = false;
        
      }, error => {
        this.loading = false;
        console.log(error);
      })
    } else {
      this.loading = false;
    }
  }

}
