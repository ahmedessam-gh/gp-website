import { MainCategoriesComponent } from 'src/app/shared/main-categories/main-categories.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FontAwesomeModule,
  FaIconLibrary,
} from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [MainCategoriesComponent],
  imports: [CommonModule, FontAwesomeModule],
  exports: [MainCategoriesComponent],
})
export class MainCategoriesModule {}
