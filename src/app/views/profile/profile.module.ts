import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';


@NgModule({
  declarations: [
    ProfileComponent,
    SidebarComponent,
    ProfileDetailsComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule { }
