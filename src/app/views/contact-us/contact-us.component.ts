import { event } from 'jquery';
import { Component, OnInit, EventEmitter, ViewChild, ElementRef, Input } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import * as Aos from 'aos';
import { from } from 'rxjs';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
})
export class ContactUsComponent implements OnInit {
  @ViewChild('name') name: ElementRef<HTMLInputElement>;
  @ViewChild('email') email: ElementRef<HTMLInputElement>;
  @ViewChild('subject') subject: ElementRef<HTMLInputElement>;
  constructor() {}
  form: any;
  userName: String = '';
  userEmail: String = '';
  userSubject: String = '';
  errorName = false;
  errorEmail = false;
  errorSubject = false;
  ngOnInit(): void {
    Aos.init({});
  }

  submitEmail(form: any) {
    this.errorName = !this.name.nativeElement.validity.valid;
    this.errorEmail = !this.email.nativeElement.validity.valid;
    this.errorSubject = !this.subject.nativeElement.validity.valid;
    if (!form.valid) {
      form.stopPropagation();
    } else console.log(this.userName);
    console.log(this.userEmail);
    console.log(this.userSubject);
  }
  addShake(form: NgForm) {
    const btn = document.getElementById('app-button');
    if (!form.valid) {
      btn.classList.add('app-button');
      setTimeout(() => {
        btn.classList.remove('app-button');
      }, 500);
    }
  }
}
