import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ProfileDetailsService } from 'src/app/core/services/profile-details.service';
import { data } from 'jquery';
@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  userDetails: any;
  userInfo: FormGroup;
  constructor(private auth: AuthService, private fb: FormBuilder, private profile: ProfileDetailsService) { }

  async ngOnInit(){
    this.profile.getDetails().subscribe((data) => {
      this.userDetails = data;
      console.log(this.userDetails);
      // this.userInfo = this.fb.group({
      //   fName: [this.userDetails?.fName || ''],
      //   lName: [this.userDetails?.lName || ''],
      //   email: [this.userDetails?.email || ''],//design error
      //   address: [this.userDetails?.address || ''],
      //   phoneNumber: [this.userDetails?.phoneNumber || '']
      // });
    });
    this.userInfo = this.fb.group({
      fName: [''],
      lName: [''],
      email: [''],//design error
      address: [''],
      phoneNumber: ['']
    });
    console.log(this.userDetails);
  }

  changeDetails() {
    if (this.userInfo.valid) {
      this.profile.editDetails(this.userInfo.value);
    }
  }
}
