import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
})
export class ContactUsComponent implements OnInit {
  constructor() {}
  form: NgModel;
  ngOnInit(): void {}

  submitEmail(form: NgForm) {
    console.log(form);
  }
}
