import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainButtonModule } from 'src/app/shared/main-button/main-button.module';
import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    MainButtonModule,
    FormsModule
  ]
})
export class RegisterModule { }
