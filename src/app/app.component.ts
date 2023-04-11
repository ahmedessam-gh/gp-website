import { Component } from '@angular/core';
import { faL } from '@fortawesome/free-solid-svg-icons';
import { HeaderService } from './core/services/header.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gp-website';
  
// constructor(private header:HeaderService){
//   this.header.setPosition('sticky');
// }
  
  

}
