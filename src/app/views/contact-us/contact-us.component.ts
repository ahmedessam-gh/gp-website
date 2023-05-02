import { event } from 'jquery';
import { Component, OnInit, EventEmitter, ViewChild, ElementRef, Input } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import * as Aos from 'aos';
import { from } from 'rxjs';
import { FormBuilder, Validators ,FormGroup} from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
})
export class ContactUsComponent implements OnInit {
  contactForm:FormGroup;
  submitted:boolean;
  constructor(private fb:FormBuilder) {}
  
  ngOnInit(): void {
    Aos.init({});
    this.contactForm = this.fb.group({
      fullName : ['',Validators.required],
      email : ['',[Validators.required,Validators.email]],
      subject : ['',Validators.required]
    })
  }

  
  addShake(){
    this.submitted = true;
    // const btn = document.getElementById('app-button');
    // if (!this.contactForm.valid) {
    //   btn.classList.add('app-button');
    //   setTimeout(() => {
    //     btn.classList.remove('app-button');
    //   }, 500);
    // }
    console.log(this.contactForm);
  }
}
