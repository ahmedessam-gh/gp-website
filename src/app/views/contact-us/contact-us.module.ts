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
import { CommonModule } from '@angular/common';

import { ContactUsRoutingModule } from './contact-us-routing.module';
import { ContactUsComponent } from './contact-us.component';

@NgModule({
  declarations: [ContactUsComponent],
  imports: [
    FormsModule,
    CommonModule,
    ContactUsRoutingModule,
    MainCategoriesModule,
    FeaturesSectionModule,
    MainButtonModule,
  ],
})
export class ContactUsModule {}
