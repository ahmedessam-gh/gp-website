import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeadFootDisplayRoutingModule } from './head-foot-display-routing.module';
import { HeadFootDisplayComponent } from './head-foot-display.component';
import { AppModule } from "../../app.module";


@NgModule({
    declarations: [
        HeadFootDisplayComponent
    ],
    imports: [
        CommonModule,
        HeadFootDisplayRoutingModule,
        AppModule
    ]
})
export class HeadFootDisplayModule { }
