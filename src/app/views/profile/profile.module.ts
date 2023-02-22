import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import {
  FontAwesomeModule,
  FaIconLibrary,
} from '@fortawesome/angular-fontawesome';
import { MainButtonModule } from "../../shared/main-button/main-button.module";
@NgModule({
    declarations: [
        ProfileComponent,
        SidebarComponent,
        ProfileDetailsComponent
    ],
    imports: [
        CommonModule,
        ProfileRoutingModule,
        FontAwesomeModule,
        MainButtonModule
    ]
})
export class ProfileModule { }
