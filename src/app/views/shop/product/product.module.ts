import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import * as slick from 'slick-carousel';
import { MainButtonModule } from 'src/app/shared/main-button/main-button.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [ProductComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    FormsModule,
    FontAwesomeModule,
    MainButtonModule,
    ReactiveFormsModule,
    SharedModule,
  ],
})
export class ProductModule {}
