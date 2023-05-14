import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart.component';
import 'animate.css';
import { FontAwesomeModule,FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { CheckoutComponent } from './checkout/checkout.component';
import { SharedModule } from 'src/app/shared/shared.module';
@NgModule({
    declarations: [
        CartComponent,
        CheckoutComponent
    ],
    imports: [
        CommonModule,
        CartRoutingModule,
        FormsModule,     
        FontAwesomeModule,  
        SharedModule
    ]
})
export class CartModule { }
