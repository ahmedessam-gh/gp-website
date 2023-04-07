import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FavouriteComponent } from './favourites/favourites.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BottomBarComponent } from './bottom-bar/bottom-bar.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { SharedModule } from 'src/app/shared/shared.module';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
    declarations: [
        ProfileComponent,
        SidebarComponent,
        ProfileDetailsComponent,
        FavouriteComponent,
        BottomBarComponent,
        MyOrdersComponent,
        EditProfileComponent,
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
        
       
    ]
})
export class ProfileModule {}
