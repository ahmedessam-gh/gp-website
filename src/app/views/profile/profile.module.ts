import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileRoutingModule } from './profile-routing.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FavouriteComponent } from './favourites/favourites.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BottomBarComponent } from './bottom-bar/bottom-bar.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileDetailsRoutingModule } from './profile-details/profile-details-routing.module';
import { RouterModule } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { ProfileDetailsModule } from './profile-details/profile-details.module';
@NgModule({
    declarations: [
        ProfileComponent,
        SidebarComponent,
        ProfileDetailsComponent,
        FavouriteComponent,
        BottomBarComponent,
        MyOrdersComponent,
        DashboardComponent
    ],
    imports: [
        CommonModule,
        ProfileRoutingModule,
        FontAwesomeModule,
        NgxPaginationModule,
        SharedModule,
        ReactiveFormsModule,
        MatInputModule,
        MatFormFieldModule,
        MatIconModule,
        ProfileDetailsRoutingModule,
        RouterModule,
        ProfileDetailsModule
    ]
})
export class ProfileModule {}
