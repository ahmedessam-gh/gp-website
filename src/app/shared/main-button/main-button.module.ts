import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainButtonComponent } from './main-button.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [MainButtonComponent],
  imports: [CommonModule, FormsModule, FontAwesomeModule],
  exports: [MainButtonComponent],
})
export class MainButtonModule {}
