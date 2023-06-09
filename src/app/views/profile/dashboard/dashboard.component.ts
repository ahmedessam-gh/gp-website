import { Component, OnInit } from '@angular/core';
import { ProfileDetailsService } from 'src/app/core/services/profile-details.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userDetails:any;
  constructor(private profile:ProfileDetailsService) { }

  ngOnInit(): void {
    this.profile.getDetails().subscribe((data)=>{
      this.userDetails = data;
    })
  }

}
