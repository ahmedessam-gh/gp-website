import { FeaturesSectionModule } from './../../shared/features-section/features-section.module';
import { MainCategoriesModule } from 'src/app/shared/main-categories/main-categories.module';
import { MainButtonModule } from './../../shared/main-button/main-button.module';
import { BrowserModule } from '@angular/platform-browser';
import {
  FormsModule,
  ReactiveFormsModule,
  FormGroup,
  FormControl,
} from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule, FormStyle } from '@angular/common';

import { ReportRoutingModule } from './report-routing.module';
import { ReportComponent } from './report.component';


@NgModule({
    declarations: [
        ReportComponent
    ],
    imports: [
        CommonModule,
        ReportRoutingModule,
        MainButtonModule,
        MainCategoriesModule,
        FeaturesSectionModule,
        FormsModule
    ]
})
export class ReportModule { }
