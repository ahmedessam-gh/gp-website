import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginnRoutingModule } from './loginn-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        LoginnRoutingModule,
        SharedModule,
        ReactiveFormsModule
    ]
})
export class LoginnModule { }
