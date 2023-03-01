import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.css']
})
export class ProfileDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  createInput(name,type,event){
    const text = event.currentTarget.previousElementSibling.children[0].innerHTML;
    const itemReplaced = event.currentTarget.previousElementSibling.children[0];
    const inp= document.createElement("input");
    inp.type = type;
    inp.name = name;
    inp.value = text;
    inp.classList.add('d-block', 'form-control');
    event.currentTarget.previousElementSibling.replaceChild(inp,itemReplaced); 
  }
  

}
