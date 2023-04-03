import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SharedComponent } from './shared.component';
import { ProductboxComponent } from './productbox/productbox.component';
import { ProductComponent } from '../shop/product/product.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxStarRatingModule } from 'ngx-star-rating';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SharedComponent, ProductboxComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    NgxStarRatingModule,
  ],
  exports: [ProductboxComponent],
})
export class SharedModule {}
