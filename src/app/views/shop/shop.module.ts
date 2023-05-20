import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopRoutingModule } from './shop-routing.module';
import { ShopComponent } from './shop.component';
import { faBootstrap } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxPaginationModule } from 'ngx-pagination';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Pipe } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { MatInputModule } from '@angular/material/input';

import { MatCommonModule } from '@angular/material/core';
SharedModule;
@NgModule({
  declarations: [ShopComponent],
  imports: [
    CommonModule,
    ShopRoutingModule,
    FontAwesomeModule,
    NgxPaginationModule,
    SharedModule,
    MatSliderModule,

    ReactiveFormsModule,

    FormsModule,
  ],
})
export class ShopModule {}
