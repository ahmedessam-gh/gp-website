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
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomerRegisterComponent } from './register/customer-register/customer-register.component';
import { VendorRegisterComponent } from './register/vendor-register/vendor-register.component';
import { RegisterModule } from './register/register.module';
import { RegisterRoutingModule } from './register/register-routing.module';

@NgModule({
  declarations: [
      WelcomeComponent,LoginnComponent
  ],
  imports: [
    CommonModule,
    WelcomeRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    SharedModule,
    FontAwesomeModule,
    NgbTooltipModule,
  ]
})
export class WelcomeModule { }
