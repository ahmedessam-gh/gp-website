import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import * as Aos from 'aos';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  
  constructor() {}
 
  ngOnInit(): void {
    Aos.init({});
  }

  
  addShake() {
    // const btn = document.getElementById('app-button');
    // if (!form.valid) {
    //   btn.classList.add('app-button');
    //   setTimeout(() => {
    //     btn.classList.remove('app-button');
    //   }, 500);
    // }
  }

}
