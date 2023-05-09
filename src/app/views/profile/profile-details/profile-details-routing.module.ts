import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ProfileDetailsComponent } from './profile-details.component';

const routes: Routes = [
  {path:'',component:ProfileDetailsComponent},
  {path:'editProfile',component:EditProfileComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileDetailsRoutingModule { }
