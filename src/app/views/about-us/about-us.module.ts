import { FeaturesSectionModule } from './../../shared/features-section/features-section.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutUsRoutingModule } from './about-us-routing.module';
import { AboutUsComponent } from './about-us.component';
import { MainCategoriesModule } from 'src/app/shared/main-categories/main-categories.module';
import { MainButtonModule } from '../../shared/main-button/main-button.module';

@NgModule({
  declarations: [AboutUsComponent],
  imports: [
    CommonModule,
    AboutUsRoutingModule,
    MainButtonModule,
    MainCategoriesModule,
    FeaturesSectionModule,
  ],
})
export class AboutUsModule {}
