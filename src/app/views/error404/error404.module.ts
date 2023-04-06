import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Error404RoutingModule } from './error404-routing.module';
import { Error404Component } from './error404.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [Error404Component],
  imports: [Error404RoutingModule, CommonModule , SharedModule],
  exports: [Error404Component],
})
export class Error404Module {}
