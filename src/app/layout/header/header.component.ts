import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  collapsed = true;
  toggler(): void {
    this.collapsed = !this.collapsed;
  }

  constructor() { }
  ngOnInit(): void {


  }
  //function that displays search container
  searchContainer() {
    const search_container = document.querySelector('.search-container');
    search_container?.classList.add('activeSearchcontainer');

  }
  //function that removes search container
  removeContainer() {
    const search_container = document.querySelector('.search-container');

    search_container?.classList.remove('activeSearchcontainer')
  }

}


