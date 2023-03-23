import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import * as slick from 'slick-carousel';
import { MainButtonModule } from 'src/app/shared/main-button/main-button.module';

@NgModule({
  declarations: [ProductComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    FormsModule,
    FontAwesomeModule,
    MainButtonModule,
  ],
})
export class ProductModule {}
