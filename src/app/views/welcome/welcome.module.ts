import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeRoutingModule } from './welcome-routing.module';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome.component';

@NgModule({
  declarations: [
      WelcomeComponent
  ],
  imports: [
    CommonModule,
    WelcomeRoutingModule,
    
    RouterModule
  ]
})
export class WelcomeModule { }
