import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm, Validators } from '@angular/forms';
import { FormBuilder,FormGroup } from '@angular/forms';
import * as Aos from 'aos';
import { CustomerService } from 'src/app/core/services/customer.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})

export class ReportComponent implements OnInit {
  submitted = false;
  reportForm:FormGroup;
  reportData:any;
  constructor(private fb:FormBuilder,private customer:CustomerService){}
 
  ngOnInit(): void {
    Aos.init({});
    this.reportData = this.customer.getReportData();
    console.log(this.reportData.productName);
    this.reportForm = this.fb.group({
      productId:[{value:this.reportData.productId,disabled:true}],
      description:['',Validators.required],
      date:new Date().toISOString()
    })
    
  }

  
  reportProduct() {
    this.submitted = true;
    if(this.reportForm.valid){
      this.customer.reportProduct(this.reportForm.value).subscribe(()=>{
        console.log('Product has been reported successfuly!');
      })
    }
  }

}
