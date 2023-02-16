import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart.component';
import { MainButtonModule } from "../../shared/main-button/main-button.module";

import {
    FontAwesomeModule,
    FaIconLibrary,
  } from '@fortawesome/angular-fontawesome';
@NgModule({
    declarations: [
        CartComponent
    ],
    imports: [
        CommonModule,
        CartRoutingModule,
        FormsModule,
        MainButtonModule,
        FontAwesomeModule
    ]
})
export class CartModule { }
