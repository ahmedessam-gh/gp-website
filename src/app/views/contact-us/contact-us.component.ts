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
  
  constructor() {}
  
  ngOnInit(): void {
    Aos.init({});
  }

  submitEmail(form: any) {
    
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
