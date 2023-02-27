import { FeaturesSectionModule } from './shared/features-section/features-section.module';
import { MainCategoriesModule } from 'src/app/shared/main-categories/main-categories.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import {
  FontAwesomeModule,
  FaIconLibrary,
} from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { HomeComponent } from './views/home/home.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { CommonModule } from '@angular/common';
import { Ng2SearchPipe } from 'ng2-search-filter/src/ng2-filter.pipe';
import { Router } from '@angular/router';
import { MainButtonModule } from './shared/main-button/main-button.module';
import { LoginComponent } from './views/login/login.component';
import { HeadFootComponent } from './views/head-foot/head-foot.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MainCategoriesComponent } from './shared/main-categories/main-categories.component';
import { ProfileModule } from './views/profile/profile.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    HeadFootComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    Ng2SearchPipeModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    MainButtonModule,
    MainCategoriesModule,
    ReactiveFormsModule,
    FeaturesSectionModule,
    ProfileModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas, far, fab);
  }
}
