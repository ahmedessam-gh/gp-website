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
  @Input() name:string ='name'
  @Input() myInputName = '';
  constructor() { }
  
  ngOnInit(): void {
    this.myInputName='#'+this.name+'new';
    console.log(this.myInputName);
  }

}
