import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginnRoutingModule } from './loginn-routing.module';
import { LoginnComponent } from './loginn.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
    declarations: [
        LoginnComponent
    ],
    imports: [
        CommonModule,
        LoginnRoutingModule,
        SharedModule
    ]
})
export class LoginnModule { }
