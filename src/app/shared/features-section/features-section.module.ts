import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesSectionComponent } from './features-section.component';
import {
  FontAwesomeModule,
  FaIconLibrary,
} from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [FeaturesSectionComponent],
  imports: [CommonModule, FontAwesomeModule],
  exports: [FeaturesSectionComponent],
})
export class FeaturesSectionModule {}
