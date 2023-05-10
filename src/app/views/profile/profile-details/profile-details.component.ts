import { Component, OnInit } from '@angular/core';
import { ProfileDetailsService } from 'src/app/core/services/profile-details.service';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.css']
})
export class ProfileDetailsComponent implements OnInit {
  userDetails:any
  constructor(private profile:ProfileDetailsService) { }

  ngOnInit(): void {
    this.profile.getDetails().subscribe((data)=>{
      this.userDetails = data; 
    })
  }

}
