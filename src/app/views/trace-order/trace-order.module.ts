import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TraceOrderRoutingModule } from './trace-order-routing.module';
import { TraceOrderComponent } from './trace-order.component';


@NgModule({
  declarations: [
    TraceOrderComponent
  ],
  imports: [
    CommonModule,
    TraceOrderRoutingModule
  ]
})
export class TraceOrderModule { }
