import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart.component';
import { MainButtonModule } from "../../shared/main-button/main-button.module";
import 'animate.css';
import { FontAwesomeModule,FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { CheckoutComponent } from './checkout/checkout.component';
@NgModule({
    declarations: [
        CartComponent,
        CheckoutComponent
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
