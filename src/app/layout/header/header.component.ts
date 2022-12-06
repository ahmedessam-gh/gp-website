import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  collapsed = true;
  toggler():void{
    this.collapsed = !this.collapsed;
  }

  constructor() { }
  ngOnInit(): void {


}

searchContainer(){

  const body =document.getElementById('body') as HTMLBodyElement
  const search_container= document.querySelector('.search-container');

   search_container?.classList.add('activeSearchcontainer');
   body?.classList.add('activesearch')


}

removeContainer(){
  const search_container= document.querySelector('.search-container');

  search_container?.classList.remove('activeSearchcontainer')


}

}


