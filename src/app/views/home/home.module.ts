import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from "./home.component";
import 'animate.css';
import { MainButtonModule } from "../../shared/main-button/main-button.module";
import { MainCategoriesModule } from 'src/app/shared/main-categories/main-categories.module';
import { FeaturesSectionModule } from "../../shared/features-section/features-section.module";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeRoutingModule } from "./home.routing.module";

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    MainButtonModule,
    HomeRoutingModule,
    MainCategoriesModule,
    FeaturesSectionModule,
    MainButtonModule,
    FontAwesomeModule
  ],
})
export class HomeModule {}
