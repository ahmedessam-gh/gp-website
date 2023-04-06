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
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { CommonModule } from '@angular/common';
import { Ng2SearchPipe } from 'ng2-search-filter/src/ng2-filter.pipe';
import { Router } from '@angular/router';
import { WelcomeComponent } from './views/welcome/welcome.component';
import { HeadFootComponent } from './views/head-foot/head-foot.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MainCategoriesComponent } from './shared/main-categories/main-categories.component';
import { ProfileModule } from './views/profile/profile.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HeadFootComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    Ng2SearchPipeModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    // ProfileModule,
    NgxPaginationModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas, far, fab);
  }
}
