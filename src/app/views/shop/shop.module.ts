import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { ShopComponent } from './shop.component';
import { faBootstrap } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MainButtonModule } from 'src/app/shared/main-button/main-button.module';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [ShopComponent],
  imports: [
    CommonModule,
    ShopRoutingModule,
    FontAwesomeModule,
    MainButtonModule,
    NgxPaginationModule,
    FormsModule,
  ],
})
export class ShopModule {}
