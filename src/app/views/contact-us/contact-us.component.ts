import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  constructor() {}
  form: any;
  userName: String = '';
  userEmail: String = '';
  userSubject: String = '';

  ngOnInit(): void {
  }

  submitEmail(form: any) {
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
