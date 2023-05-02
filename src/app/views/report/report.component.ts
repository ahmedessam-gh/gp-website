import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm, Validators } from '@angular/forms';
import { FormBuilder,FormGroup } from '@angular/forms';
import * as Aos from 'aos';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})

export class ReportComponent implements OnInit {
  submitted = false;
  reportForm:FormGroup;
  constructor(private fb:FormBuilder){}
 
  ngOnInit(): void {
    Aos.init({});
    this.reportForm = this.fb.group({
      fullName:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      problem:['',Validators.required],
      description:['',Validators.required],
      upload:['',Validators.required]
    })
  }

  
  addShake() {
    this.submitted = true;
    console.log(this.reportForm);
  }

}
