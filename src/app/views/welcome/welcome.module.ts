import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeRoutingModule } from './welcome-routing.module';
import { MainButtonModule } from 'src/app/shared/main-button/main-button.module';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome.component';

@NgModule({
  declarations: [
      WelcomeComponent
  ],
  imports: [
    CommonModule,
    WelcomeRoutingModule,
    MainButtonModule,
    RouterModule
  ]
})
export class WelcomeModule { }
