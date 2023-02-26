import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Error404RoutingModule } from './error404-routing.module';
import { Error404Component } from './error404.component';
import { MainButtonModule } from '../../shared/main-button/main-button.module';

@NgModule({
  declarations: [Error404Component],
  imports: [Error404RoutingModule, CommonModule, MainButtonModule],
  exports: [Error404Component],
})
export class Error404Module {}
