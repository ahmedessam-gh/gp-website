import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainButtonComponent } from './main-button.component';

@NgModule({
  declarations: [MainButtonComponent],
  imports: [CommonModule, FormsModule],
  exports: [MainButtonComponent],
})
export class MainButtonModule {}
