import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-button',
  templateUrl: './main-button.component.html',
  styleUrls: ['./main-button.component.css']
})
export class MainButtonComponent implements OnInit {

  @Input() content:string = 'button';
  @Input() color?:string 
  @Input() width:string ='100%'
  @Input() borderRadius:string = '10px'
  @Input() type:string;
  @Input() myClass:string;
 


  
  buttonStyle:Record<string,string>={};
  constructor() { }

  ngOnInit(): void {
    this.buttonStyle={
      'content':this.content ,
      'color':this.color || 'white',
      'width':this.width ,
      'border-radius':this.borderRadius
    }
  
  }

}
