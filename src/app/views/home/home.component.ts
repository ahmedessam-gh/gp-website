import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import * as Aos from 'aos';
import { stringify } from 'querystring';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() {
     
    
   }

  ngOnInit(): void {
    Aos.init();
    
  }


  
  


  
}
