import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm, Validators } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import * as Aos from 'aos';
import { delay } from 'rxjs';
import { CustomerService } from 'src/app/core/services/customer.service';
import { NgbService } from 'src/app/core/services/ngb.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})

export class ReportComponent implements OnInit {
  submitted = false;
  reportForm: FormGroup;
  reportData: any;
  toastrMsg: any;
  constructor(private fb: FormBuilder, private customer: CustomerService, private ngb: NgbService, private router: Router) { }

  ngOnInit(): void {
    Aos.init({});
    this.reportData = this.customer.getReportData();
    console.log(this.reportData);
    this.reportForm = this.fb.group({
      // productId:[{value:this.reportData.productId,disabled:true}],
      productId: ['' || this.reportData.productId],
      description: ['', Validators.required],
    })

  }


  reportProduct(msg: any) {
    this.submitted = true;
    this.toastrMsg = msg;
    if (this.reportForm.valid) {
      this.customer.reportProduct(this.reportForm.value).subscribe();
      this.ngb.show(this.toastrMsg);
      setTimeout(() => {
        this.router.navigate(['/shop']);
      }, 3000)
    }

  }

}
