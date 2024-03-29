import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ProfileDetailsService } from 'src/app/core/services/profile-details.service';
import { Router, RouterModule } from '@angular/router';
import { error, log } from 'console';
@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  userDetails: any;
  userInfo: FormGroup;
  userImg:FormGroup;
  constructor(private auth: AuthService,private router:Router, private fb: FormBuilder, private profile: ProfileDetailsService) { }

  async ngOnInit(){
    this.profile.getDetails().subscribe((data) => {
      this.userDetails = data;
      console.log(this.userDetails);
      this.userInfo = this.fb.group({
        fName: [this.userDetails.fName || ''],
        lName: [this.userDetails.lName || ''],
        email: [this.userDetails.email || '',Validators.email],//design error
        address: [this.userDetails.address || ''],
        phoneNumber: [this.userDetails.phoneNumber || '']
      });
      this.userImg = this.fb.group({
        imgUrl:[this.userDetails.imgUrl],
      });
      console.log(this.userInfo.value);
    });
    
  }
 
  changeDetails(){
    console.log(this.userInfo);
    if (this.userInfo.valid) {
      this.profile.editDetails(this.userInfo.value).subscribe(() => {
        // console.log(this.userInfo);
        alert('user details updated');
        this.router.navigate(['profile/details']);
      });
    }
  }
  changeImage(e){
    // console.log(e.target.files[0]);
    // this.userImg.get('imgUrl') = e.target.files[0].ur
    const formData = new FormData();
    formData.append('photo',e.target.files[0], e.target.files[0].name);
    // console.log(formData);
    this.auth.changeImg(formData).subscribe(data => {     
      this.userImg.get('imgUrl').patchValue(data['url']);   
    },error=>{
      console.log(error);
    })
    
  }
  deleteImage(){

    this.auth.deleteImg(this.userImg.get('imgUrl').value).subscribe(()=>{
      this.userImg.get('imgUrl').patchValue(null);
    });
    
  }
}
