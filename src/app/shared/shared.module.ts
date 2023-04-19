import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductboxComponent } from './productbox/productbox.component';
import { MainButtonComponent } from './main-button/main-button.component';
import { MainCategoriesComponent } from './main-categories/main-categories.component';
import { FeaturesSectionComponent } from './features-section/features-section.component';
// import { ProductComponent } from '../views/shop/product/product.component'; ??
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxStarRatingModule } from 'ngx-star-rating';
import { ReactiveFormsModule } from '@angular/forms';
import {RouterModule} from "@angular/router";

  const sharedComponents = [
    ProductboxComponent,
    MainButtonComponent,
    MainCategoriesComponent,
    FeaturesSectionComponent
  ]

@NgModule({
  declarations: [ sharedComponents ],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    NgxStarRatingModule,
  ],
  exports: [ sharedComponents ],
})
export class SharedModule { }
