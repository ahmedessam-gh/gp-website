import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeRoutingModule } from './welcome-routing.module';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { RegisterComponent } from './register/register.component';
import { LoginnComponent } from './loginn/loginn.component'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
@NgModule({
  declarations: [
      WelcomeComponent , RegisterComponent , LoginnComponent,
  ],
  imports: [
    CommonModule,
    WelcomeRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    SharedModule,
    FontAwesomeModule
  ]
})
export class WelcomeModule { }
