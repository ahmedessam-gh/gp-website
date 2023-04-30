import { BrowserModule } from '@angular/platform-browser';
import {
  FormsModule,
  ReactiveFormsModule,
  FormGroup,
  FormControl,
} from '@angular/forms';
import { NgModule} from '@angular/core';
import { CommonModule, FormStyle } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReportRoutingModule } from './report-routing.module';
import { ReportComponent } from './report.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
    declarations: [
        ReportComponent
    ],
    imports: [
        CommonModule,
        ReportRoutingModule,
        FormsModule,
        SharedModule,
        FontAwesomeModule,
        ReactiveFormsModule
    ]
})
export class ReportModule { }
