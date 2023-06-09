import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomerRegisterComponent } from './customer-register/customer-register.component';
import { VendorRegisterComponent } from './vendor-register/vendor-register.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from './register.component';
import { RegisterRoutingModule } from './register-routing.module';
import { ChooseUserComponent } from './choose-user/choose-user.component';

@NgModule({
  declarations: [RegisterComponent,CustomerRegisterComponent,VendorRegisterComponent, ChooseUserComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    FontAwesomeModule,
    NgbTooltipModule,
    RouterModule,
    RegisterRoutingModule

  ]
})
export class RegisterModule { }
