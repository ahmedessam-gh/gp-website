import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { MainButtonModule } from 'src/app/shared/main-button/main-button.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LoginRoutingModule,
    MainButtonModule
    
  ]
})
export class LoginModule { }
