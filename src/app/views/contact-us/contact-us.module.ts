import { BrowserModule } from '@angular/platform-browser';
import {
  FormsModule,
  ReactiveFormsModule,
  FormGroup,
  FormControl,
} from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ContactUsRoutingModule } from './contact-us-routing.module';
import { ContactUsComponent } from './contact-us.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [ContactUsComponent],
  imports: [
    FormsModule,
    CommonModule,
    ContactUsRoutingModule,
    SharedModule,
    FontAwesomeModule,
    ReactiveFormsModule
  ],
})
export class ContactUsModule {}
