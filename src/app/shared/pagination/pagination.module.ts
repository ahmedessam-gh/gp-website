import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './pagination.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { MainButtonModule } from "../main-button/main-button.module";
import { RouterModule } from '@angular/router';
@NgModule({
    declarations: [
        PaginationComponent
    ],
    exports: [
        PaginationComponent
    ],
    imports: [
        CommonModule,
        NgxPaginationModule,
        MainButtonModule,
        RouterModule
    ]
})
export class PaginationModule { }
