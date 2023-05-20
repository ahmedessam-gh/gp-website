import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule, NgTemplateOutlet } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import * as slick from 'slick-carousel';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import 'owl.carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import { MatToolbar, MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { CarouselModule } from 'ngx-owl-carousel-o';
import {
  NgbRatingModule,
  NgbProgressbarModule,
  NgbToastModule,
} from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';
import { ToasterComponent } from 'src/app/shared/toaster/toaster.component';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [ProductComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    FormsModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    SharedModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    NgbRatingModule,
    NgbProgressbarModule,
    NgxPaginationModule,
    CarouselModule,
    NgbToastModule,
    NgbTooltipModule
  ],
})
export class ProductModule {}
