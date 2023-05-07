import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { FormBuilder, Validators ,FormGroup} from '@angular/forms';
import { ProfileDetailsService } from 'src/app/core/services/profile-details.service';
import { data } from 'jquery';
@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  userDetails:any;
  userInfo:FormGroup;
  constructor(private auth:AuthService,private fb:FormBuilder,private profile:ProfileDetailsService) { }

  ngOnInit(): void {
    this.userInfo = this.fb.group({
      fName:[''],
      lName:[''],
      email:[''],//design error
      address:[''],
      phoneNumber:['']
    })
  //  this.userDetails =  this.auth.user;
  //  console.log(this.userDetails);
  this.profile.getDetails().subscribe((data)=>{
    this.userDetails = data;
    // console.log(this.userDetails);
  });
  console.log(this.userDetails);
  }

  changeDetails(){
   
    if(this.userInfo.valid){
      console.log(this.userInfo);
      this.profile.editDetails(this.userInfo.value).subscribe(next=>{

      },error => {
        console.log(error);
      });
    }
  }
}
