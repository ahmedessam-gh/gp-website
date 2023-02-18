import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavouriteRoutingModule } from './favourite-routing.module';
import { FavouriteComponent } from './favourite.component';
import { MainButtonModule } from "../../shared/main-button/main-button.module";
import { FontAwesomeModule,FaIconLibrary } from '@fortawesome/angular-fontawesome';

@NgModule({
    declarations: [
        FavouriteComponent
    ],
    imports: [
        CommonModule,
        FavouriteRoutingModule,
        MainButtonModule,
        FontAwesomeModule
    ]
})
export class FavouriteModule { }
