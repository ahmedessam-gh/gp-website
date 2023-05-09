import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileDetailsRoutingModule } from './profile-details-routing.module';
import { ProfileDetailsComponent } from './profile-details.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { SharedModule } from "../../../shared/shared.module";
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
@NgModule({
    declarations: [
        EditProfileComponent
    ],
    imports: [
        CommonModule,
        ProfileDetailsRoutingModule,
        SharedModule,
        ReactiveFormsModule,
        FormsModule
    ]
})
export class ProfileDetailsModule { }
