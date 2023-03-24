import { FeaturesSectionModule } from './../../shared/features-section/features-section.module';
import { MainCategoriesModule } from 'src/app/shared/main-categories/main-categories.module';
import { MainButtonModule } from './../../shared/main-button/main-button.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TraceOrderRoutingModule } from './trace-order-routing.module';
import { TraceOrderComponent } from './trace-order.component';
import {
  FontAwesomeModule,
  FaIconLibrary,
} from '@fortawesome/angular-fontawesome';
import 'slick-carousel';

import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

@NgModule({
  declarations: [TraceOrderComponent],
  imports: [
    CommonModule,
    TraceOrderRoutingModule,
    FontAwesomeModule,
    MainButtonModule,
    MainCategoriesModule,
    FeaturesSectionModule,
  ],
})
export class TraceOrderModule {}
