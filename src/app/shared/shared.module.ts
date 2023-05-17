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
import { RouterModule } from '@angular/router';
import {
  NgbRatingModule,
  NgbTooltip,
  NgbTooltipModule,
} from '@ng-bootstrap/ng-bootstrap';
import { RatingComponent } from './rating/rating.component';
import { Rating } from 'ngx-rating';
import { ToasterComponent } from './toaster/toaster.component';
import { NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
import { SpinnerComponent } from './spinner/spinner.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { PaymentComponent } from './payment/payment.component';
import { PaginationService } from '../core/services/pagination.service';
import { ScrollTopDirective } from '../core/directives/scroll-top.directive';
const sharedComponents = [
  ProductboxComponent,
  MainButtonComponent,
  MainCategoriesComponent,
  FeaturesSectionComponent,
  RatingComponent,
  CarouselComponent,
  ToasterComponent,
  PaymentComponent,
  SpinnerComponent,
  ScrollTopDirective
];

@NgModule({
  declarations: [sharedComponents],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    NgxStarRatingModule,
    NgbRatingModule,
    NgbToastModule,
    CarouselModule,
    NgbTooltipModule,
  ],
  exports: [sharedComponents],
  providers: [
    PaginationService
  ]
})
export class SharedModule {}
