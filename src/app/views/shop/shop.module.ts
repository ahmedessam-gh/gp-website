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
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
SharedModule;
@NgModule({
  declarations: [ShopComponent],
  imports: [
    CommonModule,
    ShopRoutingModule,
    FontAwesomeModule,
    NgxPaginationModule,
    SharedModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    NgbTooltipModule
  ],
})
export class ShopModule {}
