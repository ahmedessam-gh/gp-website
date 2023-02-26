import { MainCategoriesComponent } from 'src/app/shared/main-categories/main-categories.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FontAwesomeModule,
  FaIconLibrary,
} from '@fortawesome/angular-fontawesome';
import { MainButtonModule } from "../main-button/main-button.module";

@NgModule({
    declarations: [MainCategoriesComponent],
    exports: [MainCategoriesComponent],
    imports: [CommonModule, FontAwesomeModule, MainButtonModule]
})
export class MainCategoriesModule {}
