import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavouriteComponent } from './favourites/favourites.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { ProfileComponent } from './profile.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { EditProfileComponent } from './profile-details/edit-profile/edit-profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { _getOptionScrollPosition } from '@angular/material/core';
import { AuthGuard } from 'src/app/core/AuthGuard/auth.guard';
export const routes: Routes = [
  {
    path: '',
    component: ProfileComponent,
    canActivate:[AuthGuard],
    children: [
      { path: 'details',loadChildren:()=>import('./profile-details/profile-details.module').then(m=>m.ProfileDetailsModule)},
      { path: 'fav', component: FavouriteComponent },
      { path: 'myorders', component: MyOrdersComponent },
      { path: 'dashboard', component:DashboardComponent },

    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule {}
