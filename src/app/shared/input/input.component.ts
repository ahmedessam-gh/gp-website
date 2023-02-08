import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Input() type:string = 'text';
  @Input() placeHolder:string = 'Enter here ...';
  @Input() width:string ='100%'
  constructor() { }
  
  ngOnInit(): void {
 
  }

}
