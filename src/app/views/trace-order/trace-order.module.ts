
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TraceOrderRoutingModule } from './trace-order-routing.module';
import { TraceOrderComponent } from './trace-order.component';
import {
  FontAwesomeModule,
  FaIconLibrary,
} from '@fortawesome/angular-fontawesome';
import 'slick-carousel';
import 'owl.carousel';

import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [TraceOrderComponent],
  imports: [
    CommonModule,
    TraceOrderRoutingModule,
    FontAwesomeModule,
    SharedModule
  ],
})
export class TraceOrderModule {}
