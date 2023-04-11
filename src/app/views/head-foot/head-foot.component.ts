import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/core/services/header.service';

@Component({
  selector: 'app-head-foot',
  templateUrl: './head-foot.component.html',
  styleUrls: ['./head-foot.component.css']
})
export class HeadFootComponent implements OnInit,AfterViewInit   {
  constructor(public header:HeaderService ,private elementrf:ElementRef) { 
    
  }
  
  ngOnInit(): void {
    
  }
  ngAfterViewInit(){
    // console.log(this.elementrf.nativeElement.querySelector('nav'));
  }

}
