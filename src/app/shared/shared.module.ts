import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SharedComponent } from './shared.component';
import { ProductboxComponent } from './productbox/productbox.component';
import { MainButtonComponent } from './main-button/main-button.component';
import { MainCategoriesComponent } from './main-categories/main-categories.component';
import { FeaturesSectionComponent } from './features-section/features-section.component';
// import { ProductComponent } from '../views/shop/product/product.component'; ??
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxStarRatingModule } from 'ngx-star-rating';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SharedComponent, ProductboxComponent , MainButtonComponent,MainCategoriesComponent,FeaturesSectionComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    NgxStarRatingModule,
  ],
  exports: [
    ProductboxComponent,
    MainButtonComponent,
    MainCategoriesComponent,
    FeaturesSectionComponent
  ],
})
export class SharedModule { }
