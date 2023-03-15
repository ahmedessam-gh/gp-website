import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FavouriteComponent } from './favourites/favourites.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MainButtonModule } from '../../shared/main-button/main-button.module';
import { BottomBarComponent } from './bottom-bar/bottom-bar.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { NgxPaginationModule } from 'ngx-pagination'; // <-- import the module

@NgModule({
  declarations: [
    ProfileComponent,
    SidebarComponent,
    ProfileDetailsComponent,
    FavouriteComponent,
    BottomBarComponent,
    MyOrdersComponent,
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    FontAwesomeModule,
    MainButtonModule,
    NgxPaginationModule,
  ],
})
export class ProfileModule {}
