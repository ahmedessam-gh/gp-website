import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginnRoutingModule } from './loginn-routing.module';
import { LoginnComponent } from './loginn.component';
import { MainButtonModule } from "../../../shared/main-button/main-button.module";


@NgModule({
    declarations: [
        LoginnComponent
    ],
    imports: [
        CommonModule,
        LoginnRoutingModule,
        MainButtonModule
    ]
})
export class LoginnModule { }
